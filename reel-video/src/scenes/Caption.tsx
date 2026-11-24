import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ACCENT, FONT, SAFE, W } from "../theme";

// Big on-screen card (<=6 words) plus the burned-in spoken line.
export const Caption: React.FC<{
  card: string;
  line: string;
  top?: number;
  instant?: boolean;
}> = ({ card, line, top = 620, instant = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = instant ? 1 : spring({ frame, fps, config: { damping: 200 }, durationInFrames: 12 });
  const lineIn = instant ? 1 : interpolate(frame, [6, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <div
      style={{
        position: "absolute",
        top,
        left: SAFE.left,
        width: W - SAFE.left - SAFE.right,
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          display: "inline",
          fontSize: 104,
          fontWeight: 900,
          lineHeight: 1.08,
          color: "white",
          letterSpacing: -2,
          textTransform: "uppercase",
          opacity: pop,
          textShadow: "0 6px 30px rgba(0,0,0,0.55)",
        }}
      >
        {card}
      </div>
      <div style={{ width: 120, height: 10, background: ACCENT, margin: "36px 0 30px", transform: `scaleX(${pop})`, transformOrigin: "left" }} />
      <div
        style={{
          fontSize: 46,
          fontWeight: 600,
          lineHeight: 1.3,
          color: "white",
          opacity: lineIn,
          background: "rgba(14,19,32,0.72)",
          padding: "18px 24px",
          borderRadius: 16,
          display: "inline-block",
        }}
      >
        {line}
      </div>
    </div>
  );
};
