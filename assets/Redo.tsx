import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
}

export const Redo = ({ size = 24, color }: PropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 8h5V3m-.29 13.357a8 8 0 1 1-.19-8.991"
      />
    </Svg>
  );
};
