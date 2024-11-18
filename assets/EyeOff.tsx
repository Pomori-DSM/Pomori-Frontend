import React from "react";
import { Svg, Path, G, Defs, ClipPath } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
  onPress?: () => void;
}

export const EyeOff = ({ size = 24, color, onPress }: PropsType) => {
  return (
    <Svg
      width={size}
      height={size}
      onPress={onPress}
      fill="none"
      viewBox="0 0 24 24"
    >
      <G clipPath="url(#a)">
        <Path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.498 18.498 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
