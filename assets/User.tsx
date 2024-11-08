import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
  isFill?: boolean;
}

export const User = ({ size = 24, color, isFill }: PropsType) => {
  return (
    <>
      {isFill ? (
        <Svg width={size} height={size} fill="none" viewBox="0 0 32 32">
          <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M26.667 28c0-3.682-4.776-6.667-10.667-6.667S5.333 24.318 5.333 28M16 17.333A6.667 6.667 0 1 1 16 4a6.667 6.667 0 0 1 0 13.333Z"
          />
        </Svg>
      ) : (
        <></>
      )}
    </>
  );
};
