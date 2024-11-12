import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  onPress?: () => void;
  color?: string;
  rotate?: "up" | "left" | "right" | "down";
}

const rotationAngles: { [key: string]: string } = {
  right: "180deg",
  up: "90deg",
  down: "-90deg",
  left: "0deg",
};

export const Arrow_Long = ({
  size = 24,
  onPress,
  color,
  rotate = "left",
}: PropsType) => {
  const rotation = rotationAngles[rotate] || rotationAngles["left"];

  return (
    <Svg
      width={size}
      height={size}
      onPress={onPress}
      style={{ transform: [{ rotate: rotation }] }}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 12H5m0 0 6 6m-6-6 6-6"
      />
    </Svg>
  );
};
