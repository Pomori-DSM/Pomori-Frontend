import React from "react";
import { Svg, Path } from "react-native-svg";

interface PropsType {
  size?: number;
  color?: string;
  isFill?: boolean;
}

export const House = ({ size = 24, color, isFill }: PropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 32 32">
      <Path
        fill={isFill ? color : "none"}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M26.667 22.667V15.27c0-.713 0-1.07-.088-1.4a2.662 2.662 0 0 0-.373-.824c-.192-.283-.46-.518-.996-.988l-6.4-5.6c-.995-.87-1.493-1.306-2.053-1.472a2.67 2.67 0 0 0-1.514 0c-.56.166-1.056.6-2.05 1.47L6.79 12.059c-.536.47-.803.705-.996.988-.17.251-.297.53-.374.823-.087.332-.087.688-.087 1.4v7.398c0 1.242 0 1.863.203 2.353.271.654.79 1.174 1.443 1.444.49.203 1.112.203 2.354.203s1.864 0 2.354-.203a2.667 2.667 0 0 0 1.443-1.443c.203-.49.203-1.112.203-2.354v-1.334a2.667 2.667 0 0 1 5.334 0v1.334c0 1.242 0 1.863.203 2.354.27.653.79 1.173 1.442 1.443.49.203 1.112.203 2.354.203 1.243 0 1.865 0 2.355-.203a2.667 2.667 0 0 0 1.443-1.444c.203-.49.203-1.11.203-2.353Z"
      />
    </Svg>
  );
};
