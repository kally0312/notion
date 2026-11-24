import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { CREDIT, FONT, SAFE } from "../theme";
import { Caption } from "./Caption";

export type PhotoSceneProps = {
  photo: string;
  card: string;
  line: string;
  tag?: string;
  focus?: string; // CSS object-position
  instant?: boolean; // hook scene: text visible from frame 1
};

export const PhotoScene: React.FC<PhotoSceneProps> = ({ photo, card, line, tag, focus = "center", instant = false }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const zoom = interpolate(frame, [0, durationInFrames], [1.08, 1.18]);
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Img
        src={staticFile(photo)}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: focus, transform: `scale(${zoom})` }}
      />
      <AbsoluteFill
        style={{ background: "linear-gradient(180deg, rgba(14,19,32,0.35) 0%, rgba(14,19,32,0.55) 45%, rgba(14,19,32,0.75) 100%)" }}
      />
      {tag ? (
        <div
          style={{
            position: "absolute", top: SAFE.top + 160, left: SAFE.left, fontFamily: FONT, fontSize: 44, fontWeight: 800,
            color: "#0E1320", background: "white", padding: "10px 22px", borderRadius: 999,
          }}
        >
          {tag}
        </div>
      ) : null}
      <Caption card={card} line={line} instant={instant} />
      <div style={{ position: "absolute", bottom: 40, left: 0, right: 0, textAlign: "center", fontFamily: FONT, fontSize: 24, color: "rgba(255,255,255,0.75)" }}>
        {CREDIT}
      </div>
    </AbsoluteFill>
  );
};
