import React from 'react'
import './home.css'
import Section from '../../style/mui/styled/Section'
import Grid from '../../style/vanilla/Grid'
import { Box, Typography } from '@mui/material'
import Battery from '../animations/battery/Battery'
import { FlexBetween, FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox'
import Image from '../ui/Image'
import TitleWithDividers from '../ui/TitleWithDividers'


function Services() {
    const sers = [

        {
            img: './assets/report.svg',
            title: 'متابعة دورية', subTitle: 'هنتابع كل مشاكلك ونجاوب على كل اسئلتك ونتابع مستواك عشان نضمن ليك التفوق'
        },
        {
            img: './assets/honor.svg',
            title: 'مستواك',
            subTitle: 'هندربك بشكل يخليك مرتاح فى مادة اللغة الألمانية بإمتحانات وتدريبات الكترونية بتصحيح تلقائي.'
        },
        {
            img: './assets/online-class.svg',
            title: 'فيديوهات مسجله',
            subTitle: "شرح بسيط ومتميز على اعلى مستوى مع أمثلة عشان تفهم كل حاجة"
        }
    ]

    return (
        <Section>
            <FlexColumn gap={'16px'}>
                <TitleWithDividers title={'الطريق للألماني يبدا مع دويتش أبو غالية'}
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
                    <Grid min='200px'>
                        {sers.map(service => {
                            return <FlexColumn key={service.img} gap={'16px'} sx={{ p: '12px 16px', bgcolor: 'background.alt', borderRadius: '16px', maxWidth: '450px', textAlign: "center" }}>
                                <img style={{ maxWidth: '180px' }}
                                    src={service.img} />
                                <Typography variant='h5' sx={{
                                    color: 'primary.main', fontSize: '32px'
                                }}>{service.title} </Typography>
                                <Typography variant='subtitle1' >{service.subTitle}</Typography>
                            </FlexColumn>
                        })}
                    </Grid>
                </Box>
            </FlexColumn>

        </Section >
    )
}

export default Services
