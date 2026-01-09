import { IconButton, Typography } from '@mui/material'

import Section from '../../style/mui/styled/Section'
import Image from '../ui/Image'
import Separator from '../ui/Separator'
import { FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox'
import { lang } from '../../settings/constants/arlang'
import { Link } from 'react-router-dom'

function FooterPage() {

    return (
        <Section sx={{ bgcolor: "rgb(18, 20, 27)" }}>
            <FlexRow gap={'12px'} justifyContent={'space-between'} flexWrap={'wrap'}>

                <FlexColumn gap={'16px'} sx={{ width: { xs: '100%', md: 'auto' } }}>
                    <Image img={lang.LogoUri} maxWidth='160px' ratio={'auto'} />
                    <Typography variant='h5' sx={{ color: 'grey.0', }}>
                        {lang.LOGO}
                    </Typography>
                    <Typography noWrap component={Link} to={'/privacy'} sx={{ cursor: 'pointer', color: 'grey.200', textDecoration: 'underline' }}>سياسات المنصه !</Typography>
                </FlexColumn>


                <FlexColumn sx={{ alignItems: 'flex-start', flex: .4 }}>
                    <Typography variant='subtitle1' sx={{ textTransform: 'none', color: 'grey.0', textWrap: 'nowrap' }}>وسائل التواصل</Typography>
                    {lang.Socials.map((social, i) => {
                        if (social.to)
                            return <FlexRow component={Link} to={social.to} key={i} sx={{ textDecoration: 'none', flexWrap: 'nowrap' }}>
                                <IconButton key={i}>
                                    <Image borderRadius='0' img={social.image} maxWidth='25px' ratio={'auto'} />
                                </IconButton>
                                <Typography variant='overline' sx={{ textTransform: 'none', color: 'grey.0', textWrap: 'nowrap' }}>{social.title}</Typography>
                            </FlexRow>
                    })}
                </FlexColumn>

                <FlexColumn sx={{ alignItems: 'flex-start', flex: .4 }}>
                    <Typography variant='subtitle1' sx={{ textTransform: 'none', color: 'grey.0', textWrap: 'nowrap' }}>التواصل واتساب فقط</Typography>
                    <FlexRow component={Link} to={"https://api.whatsapp.com/send?phone=" + lang.Contact_Whatsapp} sx={{ textDecoration: 'none' }}>
                        <IconButton>
                            <Image borderRadius='0' img={'/assets/whatsapp.svg'} maxWidth='25px' ratio={'auto'} />
                        </IconButton>
                        <Typography variant='overline' sx={{ textTransform: 'none', color: 'grey.0', textWrap: 'nowrap' }}>{lang.Contact_Whatsapp.replace('20', '')}</Typography>
                    </FlexRow>
                </FlexColumn>

            </FlexRow>
            <FlexColumn>

                {/* <Typography variant='body2' sx={{ color: "grey.0", textAlign: 'center' }}>
                    السنه دى مختلفه, السنه دى بنقفل الجيم
                </Typography> */}
                <Separator sx={{ borderColor: 'grey.100', borderWidth: '1px', width: '40vw' }} />


                <FlexRow sx={{ gap: '8px' }}>
                    <Typography sx={{ color: "primary.600" }}>
                        &lt;/ ME&gt;
                    </Typography>
                    <Typography sx={{ color: "grey.0" }}>
                        All Rights Reserved {new Date().getFullYear()}
                    </Typography>
                    <Typography sx={{ color: "primary.600" }}>
                        &lt;ME&gt;
                    </Typography>
                </FlexRow>
                <FlexRow gap={'12px'} justifyContent={'center'}>
                    <Typography component={Link} to={lang.WhatsAppContact} variant='body2' sx={{ color: "grey.0", textDecoration: 'none' }} noWrap>
                        تم التطوير بواسطه <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Menassty for Education Services </span>
                    </Typography>
                    {/* <img src='/assets/megroup-footer.webp' style={{ borderRadius: 0, my: '12px', maxWidth: '120px' }} /> */}
                    <Image borderRadius={0} sx={{ my: '12px' }} img={'/assets/Menassty-nobg.png'} maxWidth="45px" ratio={'auto'} />
                </FlexRow>
            </FlexColumn>

        </Section>
    )
}

export default FooterPage
