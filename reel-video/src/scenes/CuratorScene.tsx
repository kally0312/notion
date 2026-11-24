import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ACCENT, FONT, INK, SAFE, W } from "../theme";

const OPTIONS = ["Food", "Shopping", "History and culture", "Nature and walks", "K-Beauty"];

// Mock of the site's Trip Curator first question (text copied from kculturetrip.com).
export const CuratorScene: React.FC<{ card: string; line: string; card2: string; line2: string; picked: number }> = ({ card, line, card2, line2, picked }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const second = frame >= 85;
  const pop = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 12 });
  return (
    <AbsoluteFill style={{ backgroundColor: INK, fontFamily: FONT }}>
      <div style={{ position: "absolute", top: SAFE.top + 20, left: SAFE.left, width: W - SAFE.left - SAFE.right }}>
        <div style={{ fontSize: 92, fontWeight: 900, color: "white", lineHeight: 1.05, letterSpacing: -2, textTransform: "uppercase", opacity: pop }}>
          {second ? card2 : card}
        </div>
        <div style={{ width: 120, height: 10, background: ACCENT, margin: "30px 0 40px" }} />
        <div style={{ background: "white", borderRadius: 32, padding: "40px 36px", transform: `translateY(${(1 - pop) * 60}px)` }}>
          <div style={{ fontSize: 40, fontWeight: 800, color: INK, marginBottom: 26 }}>What brings you to Korea?</div>
          {OPTIONS.map((o, i) => {
            const on = interpolate(frame, [18 + i * 6, 24 + i * 6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            const isPicked = i === picked && frame > 50;
            return (
              <div
                key={o}
                style={{
                  fontSize: 40, fontWeight: 700, padding: "18px 26px", marginTop: 14, borderRadius: 18, opacity: on,
                  border: `4px solid ${isPicked ? ACCENT : "#E3E6EE"}`,
                  background: isPicked ? ACCENT : "white", color: isPicked ? "white" : INK,
                }}
              >
                {o}
              </div>
            );
          })}
          <div style={{ fontSize: 30, color: "#5B6478", marginTop: 26 }}>A few short questions. No sign-up.</div>
        </div>
        <div style={{ marginTop: 34, fontSize: 46, fontWeight: 600, color: "white", lineHeight: 1.3 }}>{second ? line2 : line}</div>
      </div>
    </AbsoluteFill>
  );
};
