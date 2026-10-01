
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { FlexColumn, FlexRow } from '../../style/mui/styled/Flexbox';

const defaultIcon = (
    <Box
        component="img"
        src="/assets/home.svg"
        sx={{
            width: 42,
            height: 42,
            objectFit: 'contain',
        }}
    />
);

function TitleWithDividers({
    title,
    desc = '',
    descVar = 'body1',
    color,
    variant = 'h4',
    avatar = '',
    icon = defaultIcon,
    sx = {},
    children,
    bgcolor,
}) {
    const accent = color || 'secondary.main';
    const theme = useTheme()
    return (
        <FlexColumn
            sx={{
                width: '100%',
                my: '28px',
                alignItems: 'stretch',
            }}
        >
            {/* Main heading */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    px: { xs: 1.5, sm: 2 },
                    py: 1.5,
                    borderRadius: '14px',

                    background: `linear-gradient(
            105deg,
            ${theme.palette.primary.main} 100%,
            ${theme.palette.primary.light} 65%,
            ${theme.palette.background.paper} 0%
        )`,

                    color: 'grey.0',
                    overflow: 'hidden',
                }}
            >
                <FlexRow
                    gap="12px"
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        width: '100%',
                        minWidth: 0,
                        alignItems: 'center',
                    }}
                >
                    {/* Avatar */}
                    {avatar && (
                        <Avatar
                            src={avatar}
                            sx={{
                                width: 46,
                                height: 46,
                                flexShrink: 0,

                                bgcolor: accent,

                                color: 'grey.0',

                                border: '2px solid',
                                borderColor: accent,

                                boxShadow: `0 4px 14px rgba(0,0,0,.08)`,
                            }}
                        />
                    )}

                    {/* Icon */}
                    {!avatar && icon && (
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                flexShrink: 0,

                                display: 'grid',
                                placeItems: 'center',

                                borderRadius: '13px',

                                bgcolor: 'background.paper',

                                border: '1px solid',
                                borderColor: 'divider',

                                boxShadow:
                                    '0 4px 15px rgba(0,0,0,.05)',
                            }}
                        >
                            {icon}
                        </Box>
                    )}

                    {/* Title */}
                    <Box
                        sx={{
                            minWidth: 0,
                            flex: 1,
                        }}
                    >
                        <Typography
                            variant={variant}
                            sx={{
                                fontWeight: 800,
                                lineHeight: 1.35,

                                color: 'grey.0',

                                overflowWrap: 'anywhere',

                                ...sx,
                            }}
                        >
                            {title}
                        </Typography>

                        {children}
                    </Box>
                </FlexRow>
            </Box>

            {/* Description */}
            {desc && (
                <Typography
                    variant={descVar}
                    color="text.secondary"
                    sx={{
                        mt: 1.5,
                        px: { xs: 1, sm: 2 },

                        lineHeight: 1.8,

                        textIndent: '6px',

                        maxWidth: '850px',
                    }}
                >
                    {desc}
                </Typography>
            )}

            {/* Bottom decoration */}
            <FlexRow
                gap="7px"
                sx={{
                    mt: 1.5,
                    px: { xs: 1, sm: 2 },
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: 65,
                        height: 4,
                        borderRadius: 10,
                        bgcolor: accent,
                    }}
                />

                <Box
                    sx={{
                        width: 22,
                        height: 4,
                        borderRadius: 10,
                        bgcolor: accent,
                        opacity: 0.45,
                    }}
                />

                <Box
                    sx={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        bgcolor: accent,
                        opacity: 0.3,
                    }}
                />
            </FlexRow>
        </FlexColumn>
    );
}

export default TitleWithDividers;
