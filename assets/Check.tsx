import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
}

export const Check = ({ size = 24, color }: PropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 12 4.243 4.243 8.484-8.486"
      />
    </Svg>
  );
};
