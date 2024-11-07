import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
}

export const Pause = ({ size = 24, color }: PropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 5.5v13c0 .465 0 .697.038.89a2 2 0 0 0 1.571 1.572c.194.038.426.038.89.038.465 0 .698 0 .892-.038a2 2 0 0 0 1.57-1.572c.039-.19.039-.42.039-.878V5.488c0-.457 0-.687-.038-.879a2 2 0 0 0-1.572-1.57C18.197 3 17.965 3 17.5 3s-.697 0-.89.038a1.999 1.999 0 0 0-1.572 1.571C15 4.803 15 5.035 15 5.5Zm-11 0v13c0 .465 0 .697.038.89a2 2 0 0 0 1.571 1.572c.194.038.426.038.89.038.465 0 .698 0 .892-.038a2 2 0 0 0 1.57-1.572C9 19.2 9 18.97 9 18.512V5.488c0-.457 0-.687-.038-.879A2 2 0 0 0 7.39 3.04C7.197 3 6.965 3 6.5 3s-.697 0-.89.038A1.999 1.999 0 0 0 4.037 4.61C4 4.803 4 5.035 4 5.5Z"
      />
    </Svg>
  );
};
