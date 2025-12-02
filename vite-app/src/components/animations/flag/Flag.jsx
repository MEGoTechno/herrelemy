import { useEffect } from "react";
import { gsap } from "gsap";
import "./GermanyFlag.css";

export default function GermanyFlag() {
  useEffect(() => {
    const svg = document.getElementById("svg");
    const flagTop = document.getElementById("flagTop");
    const flagMid = document.getElementById("flagMid");
    const flagBot = document.getElementById("flagBot");
    const flagGroup = document.getElementById("flagGroup");
    const pole = document.getElementById("pole");
    const zoom = document.getElementById("zoom");

    // Show SVG
    gsap.set(svg, { visibility: "visible" });

    // Initial flag position
    gsap.set(flagGroup, {
      transformOrigin: "40% 100%",
      rotation: 5,
      y: 60,
    });

    const tl = gsap.timeline({ repeat: -1 });

    // stripe animations
    tl.to(flagTop, { x: -600, duration: 6, repeat: -1, ease: "none" }, 0);
    tl.to(flagMid, { x: -600, duration: 6, repeat: -1, ease: "none" }, 0);
    tl.to(flagBot, { x: -600, duration: 6, repeat: -1, ease: "none" }, 0);

    // waving motion
    tl.to(
      flagGroup,
      { rotation: 15, y: 75, x: 10, duration: 6, ease: "sine.inOut", repeat: -1, yoyo: true },
      0
    );

    // pole bouncing
    gsap.to(pole, {
      y: -35,
      duration: 5,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });

    // zoom animation
    gsap.to(zoom, {
      attr: { viewBox: "-30 -50 740 460" },
      duration: 6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="container">
      <svg
        id="svg"
        viewBox="0 0 640 360"
        preserveAspectRatio="xMidYMin slice"
      >
        <path id="bg" d="M0 0h640v360H0z" />

        <svg id="zoom" viewBox="0 0 640 360">
          <g id="flagGroup">
            <svg id="flag" width="400" height="300" x="50" y="-10">
              <path
                id="flagTop"
                d="M0 90c150 0 150 46 300 46s150-46 300-46 150 46 300 46 150-46 300-46"
              />
              <path
                id="flagMid"
                d="M0 150c150 0 150 46 300 46s150-46 300-46 150 46 300 46 150-46 300-46"
              />
              <path
                id="flagBot"
                d="M0 210c150 0 150 46 300 46s150-46 300-46 150 46 300 46 150-46 300-46"
              />
            </svg>

            <g id="pole">
              <path className="flagPole" d="M445 70h13v500h-13z" />
              <circle className="flagPole" cx="452" cy="65" r="13" />
              <path id="flagTopPole" d="M444 82h15v63h-15z" />
              <path id="flagMidPole" d="M444 143h15v63h-15z" />
              <path id="flagBotPole" d="M444 203h15v63h-15z" />
            </g>
          </g>
        </svg>
      </svg>
    </div>
  );
}
