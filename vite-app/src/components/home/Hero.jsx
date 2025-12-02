import './home.css'
import { Box, Typography, useTheme } from '@mui/material'

import Section from '../../style/mui/styled/Section'
import { FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox'

// import Image from '../ui/Image'
import { ScallyBtn } from '../../style/buttonsStyles'

import { Link } from 'react-router-dom'

import GermanyFlag from '../animations/flag/Flag'
import TextToggler from '../animations/textToggler/TextToggler'
import { lang } from '../../settings/constants/arlang'
import React from 'react'
// import TextToggler from '../animations/textToggler/TextToggler'

function Hero() {
    const theme = useTheme()

    return (
        <Section sx={{ position: " relative" }}>

            <FlexRow justifyContent={'space-around'} >
                {/* content */}
                <FlexColumn
                    flex={1}
                    minHeight={"80vh"}
                    maxWidth={"500px"}
                    gap={'.7rem'}
                    sx={{
                        animation: 'getIntoRt 1s ease',
                        flex: 1,
                        alignItems: 'center', justifyContent: 'space-evenly'
                    }} >
                    <FlexColumn sx={{
                        position: 'relative', gap: '16px', alignItems: 'flex-start'
                    }}>
                        <img
                            src='./assets/germ-flagl.webp' style={{
                                position: 'absolute', top: '-16px', left: '40%', zIndex: 0, objectFit: 'contain', height: '150px',
                                filter: 'grayscale(20%)', opacity: .4, transform: 'rotate(45deg)'
                            }} />

                        <Typography
                            variant='banner' component={'h1'}
                            sx={{ fontFamily: 'bla !important', fontSize: '6rem', lineHeight: '60px', textAlign: 'left', zIndex: 1, position: 'relative', textWrap: 'nowrap' }}>
                            <span style={{ fontSize: '2rem' }}>الهيرر/</span> <br />

                            محمود <span style={{ color: theme.palette.primary.main, }}>عليمى <Box sx={{ width: '100%', maxWidth: '110px', position: 'absolute', zIndex: -5, bottom: '5px', right: '-75px' }}>
                                <GermanyFlag />
                            </Box></span>
                        </Typography>
                        {/* <Box sx={{ position: 'relative' }}>

                        </Box> */}
                        <Typography variant='subBanner' sx={{
                            position: 'relative', zIndex: 1,
                        }}>فى اللغه <span style={{ color: 'orange' }}>الالمانيه</span></Typography>
                        <TextToggler words={['بنعيشك الالماني', 'بيتك و مطرحك', 'دوله الالماني']} />
                    </FlexColumn>
                    <Box>
                        <ScallyBtn
                            endIcon={<img style={{ width: '30px' }} alt='fernsehturm-berlin' src='./assets/beriln.svg' />}
                            component={Link} to={'/grades/3'}
                            sx={{
                                position: 'relative', maxWidth: '300px', width: '100%', minWidth: 'auto',
                                // backgroundColor: 'transparent', color: "neutral.0",
                                borderRadius: 0,
                                fontSize: '1.6rem',
                                '&:before, &:after': {
                                    content: "''",
                                    position: 'absolute',
                                    bottom: '-8px',
                                    border: '3px solid',
                                    borderTop: 'none',
                                    width: 'calc(100% + 16px)',
                                    height: '50%',
                                    borderColor: 'primary.main',
                                    transition: '.3s all ease'
                                },
                                '&:after': {
                                    top: '-8px',
                                    border: '3px solid',
                                    borderColor: 'primary.main',
                                    borderBottom: 'none',
                                },
                                '&:hover': {
                                    backgroundColor: "orange"
                                },
                                '&:hover::after': {
                                    top: 0,
                                    borderColor: 'transparent', width: '100%'
                                    // height: 'calc(100% + 16px)',
                                    // backgroundColor: "ButtonShadow"
                                },
                                '&:hover::before': {
                                    bottom: 0,
                                    borderColor: 'orange', width: '100%'
                                }

                            }}> السنوات الدراسيه</ScallyBtn>
                        <Box display={'flex'} justifyContent={'space-around'} flexDirection={'row'} sx={{ minWidth: '250px', color: 'neutral.0' }}>
                            {lang.Socials.map((social, i) => {
                                if (social.icon) return <React.Fragment key={i}>
                                    {social.icon}
                                </React.Fragment>
                            })}
                        </Box>
                    </Box>

                </FlexColumn>

                {/* banner */}
                <FlexColumn>
                    <img style={{ maxWidth: '600px', }} alt='logo' src="/assets/hero.webp" />
                </FlexColumn>
            </FlexRow>
        </Section >
    )
}

export default Hero
