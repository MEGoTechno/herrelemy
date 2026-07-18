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
            img: './assets/online-class.svg',
            title: 'شرح يخليك تقول', subTitle: 'هو الالماني كان سهل كدا !'
        },
        {
            img: './assets/exercise.svg',
            title: 'تدريب يخليك تقول',
            subTitle: 'انا جاهز لاي سؤال!'
        },
        {
            img: './assets/followup.svg',
            title: 'متابعه تعرفك',
            subTitle: "انك مش لواحدك !"
        }
    ]

    return (
        <Section>
            <FlexColumn gap={'16px'}>
                <TitleWithDividers title='اي اللي يخليك تكمل معانا ؟؟' desc={'الطريق للألماني يبدا مع دويتش أبو غالية'}
                    sx={{ fontSize: '1.9rem' }}
                    icon={<img style={{ maxWidth: '80px' }} src='./assets/space.svg' />} />

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
                    <Grid>
                        {sers.map(service => {
                            return <FlexColumn key={service.img} gap={'16px'} sx={{ p: '12px 16px', bgcolor: 'background.alt', borderRadius: '16px', maxWidth: '450px', textAlign: "center", width: "100%" }}>
                                <img style={{ maxWidth: '180px' }}
                                    src={service.img} />
                                <Typography variant='h5' fontWeight={800} sx={{
                                    color: 'primary.main'
                                }}>{service.title} </Typography>
                                <Typography variant='subtitle' >{service.subTitle}</Typography>
                            </FlexColumn>
                        })}
                    </Grid>
                </Box>
            </FlexColumn>

        </Section >
    )
}

export default Services
