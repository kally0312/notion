import React from "react";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { PhotoScene } from "./scenes/PhotoScene";
import { CuratorScene } from "./scenes/CuratorScene";
import { MapLinksScene } from "./scenes/MapLinksScene";
import { EndScene } from "./scenes/EndScene";

export const TRANSITION = 8;
const t = () => (
  <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION })} />
);

// Script: instagram/reels/2026-11-24-google-maps-korea.txt
export const Reel: React.FC = () => (
  <TransitionSeries>
    <TransitionSeries.Sequence name="Hook" durationInFrames={90}>
      <PhotoScene instant photo="hongdae.jpg" card="Google Maps ≠ Korea" line="Nobody tells you Google Maps fails in Korea." />
    </TransitionSeries.Sequence>
    {t()}
    <TransitionSeries.Sequence name="Naver/Kakao" durationInFrames={96}>
      <PhotoScene photo="myeongdong.jpg" card="Use Naver / Kakao" line="No walking directions. Locals use Naver or Kakao." />
    </TransitionSeries.Sequence>
    {t()}
    <TransitionSeries.Sequence name="Same 20 places" durationInFrames={100}>
      <PhotoScene photo="gyeongbokgung.jpg" card="Same 20 places?" line="And most lists send you to the same twenty places." />
    </TransitionSeries.Sequence>
    {t()}
    <TransitionSeries.Sequence name="Trip Curator" durationInFrames={165}>
      <CuratorScene
        picked={0}
        card="Tell it how you travel"
        line="K-Culture Trip asks how you travel first: food, shopping, K-beauty."
        card2="Under a minute. No sign-up."
        line2="Takes under a minute, and you don't sign up for anything."
      />
    </TransitionSeries.Sequence>
    {t()}
    <TransitionSeries.Sequence name="Gwangjang" durationInFrames={96}>
      <PhotoScene photo="gwangjang.jpg" tag="9:30 AM" card="Gwangjang Market" line="Mung bean pancakes, ordered by pointing." />
    </TransitionSeries.Sequence>
    {t()}
    <TransitionSeries.Sequence name="Bukchon" durationInFrames={90}>
      <PhotoScene photo="bukchon.jpg" tag="1:00 PM" card="Bukchon" line="Quiet hanok lanes. People live here." />
    </TransitionSeries.Sequence>
    {t()}
    <TransitionSeries.Sequence name="Seongsu" durationInFrames={90}>
      <PhotoScene photo="seongsu.jpg" tag="6:30 PM" card="Seongsu" line="Pop-ups that change every week." />
    </TransitionSeries.Sequence>
    {t()}
    <TransitionSeries.Sequence name="Map links" durationInFrames={100}>
      <MapLinksScene card="Map links that work" line="Every spot gets Naver, Kakao and Google links." />
    </TransitionSeries.Sequence>
    {t()}
    <TransitionSeries.Sequence name="CTA + loop" durationInFrames={110}>
      <EndScene card="Link in bio" line="K-Culture Trip · free Seoul trip curator" sub="Because Google Maps alone won't." />
    </TransitionSeries.Sequence>
  </TransitionSeries>
);

export const REEL_FRAMES = 90 + 96 + 100 + 165 + 96 + 90 + 90 + 100 + 110 - 8 * TRANSITION;
