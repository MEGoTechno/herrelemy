import { Box, Paper, Typography } from "@mui/material"
import { FlexColumn } from "../../style/mui/styled/Flexbox"
import Section from "../../style/mui/styled/Section"
import { FilledHoverBtn } from "../../style/buttonsStyles"
import { Link } from "react-router-dom"

function RevisionPoster() {
    return (
        <Section sx={{py: 0}}>
            <Paper elevation={6} sx={{
                display: 'flex', flexWrap: 'wrap',
                flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2,
                p: '22px 16px', bgcolor: 'background.alt', maxWidth: 'fit-content', m: '0 auto', borderRadius: '16px 16px 50%'
            }}>
                <Box sx={{ borderRadius: '22px', overflow: 'hidden', border: '5px solid', borderColor: 'secondary.light' }}>
                    <img style={{ maxWidth: '250px', verticalAlign: 'bottom' }} src="/assets/revision-poster.webp" />
                </Box>

                <FlexColumn sx={{ gap: 2 }}>
                    <Typography variant="subtitle1" fontWeight={800} fontSize={'1.8rem'}>إبدأ رحلة تقفيل الالماني مع الهيرر عليمي فى المراجعه النهائيه دلوقتي ✨ </Typography>
                    <FlexColumn sx={{ alignItems: 'flex-start' }}>
                        <Typography>الهير هيلخصلك الالماني فى محاضرات واسئله هتخليك تضمن الالماني باذن الله</Typography>
                        <Typography sx={{ opacity: .7 }}>شوف اول محاضره يلا</Typography>
                    </FlexColumn>
                    <FilledHoverBtn endIcon={'✨'} component={Link} to='/courses' size="large" sx={{ borderRadius: '6px', }}> كورسات الالماني </FilledHoverBtn>
                </FlexColumn>
            </Paper>
        </Section>
    )
}

export default RevisionPoster
