import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
  fill?: string;
  onPress?: () => void;
}

export const Play = ({ size = 24, color, fill, onPress }: PropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
      <Path
        fill={fill}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.333 11.556V4.445c0-.587 0-.88.124-1.054a.666.666 0 0 1 .458-.274c.21-.028.47.11.987.386l6.666 3.556h.003c.571.306.857.458.95.661a.668.668 0 0 1 0 .56c-.093.203-.38.356-.953.661l-6.666 3.556c-.518.276-.776.413-.987.386a.667.667 0 0 1-.458-.274c-.124-.174-.124-.467-.124-1.053Z"
      />
    </Svg>
  );
};
