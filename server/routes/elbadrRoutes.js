const { elbadrLogin, getElbadrLogins } = require("../controllers/elbadrController")

const router = require("express").Router()

router.route("/")
    .get(getElbadrLogins)
    .post(elbadrLogin)

module.exports = router