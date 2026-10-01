import { SchoolRounded } from '@mui/icons-material';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react'
import UserHeader from '../ui/UserHeader';
import { HashLink } from 'react-router-hash-link';
import { FlexColumn } from '../../style/mui/styled/Flexbox';
import InfoText from '../ui/InfoText';
import useGrades from '../../hooks/useGrades';

function ProfileHero({ user }) {

    const { grades } = useGrades()

    return (
        <Box
            component="section"
            sx={{
                bgcolor: 'background.main',
                mx: "auto", mb: 4.75, minHeight: 210, color: "#fff", width: '100%',
                px: { xs: 2.25, sm: 5.25 }, py: { xs: 3, sm: 4.4 },
                borderRadius: { xs: "20px", sm: "28px" },
                display: "flex", alignItems: { xs: "flex-start", md: "center" },
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between", gap: 3.75, position: "relative", overflow: "hidden",
                background:
                    "radial-gradient(circle at 15% 20%, rgba(255,255,255,.16), transparent 28%)," +
                    "radial-gradient(circle at 90% 85%, rgba(255,80,50,.14), transparent 30%)," +
                    "linear-gradient(105deg, #f28a28 0%, #e85d1b 28%, #c92d18 62%, #a71919 100%)",

                boxShadow:
                    "0 18px 45px rgba(200, 60, 20, .22)",
                "&::before": { content: '""', position: "absolute", width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,.08)", left: -90, bottom: -140 },
                "&::after": { content: '""', position: "absolute", width: 160, height: 160, borderRadius: "50%", border: "25px solid rgba(255,255,255,.06)", right: "30%", top: -90 },
            }}
        >
            <Stack direction="row" alignItems="center" spacing={2.75}
                sx={{ position: "relative", zIndex: 1, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

                <FlexColumn >
                    <Avatar alt={user.name.toUpperCase()} src={user?.avatar?.url || "#"}
                        variant='square'
                        sx={{
                            m: '6px',
                            // height: '250px',
                            // width: '250px',
                            maxWidth: "450px",
                            bgcolor: 'primary.400',
                            fontWeight: 800,
                            fontSize: '50px',
                            color: 'grey.0',
                            borderRadius: '16px',
                            width: { xs: 100, sm: '200px' }, height: { xs: 100, sm: '200px' }, border: "2px solid rgba(255,255,255,.85)", boxShadow: "0 8px 25px rgba(0,0,0,.15)"
                        }}
                    />
                    {(!user?.avatar?.url) && (
                        <HashLink to={'/user/profile#edit'} smooth style={{ textDecoration: 'none' }}>
                            <Typography color={'neutral.0'} sx={{ cursor: 'pointer' }}>هل تريد ايضافه صوره شخصيه ؟</Typography>
                        </HashLink>
                    )}
                    <FlexColumn justifyContent={'flex-start'}>
                        <InfoText label={'الاسم'} description={user?.name} />
                        <InfoText label={'اسم المستخدم'} description={user?.userName} />
                    </FlexColumn>
                </FlexColumn>

                <Box>
                    <Typography variant="body2" sx={{ opacity: 0.85, mb: 0.5 }}>أهلاً بك من جديد 👋</Typography>
                    <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
                        {user.name}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={0.9} sx={{ opacity: 0.95 }}>
                        <SchoolRounded fontSize="small" />
                        <Typography fontSize={15}>{grades?.find(g => g.index === user.grade)?.name}</Typography>
                    </Stack>
                </Box>
            </Stack>
            <UserHeader user={user} flexDirection={'row'} variant={'circle'} avatar={false} />

            {/* <Stack
                direction="row" alignItems="center" spacing={{ xs: 1, sm: 3.5 }}
                sx={{ position: "relative", zIndex: 1, width: { xs: "100%", md: "auto" }, justifyContent: { xs: "space-around", md: "flex-start" } }}
            >
                {stats.map(([value, label], i) => (
                    <React.Fragment key={label}>
                        {i > 0 && <Box sx={{ height: 45, width: "1px", bgcolor: "rgba(255,255,255,.25)" }} />}
                        <Box textAlign="center" minWidth={75}>
                            <Typography fontWeight={800} lineHeight={1.2} sx={{ fontSize: { xs: 21, sm: 27 } }}>{value}</Typography>
                            <Typography sx={{ opacity: 0.8, mt: 0.5, fontSize: { xs: 11, sm: 13 } }}>{label}</Typography>
                        </Box>
                    </React.Fragment>
                ))}
            </Stack> */}
        </Box>
    );
}

export default ProfileHero