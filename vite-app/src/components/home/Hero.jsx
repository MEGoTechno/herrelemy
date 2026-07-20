import './home.css'
import { Box, Chip, keyframes, Typography, useTheme } from '@mui/material'

import Section from '../../style/mui/styled/Section'
import { FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox'

// import Image from '../ui/Image'
import { ScallyBtn } from '../../style/buttonsStyles'

import { Link } from 'react-router-dom'

import GermanyFlag from '../animations/flag/Flag'
import TextToggler from '../animations/textToggler/TextToggler'
import { lang } from '../../settings/constants/arlang'
import React from 'react'
import { MenuBookOutlined, PeopleAltOutlined, StarOutlineRounded } from '@mui/icons-material'
// import TextToggler from '../animations/textToggler/TextToggler'

const palette = {
  bg: "#15100d",
  panel: "#241a14",
  panelBorder: "rgba(255,255,255,0.08)",
  text: "#f6efe4",
  muted: "#ab9c8e",
  live: "#ff6a3d",
  gold: "#f5b942",
  tickerBg: "#0c0806",
};
const TICKER_ITEMS = [
  { Icon: PeopleAltOutlined, text: "1,500,000 مليون ونص مشاهده علي يوتيوب", color: 'primary' },
  { Icon: MenuBookOutlined, text: "اكثر من 50 الف ساعه مشاهده", color: 'secondary' },
  { Icon: StarOutlineRounded, text: "اكثر من 15 الف طالب مع الهير عليمي", color: 'success' },
  //   { Icon: SensorsRounded, text: "Live Q&A tonight at 8:00 PM" },
  //   { Icon: AutoAwesomeOutlined, text: "3 new tutors joined this week" },
];

const contentItems = ['بنعيشك الألماني', 'بيتك و مطرحك', 'طريقك لتقفيل الألماني']

const tickerScroll = keyframes`
  to { transform: translateX(-50%); }
  from { transform: translateX(0); }
`;

function Hero() {
  const theme = useTheme()
  const isDark = theme.palette.mode === "dark";

  return (
    <Section sx={{ position: " relative", minHeight: '86vh', display: 'flex', justifyContent: 'center', paddingBottom: '0 !important' }}>


      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0, right: -300,
          width: 620,
          height: 620,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${isDark ? "#432f074d" : palette.gold + "33"} 0%, transparent 70%)`,
          filter: "blur(90px)",
          mixBlendMode: isDark ? "screen" : "multiply",
          pointerEvents: "none",
          // animation: `${floatB} 20s ease-in-out infinite alternate`,
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0, left: -300,
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${isDark ? "#432f074d" : palette.gold + "33"} 0%, transparent 70%)`,
          filter: "blur(90px)",
          mixBlendMode: isDark ? "screen" : "multiply",
          pointerEvents: "none",
          // animation: `${floatB} 20s ease-in-out infinite alternate`,
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      />
      <FlexRow justifyContent={'space-around'} width={'100%'} >
        {/* content */}
        <FlexColumn
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

            <Typography variant='subBanner' sx={{
              position: 'relative', zIndex: 1, fontFamily: 'bla !important',
            }}>فى اللغه <span style={{ color: 'orange' }}>الألمانية</span></Typography>
            <TextToggler words={contentItems} />
          </FlexColumn>
          <Box>
            <ScallyBtn
              endIcon={<img style={{ width: '30px' }} alt='fernsehturm-berlin' src='./assets/beriln.svg' />}
              component={Link} to={'/grades'}
              sx={{
                position: 'relative', maxWidth: '300px', width: '100%', minWidth: 'auto', my: '22px',
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

              }}>السنوات الدراسيه</ScallyBtn>
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
        <FlexColumn my={'16px'}>
          <Box
            component="img"
            src={'/assets/hero.png'}
            alt="logo"
            sx={{
              width: "100%",
              maxWidth: {
                sm: 450,   // tablets
                lg: 620,   // small laptops
              },
              display: "block",
              margin: "0 auto", // center image
            }}
          />

          {/* News */}
          <Box sx={{ width: "100%", maxWidth: 320, overflow: "hidden", mt: '-22px' }}>
            <Box
              role="list"
              aria-label="Live platform updates"
              sx={{
                // border: `1px solid ${palette.panelBorder}`,
                borderRadius: "10px",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                "&:hover .ticker-track": { animationPlayState: "paused" },
              }}
            >
              {/* Animation */}
              <Box
                className="ticker-track"
                sx={{
                  display: "flex",
                  gap: 1.25,
                  width: "max-content",
                  animation: `${tickerScroll} 15s linear infinite`,
                  "@media (prefers-reduced-motion: reduce)": { animation: "none" },
                }}
              >
                {[...TICKER_ITEMS, ...TICKER_ITEMS].map(({ Icon, text, color }, i) => (
                  <Chip
                    variant='filled'
                    key={i}
                    role="listitem"
                    aria-hidden={i >= TICKER_ITEMS.length || undefined}
                    icon={<Icon />}
                    label={text}
                    color={color}
                    onClick={() => { }}
                    sx={{
                      // bgcolor: palette.panel,
                      border: `1px solid rgba(255,255,255,0.08)`,
                      flexShrink: 0,
                      "& .MuiChip-label": { px: 1 },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>


        </FlexColumn>
      </FlexRow>
    </Section >
  )
}

export default Hero
