import { useEffect, useState } from 'react';
import { Box, Card, Typography, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { PiStudent } from 'react-icons/pi';

const GOLD = '#F2B441';
const BORDER_SOFT = 'rgba(242,180,65,0.14)';

const DEFAULT_STATS = [
    { label: 'عدد المشاهدات', note: 'اكثر من 1.5 مليون مشاهده علي يوتيوب', target: 1.5, decimals: 1, suffix: 'M', Icon: VisibilityOutlinedIcon },
    { label: 'عدد ساعات المشاهده', note: 'اكثر من 45 الف ساعه مشاهده على يوتيوب', target: 45, decimals: 0, suffix: 'K', Icon: AccessTimeOutlinedIcon },
    { label: 'عدد الطلاب', note: 'بفضل الله طلابنا اكثر من 50 الف ومستمرين', target: 50, decimals: 0, suffix: 'K+', Icon: PiStudent },
    { label: 'عدد السنوات', note: 'خبره اكثر من 15 سنه فى تدريس الالماني لجميع السنوات و المراحل', target: 15, decimals: 0, suffix: '+', Icon: SchoolOutlinedIcon },
    // { label: 'Countries', note: 'reached so far', target: 90, decimals: 0, suffix: '+', Icon: PublicOutlinedIcon },
];

const chase = keyframes`
  0%, 100% { opacity: .28; box-shadow: none; }
  50% { opacity: 1; background: ${GOLD}; box-shadow: 0 0 7px ${GOLD}; }
`;

const StatCard = styled(Card)({
    position: 'relative',
    background: 'background.alt',
    border: `1px solid ${BORDER_SOFT}`,
    borderRadius: 16,
    padding: '22px 20px 20px',
    overflow: 'hidden',
    cursor: 'default',
    boxShadow: 'none',
    '--bulb-dur': '2.6s',
    // '--icon-color': TEXT_DIM,
    '--icon-border': BORDER_SOFT,
    '--icon-rot': '0deg',
    '--icon-scale': '1',
    transition: 'transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease, border-color .4s ease',
    '&:hover': {
        transform: 'translateY(-8px)',
        borderColor: GOLD,
        boxShadow: `0 24px 48px -18px rgba(0,0,0,.6), 0 0 0 1px ${BORDER_SOFT}`,
        '--bulb-dur': '0.9s',
        '--icon-color': GOLD,
        '--icon-border': GOLD,
        '--icon-rot': '-8deg',
        '--icon-scale': '1.08',
    },
});

const Bulb = styled('span')(({ delay }) => ({
    width: 5,
    height: 5,
    borderRadius: '50%',
    opacity: 0.28,
    display: 'inline-block',
    marginRight: 5,
    animation: `${chase} var(--bulb-dur, 2.6s) ease-in-out infinite`,
    animationDelay: `${delay}s`,
}));

const IconWrap = styled(Box)({
    width: 38,
    height: 38,
    borderRadius: '50%',
    border: '1px solid var(--icon-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--icon-color)',
    marginBottom: 16,
    transform: 'rotate(var(--icon-rot)) scale(var(--icon-scale))',
    transition: 'color .4s ease, transform .4s ease, border-color .4s ease',
});

const Counter = styled(Typography)(({ theme }) => ({
    fontSize: 42,
    color: theme.palette.secondary.main,
    fontWeight: 800,
    lineHeight: 1,
    marginBottom: 14,
    fontVariantNumeric: 'tabular-nums',
}));

// Counts up from 0 to target once, with an eased ramp and an optional start delay.
// Runs a single time per mount — no re-trigger on hover.
function useCountUp(target, { decimals = 0, duration = 1400, delay = 0 } = {}) {
    const [value, setValue] = useState(0);
    const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');

    useEffect(() => {
        if (reduced) {
            setValue(target);
            return;
        }
        let raf;
        let startTime;
        const timeout = setTimeout(() => {
            const tick = (t) => {
                if (!startTime) startTime = t;
                const progress = Math.min((t - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setValue(target * eased);
                if (progress < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
        }, delay);
        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(raf);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target, duration, delay, reduced]);

    return value.toFixed(decimals);
}

function StatCounter({ target, decimals, suffix, delay }) {
    const value = useCountUp(target, { decimals, delay });
    return <Counter>{value}{suffix}</Counter>;
}

export default function Statistics({ stats = DEFAULT_STATS }) {
    return (
        <Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2.25 }}>
                {stats.map((s, i) => (
                    <StatCard key={s.label}>
                        <Box sx={{ display: 'flex', mb: 2.25 }}>
                            {Array.from({ length: 8 }).map((_, b) => (
                                <Bulb key={b} delay={b * 0.13} />
                            ))}
                        </Box>
                        <IconWrap>
                            <s.Icon style={{ fontSize: '18px' }} />
                        </IconWrap>
                        <StatCounter target={s.target} decimals={s.decimals} suffix={s.suffix} delay={i * 160} />
                        <Typography sx={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', mb: 0.4 }}>
                            {s.label}
                        </Typography>
                        <Typography sx={{ fontSize: 12.5, opacity: 0.7 }}>
                            {s.note}
                        </Typography>
                    </StatCard>
                ))}
            </Box>
        </Box>

    );
}