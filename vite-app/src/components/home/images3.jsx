import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

// ---- animation keyframes ----
const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const RADIUS = { xs: "14px", sm: "18px", md: "22px" };

// side images: portrait ratio (taller than wide), responsive per breakpoint.
// On small screens we cap height by viewport WIDTH (via min()), not just
// viewport height, because phone height is unreliable (browser chrome,
// notches) while width is what actually determines whether 3 cards fit.
const SIDE_HEIGHT = {
  xs: "min(28vh, 50vw)",
  sm: "min(38vh, 30vw)",
  md: "52vh",
};
const SIDE_RATIO = "2 / 4"; // width / height

// middle image: extends up from the top, its bottom sits at
// roughly the vertical midpoint of the side images
const MID_HEIGHT = {
  xs: "min(44vh, 60vw)",
  sm: "min(58vh, 46vw)",
  md: "82vh",
};
const MID_RATIO = "2 / 4";

// lift = fraction of the mid card's own height it rises above the shared
// baseline. Built with calc() so it always tracks MID_HEIGHT exactly,
// including the min(vh, vw) clamping used on small screens.
const MID_LIFT = {
  xs: `calc(${MID_HEIGHT.xs} / 3)`,
  sm: `calc(${MID_HEIGHT.sm} / 3)`,
  md: `calc(${MID_HEIGHT.md} / 3)`,
};

const cards = [
  { src: "/assets/current.jpg", alt: "Foundation", variant: "default" },
  { src: "/assets/polygon2.jpg", alt: "Mastery", variant: "mid" },
  { src: "/assets/polygon1.jpg", alt: "Momentum", variant: "default" },
];

function PolygonCard({ src, alt, variant, index }) {
  const isMid = variant === "mid";

  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        height: isMid ? MID_HEIGHT : SIDE_HEIGHT,
        aspectRatio: isMid ? MID_RATIO : SIDE_RATIO,
        borderRadius: RADIUS,
        overflow: "hidden",
        opacity: 0,
        animation: `${rise} 0.7s cubic-bezier(.2,.8,.2,1) forwards`,
        animationDelay: `${0.05 + index * 0.15}s`,
        filter: isMid
          ? "drop-shadow(0 22px 30px rgba(0,0,0,0.55))"
          : "drop-shadow(0 14px 20px rgba(0,0,0,0.4))",
        marginBottom: isMid ? MID_LIFT : 0,
        transition:
          "transform 0.35s cubic-bezier(.2,.8,.2,1), filter 0.35s ease",
        "&:hover": {
          transform: "translateY(-10px) scale(1.03)",
          filter: {
            xs: isMid
              ? "drop-shadow(0 22px 30px rgba(0,0,0,0.55))"
              : "drop-shadow(0 14px 20px rgba(0,0,0,0.4))",
            md: "drop-shadow(0 24px 32px rgba(0,0,0,0.5))",
          },
        },
        "&:hover img": { transform: 'scale(1.1)' },
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s cubic-bezier(.2,.8,.2,1)",
        }}
      />
    </Box>
  );
}

export default function ThreeCardRow() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // No horizontal scrolling needed anymore: card sizes are capped by
        // viewport width on small screens, so the row always fits.
        // overflow: "hidden",
        px: { xs: 1.5, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "flex-end", // first and third share the same bottom baseline
          justifyContent: "center",
          width: "100%",
          gap: { xs: "8px", sm: "16px", md: "28px" },
          mx: "auto",
        }}
      >
        {cards.map((card, i) => (
          <PolygonCard key={card.alt} index={i} {...card} />
        ))}
      </Box>
    </Box>
  );
}