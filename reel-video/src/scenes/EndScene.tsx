import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ACCENT, FONT, INK, SAFE, W } from "../theme";

export const EndScene: React.FC<{ card: string; line: string; sub?: string }> = ({ card, line, sub }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 12 } });
  return (
    <AbsoluteFill style={{ backgroundColor: ACCENT, fontFamily: FONT }}>
      <div style={{ position: "absolute", top: 640, left: SAFE.left, width: W - SAFE.left - SAFE.right }}>
        <div style={{ fontSize: 132, fontWeight: 900, color: "white", lineHeight: 1, letterSpacing: -3, transform: `scale(${s})`, transformOrigin: "left" }}>
          {card}
        </div>
        <div style={{ marginTop: 40, fontSize: 50, fontWeight: 700, color: INK }}>{line}</div>
        {sub ? <div style={{ marginTop: 24, fontSize: 44, fontWeight: 600, color: "white" }}>{sub}</div> : null}
      </div>
    </AbsoluteFill>
  );
};
