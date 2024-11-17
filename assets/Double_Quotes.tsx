import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
}

export const Double_Quotes = ({ size = 24, color }: PropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 12v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109H17.4c.56 0 .839 0 1.053-.109.188-.096.341-.25.437-.437.11-.214.11-.494.11-1.054v-1.803c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C18.24 12 17.96 12 17.4 12H14Zm0 0v-2a3 3 0 0 1 3-3M5 12v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 17 6.04 17 6.598 17h1.804c.559 0 .838 0 1.052-.109.188-.096.341-.25.437-.437C10 16.24 10 15.96 10 15.4v-1.803c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C9.24 12 8.96 12 8.4 12H5Zm0 0v-2a3 3 0 0 1 3-3"
      />
    </Svg>
  );
};
