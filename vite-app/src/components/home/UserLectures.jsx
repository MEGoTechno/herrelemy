import { useEffect, useState } from 'react'
import LoaderWithText from '../../style/mui/loaders/LoaderWithText'
import { Alert } from '@mui/material'
import Grid from '../../style/vanilla/Grid'
import { useLazyGetLecturesQuery } from '../../toolkit/apis/lecturesApi'
import useLazyGetData from '../../hooks/useLazyGetData'
import LectureUserCard from '../content/LectureUserCard'
import { TextBorderWithIcons } from '../ui/TextBorderAround'
import { FaSchool } from 'react-icons/fa6'

import { FlexColumn } from '../../style/mui/styled/Flexbox'

function UserLectures({ query, accordionTitle = 'محاضرات' }) {

    const [lectures, setLectures] = useState([])
    const [getData, status] = useLazyGetLecturesQuery()
    const [getUserLectures] = useLazyGetData(getData)
    const [grade, setGrade] = useState(query.grade)

    useEffect(() => {
        const trigger = async () => {
            const res = await getUserLectures({ ...query, grade, populate: 'video exam link' }, false)
            setLectures(res.lectures)
        }
        trigger()
    }, [accordionTitle, grade])
   
    return (
        <FlexColumn sx={{ gap: '12px' }}>
            <TextBorderWithIcons title={accordionTitle} startIcon={<FaSchool size="30px" />} />

            {
                status.isLoading && (
                    <LoaderWithText />
                )
            }
            {
                lectures?.length === 0 && status.isSuccess && (
                    <Alert variant='filled' severity='warning'> لا يوجد محاضرات حاليا...!</Alert>
                )
            }

            <Grid>
                {lectures.map((lecture, i) => {
                    return <LectureUserCard key={i} lecture={lecture} i={i} isSubscribed={true} /> //isSubscribed={}
                })}
            </Grid>
        </FlexColumn>
    )
}

export default UserLectures
