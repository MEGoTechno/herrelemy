import { Box, Typography, useTheme } from '@mui/material'

import Image from '../ui/Image'
import { FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox'
import CardInfo from '../../style/mui/components/CardInfo'

import VideoYoutube from '../content/VideoYoutube'
import Section from '../../style/mui/styled/Section'
import Separator from '../ui/Separator'
import GermanyFlag from '../animations/flag/Flag'

// function LogosYoutubeIcon({ size, ...props }) {
//     return (<svg xmlns="http://www.w3.org/2000/svg" width={size || "1.43em"} height={size || '1rem'} viewBox="0 0 256 180" {...props}><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"></path><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"></path></svg>);
// }

function AboutUS() {

    const theme = useTheme()
    // background: 'linear-gradient(to left, #fdc830, #f37335)',
    const cards = [
        { icon: <img style={{ maxWidth: '45px' }} src='./assets/writing.svg' />, caption: 'هنرتبلك المنهج' },
        { icon: <img style={{ maxWidth: '45px' }} src='./assets/creativity.svg' />, caption: 'افكار الامتحانات' },
        { icon: <img style={{ maxWidth: '45px' }} src='./assets/education-graduation-learning-school-study.svg' />, caption: 'هتقفل الماده' },
    ]

    return (
        <Section sx={{ pb: '0 !important' }}>
            <FlexRow sx={{ alignItems: 'stretch', height: '100%' }}>
                <FlexColumn sx={{ flex: 1, position: 'relative' }}>
                    <Typography variant='h5'> الهيرر/ عليمي </Typography>
                    <FlexRow gap={'16px'}>
                        {cards.map((card, i) => {
                            return <CardInfo key={i} icon={card.icon} caption={card.caption} desc={card.desc} />
                        })}
                    </FlexRow>
                    <img style={{ maxWidth: '650px', display: 'block', zIndex: 1 }} src='./assets/elemy-circle.webp' />
                </FlexColumn>

                <FlexColumn sx={{
                    flex: 1,
                    bgcolor: 'primary.dark', borderRadius: '22px', pt: '32px', justifyContent: 'space-between',
                    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                    px: '16px'
                }}>

                    <Typography variant='subtitle1' sx={{ color: 'grey.0', mb: '32px' }}>
                        هنا مش بنتعلم ألماني… هنا بنعيشها! <br />
                        في دويتش أبو غالية هتفهم القواعد من غير تعقيد، وتتكلم بطلاقة   <br />
                    </Typography>

                    <FlexColumn>
                        <Typography variant='h5' sx={{ color: 'grey.0' }}>مع دويتش ابو غاليه هتضمن مركزك</Typography>
                        <img style={{ maxWidth: '250px', objectFit: 'contain' }} src='./assets/education-first-pedestal.svg' />
                    </FlexColumn>
                </FlexColumn>
            </FlexRow>
        </Section >
    )
}

export default AboutUS
