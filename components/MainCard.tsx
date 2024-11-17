import { Arrow } from "@/assets";
import { Txt, color } from "@/styles";
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageRequireSource,
} from "react-native";

interface MainCardProps {
  title?: string;
  details?: string;
  image: ImageRequireSource;
  onPress?: () => void;
}

export const MainCard = ({ title, details, image, onPress }: MainCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.goToCalendarBox}>
      <View style={styles.countTimeTitle}>
        <Image style={styles.image} source={image} />

        <Arrow size={28} rotate="right" color={color.gray300} />
      </View>

      <View style={styles.imageBox}>
        <Txt textStyle="semibold16" color="gray600">
          {title}
        </Txt>
        <Txt textStyle="semibold14" color="gray400">
          {details}
        </Txt>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBox: {
    gap: 4,
  },
  image: {
    width: 48,
    height: 48,
    opacity: 0.5,
  },
  goToCalendarBox: {
    backgroundColor: color.white,
    padding: 20,
    borderRadius: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: color.gray200,
    flex: 1,
  },
  countTimeTitle: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
  },
});
