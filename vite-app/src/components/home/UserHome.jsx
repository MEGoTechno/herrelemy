import { useEffect, useMemo, useState } from 'react'
import Section from '../../style/mui/styled/Section'
import UserHeader from '../ui/UserHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Avatar, Box, Button, Typography } from '@mui/material'
import { useLazyGetCourseSubscriptionsQuery } from '../../toolkit/apis/userCoursesApi'
import useLazyGetData from '../../hooks/useLazyGetData'
import TitleSection from '../../components/ui/TitleSection'
import UnitCourseDetails from '../../components/content/UnitCourseDetails'
import AccordionStyled from '../../style/mui/styled/AccordionStyled'
import Grid from '../../style/vanilla/Grid'
import LoaderWithText from '../../style/mui/loaders/LoaderWithText'
import Separator from '../../components/ui/Separator'
import { lang } from '../../settings/constants/arlang'

import { user_roles } from '../../settings/constants/roles'
import { useLazyIsLoggedQuery } from '../../toolkit/apis/usersApi'
import { setUser } from '../../toolkit/globalSlice'
import UserLectures from './UserLectures'
import { CoursesIcon, VidsIcon2 } from '../ui/svg/ContentSvgs'
import LatestCourses from './LatestCourses'
import { FlexBetween, FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox'
import AdminHome from './AdminHome'
import InfoText from '../ui/InfoText'
import { HashLink } from 'react-router-hash-link'
import UserGroups from '../groups/UserGroups'

function UserHome() {

    const { user } = useSelector(s => s.global)

    const [courses, setCourses] = useState([])
    const [openUserCourses, setOpenCourses] = useState(false)
    const [getData, status] = useLazyGetCourseSubscriptionsQuery()
    const [getCourses] = useLazyGetData(getData)

    useEffect(() => {
        const trigger = async () => {
            const res = await getCourses({ user: user._id, populate: 'course' })

            setCourses(res.subscriptions)
        }
        if (openUserCourses && courses.length === 0) {
            trigger()
        }
    }, [openUserCourses])

    const dispatch = useDispatch()
    const [getUserData] = useLazyIsLoggedQuery()

    useEffect(() => {
        const checkIslogged = async () => {
            const { data } = await getUserData({}, true)
            const userData = data?.values

            dispatch(setUser({ ...user, ...userData }))
        }
        checkIslogged()
    }, [])

    const [activeCompo, setActiveCompo] = useState(0)

    const btns = [
        <Button endIcon={<CoursesIcon />} fullWidth key={0} variant={activeCompo === 0 ? 'contained' : 'outlined'} onClick={() => setActiveCompo(0)}>كورساتك</Button>,
        <Button endIcon={<VidsIcon2 />} fullWidth key={1} variant={activeCompo === 1 ? 'contained' : 'outlined'} onClick={() => setActiveCompo(1)}>محاضرات خاصه</Button>,
        // <Button fullWidth key={2} variant={activeCompo === 2 ? 'contained' : 'outlined'} onClick={() => setActiveCompo(2)}>محتوى مجموعاتك</Button>,
        // <Button fullWidth key={3} variant={activeCompo === 3 ? 'contained' : 'outlined'} onClick={() => setActiveCompo(3)}> محاضرات مجانيه</Button>,
    ]

    const compos = [
        {
            value: 0,
            compo: <AccordionStyled title={'كورساتك'} bgcolor="background.alt" expanded={openUserCourses} setExpanded={setOpenCourses}>
                {status.isLoading && (
                    <LoaderWithText />
                )}
                {courses?.length === 0 && status.isSuccess && (
                    <Alert variant='filled' severity='warning'> انت لم تشترك فى اى كورس بعد...!</Alert>
                )}
                <Grid>
                    {courses && courses?.map(({ course, createdAt, updatedAt, currentIndex }, i) => <UnitCourseDetails key={i}
                        course={course}
                        subscribedAt={createdAt}
                        lastLectureAt={updatedAt}
                        currentIndex={currentIndex}
                    />)}
                </Grid>
            </AccordionStyled>,
        },
        { compo: <UserLectures key={0} query={{ codes: true, paid: true }} accordionTitle={'محاضراتك' + ' ' + '(تم شراءها' + " || " + "اكواد)"} />, value: 1 },
        // {
        //     value: 2,
        //     compo: <UserLectures query={{ isGroups: true }} accordionTitle='محاضرات مجموعاتك' />
        //     ,
        // },
        {
            value: 3,
            compo: <UserLectures key={3} query={{ isFree: true, grade: user.grade }} accordionTitle='محاضرات مجانيه' />
        },
    ]

    const modifiedButtons = useMemo(() => {

        const data = { btns, compos }
        if (user.role === user_roles.STUDENT) {
            data.btns.push(<Button fullWidth key={4} variant={activeCompo === 4 ? 'contained' : 'outlined'} onClick={() => setActiveCompo(4)}> محاضرات السنتر</Button>,)
            data.compos.push({ compo: <UserLectures key={4} query={{ isCenter: true, grade: user.grade }} accordionTitle='محاضرات السنتر' />, value: 4 },)
        }

        if (user.groups?.length) {
            btns.push(<Button fullWidth key={5} variant={activeCompo === 5 ? 'contained' : 'outlined'} onClick={() => setActiveCompo(5)}>مجموعاتك</Button>,)
            compos.push({ compo: <UserGroups key={5} user={user} accordionTitle='مجموعاتك' />, value: 5 },)
        }

        return { btns, compos }
    }, [user.role, user.groups?.length, user.grade, activeCompo, compos])

    return (
        <Section sx={{ minHeight: '86vh' }}>
            <FlexRow gap={'16px'} sx={{ justifyContent: 'center' }}>
                <FlexColumn >
                    <Avatar alt={user.name.toUpperCase()} src={user?.avatar?.url || "#"}
                        variant='square'
                        sx={{
                            m: '6px',
                            height: '250px',
                            maxWidth: "450px", width: '250px',
                            bgcolor: 'primary.400',
                            fontWeight: 800,
                            fontSize: '50px',
                            color: 'grey.0',
                            borderRadius: '16px'
                        }}
                    />
                    {(!user?.avatar?.url) && (
                        <HashLink to={'/user/profile#edit'} smooth style={{ textDecoration: 'none' }}>
                            <Typography color={'primary.main'} sx={{ cursor: 'pointer' }}>هل تريد ايضافه صوره شخصيه ؟</Typography>
                        </HashLink>
                    )}
                    <FlexColumn justifyContent={'flex-start'}>
                        <InfoText label={'الاسم'} description={user?.name} />
                        <InfoText label={'اسم المستخدم'} description={user?.userName} />
                    </FlexColumn>
                </FlexColumn>
                <Box flex={.9}>
                    <UserHeader user={user} flexDirection={'row'} variant={'circle'} avatar={false} />
                </Box>
            </FlexRow>
            {/* 
            <Typography variant='subBanner' >
                مرحبًا :  {user.name}
            </Typography> */}
            <Separator />
            {(user.role === user_roles.ONLINE || user.role == user_roles.STUDENT) ?
                <Box sx={{ my: '16px' }}>
                    <TitleSection title={lang.YOUR_SUBSCRIPTIONS} />

                    <Grid min='120px' sx={{ width: '100%' }}>
                        {modifiedButtons.btns}
                    </Grid>
                    {modifiedButtons.compos.find(compo => compo.value === activeCompo)?.compo}
                    <FlexColumn>
                        <Separator />
                        <Separator sx={{ width: '60%', opacity: "60%" }} />
                    </FlexColumn>
                    <LatestCourses user={user} />
                </Box>
                : (user.role === user_roles.ADMIN || user.role == user_roles.SUBADMIN) ? <AdminHome /> : ''
            }
        </Section>
    )
}

export default UserHome