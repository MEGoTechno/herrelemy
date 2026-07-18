import { Box, Typography } from "@mui/material"
import Section from "../../style/mui/styled/Section"
import Statistics from "./Statistics"
import { FlexColumn } from "../../style/mui/styled/Flexbox"

function ChooseUs() {
    return (
        <Section>
            <Box sx={{
                background: `linear-gradient(rgba(241, 199, 49, 0.5), 
                    rgba(241, 199, 49, 0.5)),
    url('./assets/hero-pattern.png') no-repeat center/cover`,
                // backgroundImage: "url('./assets/hero-pattern.webp')",
                // backgroundSize: "cover",    // cover entire container
                // backgroundRepeat: "no-repeat",
                overflow: 'clip',
                borderRadius: '16px',
                width: '100%', p: '26px 16px', display: 'flex', gap: '16px', flexDirection: 'column'
            }}>
                <FlexColumn>
                    <Typography variant="h4" fontWeight={800} textAlign={'center'}>ليه الاف الطلاب اختاروا هير <Box component={'span'} sx={{ color: 'secondary.main' }}>محمود عليمي؟</Box></Typography>
                    <Typography variant={'subtitle'} fontWeight={'700'}>رحله السيطره علي الالماني بتبدا من هنا, مش مجرد منصه ده نظام ليك مخصوص</Typography>
                </FlexColumn>
                <Statistics />
            </Box>
        </Section>
    )
}

export default ChooseUs