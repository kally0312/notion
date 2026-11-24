import React from "react";
import { Composition } from "remotion";
import { Reel, REEL_FRAMES } from "./Reel";
import { FPS, H, W } from "./theme";

export const RemotionRoot: React.FC = () => (
  <Composition id="GoogleMapsKorea" component={Reel} durationInFrames={REEL_FRAMES} fps={FPS} width={W} height={H} />
);
