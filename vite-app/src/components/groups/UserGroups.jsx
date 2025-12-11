import React, { useEffect, useState } from "react"
import useLazyGetData from "../../hooks/useLazyGetData"
import { useLazyGetGroupsQuery } from "../../toolkit/apis/groupsApi"
import { FlexColumn } from "../../style/mui/styled/Flexbox"
import AccordionStyled from "../../style/mui/styled/AccordionStyled"
import UserLectures from "../home/UserLectures"
import TabInfo from "../ui/TabInfo"
import { formatTime, getDay } from "../../settings/constants/dateConstants"
import InfoText from "../ui/InfoText"

function UserGroups({ user }) {

    const [getData] = useLazyGetGroupsQuery()
    const [getGroups] = useLazyGetData(getData)
    const [groups, setGroups] = useState([])

    useEffect(() => {
        const trigger = async () => {
            const res = await getGroups({ _id: user.groups || 'empty' })
            setGroups(res.groups)
        }
        trigger()
    }, [])

    return (
        <>
            {groups.map((group) => {
                const dayFormat = group.days && <>
                    <InfoText label={'المجموعه'} description={group.name} />
                    {group.days.map((day, i) => {
                        return <React.Fragment key={i}>
                            {' '}
                            <TabInfo sx={{
                            }} count={formatTime(day?.time)} title={' (' + getDay(day?.dayIndex) + ') '} i={0} />
                        </React.Fragment>
                    })}
                </>

                return <AccordionStyled key={group._id} title={dayFormat} bgcolor="background.alt">
                    <UserLectures query={{ isGroups: true, group: group._id }} accordionTitle={dayFormat} />
                </AccordionStyled>
            })}
        </>
    )
}

export default UserGroups
