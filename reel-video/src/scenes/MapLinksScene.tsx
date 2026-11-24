import React from "react";
import { AbsoluteFill, Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { ACCENT, CREDIT, FONT, SAFE, W } from "../theme";

const LINKS = [
  { name: "Naver Map", color: "#03C75A" },
  { name: "Kakao Map", color: "#FEE500", ink: "#191919" },
  { name: "Google Maps", color: "#4285F4" },
];

export const MapLinksScene: React.FC<{ card: string; line: string }> = ({ card, line }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ fontFamily: FONT, backgroundColor: "black" }}>
      <Img src={staticFile("bukchon.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(18px) brightness(0.45)", transform: "scale(1.1)" }} />
      <div style={{ position: "absolute", top: SAFE.top + 60, left: SAFE.left, width: W - SAFE.left - SAFE.right }}>
        <div style={{ fontSize: 100, fontWeight: 900, color: "white", lineHeight: 1.05, letterSpacing: -2, textTransform: "uppercase" }}>{card}</div>
        <div style={{ width: 120, height: 10, background: ACCENT, margin: "30px 0 50px" }} />
        {LINKS.map((l, i) => {
          const s = spring({ frame: frame - 6 - i * 7, fps, config: { damping: 14 } });
          return (
            <div
              key={l.name}
              style={{
                fontSize: 52, fontWeight: 800, color: l.ink ?? "white", background: l.color, borderRadius: 24,
                padding: "30px 36px", marginBottom: 26, transform: `scale(${s})`, transformOrigin: "left center",
              }}
            >
              {l.name} ↗
            </div>
          );
        })}
        <div style={{ marginTop: 20, fontSize: 46, fontWeight: 600, color: "white", lineHeight: 1.3 }}>{line}</div>
      </div>
      <div style={{ position: "absolute", top: SAFE.bottom - 40, left: SAFE.left, fontSize: 24, color: "rgba(255,255,255,0.7)" }}>{CREDIT}</div>
    </AbsoluteFill>
  );
};
