import { Avatar, Box, Divider, Typography } from '@mui/material'
import { FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox'

const defaultIcon = <img src='/assets/home.svg' style={{ maxWidth: '45px' }} />
function TitleWithDividers({ title, desc = '', descVar = 'body1', color, variant = 'h5', avatar = '', icon = defaultIcon, sx = {}, children }) {

    return (
        <FlexColumn sx={{
            my: '22px', width: '100%'
        }}>
            <FlexRow gap={'12px'} sx={{
                position: 'relative',
                textAlign: 'center',
                flexWrap: 'nowrap',
                // minWidth: '150px',
                // backgroundColor: 'transparent', color: "neutral.0",
                p: '6px 12px',
                borderRadius: '6px', transition: '.3s all ease',
                bgcolor: 'orange',
                '&:before, &:after': {
                    content: "''",
                    position: 'absolute',
                    bottom: '-12px',
                    border: '5px solid',
                    borderTop: 'none',
                    width: 'calc(100% + 16px)',
                    height: '50%',
                    borderColor: 'primary.main',
                    transition: '.3s all ease',
                    left: '-8px'
                },
                '&:after': {
                    top: '-12px',
                    border: '5px solid',
                    borderColor: 'primary.main',
                    borderBottom: 'none',
                    right: '-8px'
                },
                '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'grey.0'
                },
                '&:hover::after': {
                    height: '100%',
                },
            }}>
                {avatar && (
                    <Avatar sx={{ bgcolor: 'primary.main', color: 'grey.0' }} src={avatar} />
                )}
                <Typography variant={variant} sx={{ textWrap: 'wrap', ...sx }} >
                    {title}
                </Typography>
                {icon && icon}

            </FlexRow>

            <Box sx={{ mt: '16px' }}>
                <Typography variant={descVar} color={'neutral.0'} style={{ textIndent: '6px' }}>{desc}</Typography>
            </Box>
            <Divider sx={{ border: '4px solid', borderColor: color || 'primary.main', borderRadius: '16px', opacity: '.7', width: '200px', my: '12px' }} />

        </FlexColumn>
    )

    // return (
    //     <Box sx={{ my: '16px', color: 'primary.main', ...sx }}>
    //         <Divider sx={{ border: '4px solid', borderColor: color || 'primary.main', borderRadius: '16px', opacity: '.7', width: '150px' }} />
    //         <Divider sx={{ border: '4px solid', borderColor: color || 'primary.main', borderRadius: '16px', opacity: '.7', width: '75px', my: '12px' }} />

    //         <FlexRow gap={'12px'} sx={{ flexWrap: 'nowrap' }}>
    //             {avatar && (
    //                 <Avatar sx={{ bgcolor: 'primary.main', color: 'grey.0' }} src={avatar} />
    //             )}
    //             {icon && icon}

    //             <FlexColumn sx={{ alignItems: 'flex-start' }}>
    //                 <Typography variant={variant} color={'neutral.0'}>{title}</Typography>
    //                 {children}
    //                 <Typography variant={descVar} color={'neutral.0'} mt={'6px'} style={{ textIndent: '6px' }}>{desc}</Typography>
    //             </FlexColumn>
    //         </FlexRow>

    //         <Divider sx={{ border: '4px solid', borderColor: color || 'primary.main', borderRadius: '16px', opacity: '.7', width: '200px', my: '12px' }} />
    //     </Box>
    // )
}

export default TitleWithDividers
