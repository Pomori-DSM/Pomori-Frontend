import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
  isFill?: boolean;
}

export const Timer = ({ size = 24, color, isFill }: PropsType) => {
  return (
    <>
      {isFill ? (
        <></>
      ) : (
        <Svg width={size} height={size} fill="none" viewBox="0 0 32 32">
          <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m28 8-2.667-2.667m-12-2.667h5.334M16 28c-5.891 0-10.667-4.776-10.667-10.667 0-5.89 4.776-10.666 10.667-10.666s10.667 4.775 10.667 10.666S21.89 28 16 28Zm0-10.667V12"
          />
        </Svg>
      )}
    </>
  );
};
