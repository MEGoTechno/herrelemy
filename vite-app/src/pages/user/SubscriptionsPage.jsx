import { Alert, Paper } from "@mui/material"
import TitleWithDividers from "../../components/ui/TitleWithDividers"
import usePaginate from "../../hooks/usePaginate"
import LoaderWithText from "../../style/mui/loaders/LoaderWithText"
import Section from "../../style/mui/styled/Section"
import { useLazyGetCourseSubscriptionsQuery } from "../../toolkit/apis/userCoursesApi"
import Grid from "../../style/vanilla/Grid"
import UnitCourseDetails from "../../components/content/UnitCourseDetails"

function SubscriptionsPage({ isTitle = true }) {

    const [getData, status] = useLazyGetCourseSubscriptionsQuery()

    const { data: courses } = usePaginate({
        getData, key: 'subscriptions', params: { populate: 'course' }
    })

    return (
        <Section>
            {isTitle && (
                <TitleWithDividers title={'اشتركاتي'} />

            )}
            <Paper variant="outlined" sx={{ p: '32px 0' }}>

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
            </Paper>
        </Section>
    )
}

export default SubscriptionsPage