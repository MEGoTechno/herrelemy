import './home.css'
import Section from '../../style/mui/styled/Section'
import Grid from '../../style/vanilla/Grid'
import { Box, Typography } from '@mui/material'
import { FlexColumn } from '../../style/mui/styled/Flexbox'

import TitleWithDividers from '../ui/TitleWithDividers'


function Services() {
    const sers = [

        {
            // img: './assets/report.svg',
            img: './assets/vids.webp',
            // img: './assets/online-class.svg',
            title: 'شرح يخليك تقول ✨', subTitle: 'هو الالماني كان سهل كدا !'
        },
        {
            img: './assets/learning.webp',
            title: 'تدريب يخليك تقول 🎯',
            subTitle: 'انا جاهز لاي سؤال!'
        },
        {
            img: './assets/follow-up.webp',
            title: 'متابعه تعرفك 📌',
            subTitle: "انك مش لواحدك !"
        },        {
            img: './assets/trophy1.webp',
            title: 'والنتيجه اي! ❤',
            subTitle: "نتيجه تفرحك وتفرح اهلك "
        },
    ]

    return (
        <Section>
            <FlexColumn gap={'16px'}>
                <TitleWithDividers title='اي مميزات منصتنا ولي تشترك معانا؟؟' desc={<Typography component={'span'} variant='subtitle1'>(علشان) إحنا مش بنشرح ألماني: إحنا بنغير النتيجة!</Typography>}
                    sx={{ fontSize: { xs: '1.9rem', md: '2.5rem' }, color: 'grey.0' }}
                    bgcolor='primary.light'
                    icon={<img style={{ width: '60px' }} alt='fernsehturm-berlin' src='./assets/beriln.svg' />} />

                <Box sx={{
                    background: `linear-gradient(rgba(241, 199, 49, 0.5), 
                    rgba(241, 199, 49, 0.5)),
    url('./assets/hero-pattern.png') no-repeat center/cover`,
                    // backgroundImage: "url('./assets/hero-pattern.webp')",
                    // backgroundSize: "cover",    // cover entire container
                    // backgroundRepeat: "no-repeat",
                    overflow: 'clip',
                    borderRadius: '16px',
                    width: '100%', p: '26px 16px'
                }}>
                    <Grid maxCols={2}>
                        {sers.map(service => {
                            return <FlexColumn key={service.img} gap={'16px'} sx={{ p: '12px 16px', bgcolor: 'background.alt', borderRadius: '16px', textAlign: "center", width: "100%" }}>
                                <img style={{ maxWidth: '210px' }}
                                    src={service.img} />
                                <Typography variant='h5' fontWeight={800} sx={{
                                    color: 'secondary.main'
                                }}>{service.title} </Typography>
                                <Typography variant='body1' fontSize={'.99rem'} fontWeight={800} >{service.subTitle}</Typography>
                            </FlexColumn>
                        })}
                    </Grid>
                </Box>
            </FlexColumn>

        </Section >
    )
}

export default Services
