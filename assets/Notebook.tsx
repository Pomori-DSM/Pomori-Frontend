import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
  isFill?: boolean;
}

export const Notebook = ({ size = 24, color, isFill }: PropsType) => {
  return (
    <>
      {isFill ? (
        <Svg width={size} height={size} fill="none" viewBox="0 0 32 32">
          <Path
            fill={color}
            d="M3 24.334v-16c0-1.867 0-2.801.363-3.514.32-.628.83-1.137 1.457-1.457C5.533 3 6.467 3 8.334 3h16c1.867 0 2.799 0 3.512.363.627.32 1.138.83 1.458 1.457.363.712.363 1.645.363 3.508V24.34c0 1.864 0 2.795-.363 3.508a3.338 3.338 0 0 1-1.458 1.457c-.713.363-1.644.363-3.508.363H8.329c-1.863 0-2.796 0-3.508-.363a3.334 3.334 0 0 1-1.457-1.457C3 27.133 3 26.2 3 24.334Z"
          />
          <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.667 3H8.334c-1.867 0-2.801 0-3.514.363-.628.32-1.137.83-1.457 1.457C3 5.533 3 6.467 3 8.334v16c0 1.867 0 2.8.363 3.512.32.628.83 1.138 1.457 1.458.712.363 1.645.363 3.508.363h1.339M9.667 3h14.667c1.867 0 2.799 0 3.512.363.627.32 1.138.83 1.458 1.457.363.712.363 1.645.363 3.508V24.34c0 1.864 0 2.795-.363 3.508a3.338 3.338 0 0 1-1.458 1.457c-.713.363-1.644.363-3.508.363H9.668M9.667 3v26.667m6.666-15H23m-6.667-5H23"
          />
        </Svg>
      ) : (
        <Svg width={size} height={size} fill="none" viewBox="0 0 32 32">
          <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.667 5.333H9.6c-1.493 0-2.24 0-2.81.291-.503.256-.91.663-1.166 1.165-.29.57-.29 1.318-.29 2.811v12.8c0 1.494 0 2.24.29 2.81.256.502.663.91 1.165 1.166.57.29 1.316.29 2.807.29h1.07m0-21.332H22.4c1.494 0 2.24 0 2.81.29.502.256.91.663 1.166 1.165.29.57.29 1.316.29 2.807v12.809c0 1.49 0 2.236-.29 2.806a2.67 2.67 0 0 1-1.166 1.166c-.57.29-1.315.29-2.806.29H10.667m0-21.334v21.334m5.333-12h5.333m-5.333-4h5.333"
          />
        </Svg>
      )}
    </>
  );
};
