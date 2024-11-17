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

export const Arrow = ({
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
        d="m14 16-4-4 4-4"
      />
    </Svg>
  );
};
