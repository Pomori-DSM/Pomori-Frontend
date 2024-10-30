import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  onPress?: () => void;
  color?: string;
}

export const Eye = ({ size = 24, onPress, color }: PropsType) => {
  return (
    <Svg
      width={size}
      height={size}
      onPress={onPress}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </Svg>
  );
};
