import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
  isFill?: boolean;
}

export const Calendar = ({ size = 24, color, isFill }: PropsType) => {
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
            d="M5.333 10.666h21.334m-21.334 0V22.4c0 1.494 0 2.24.291 2.81.256.502.663.91 1.165 1.166.57.29 1.316.29 2.807.29h12.808c1.49 0 2.236 0 2.806-.29a2.67 2.67 0 0 0 1.166-1.166c.29-.57.29-1.315.29-2.805V10.666m-21.333 0V9.6c0-1.493 0-2.24.291-2.811a2.66 2.66 0 0 1 1.165-1.165c.57-.29 1.318-.29 2.811-.29h1.067m16 5.332v-1.07c0-1.49 0-2.237-.29-2.807a2.668 2.668 0 0 0-1.167-1.165c-.57-.29-1.316-.29-2.81-.29h-1.067m0-2.667v2.666m0 0H10.667m0-2.667v2.667"
          />
        </Svg>
      )}
    </>
  );
};