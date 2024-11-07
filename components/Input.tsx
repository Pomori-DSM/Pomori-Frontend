import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { color, Txt } from "@/styles";
import { Eye, EyeOff } from "@/assets";

interface InputProps {
  title?: string;
  type?: "password" | "text";
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const Input = ({
  title,
  type,
  placeholder,
  errorMessage = "",
  value,
  onChangeText,
}: InputProps) => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Txt textStyle="semibold14" color={focus ? "gray600" : "gray400"}>
          {title}
        </Txt>
      </View>
      <View
        style={[
          styles.inputBox,
          {
            borderColor: focus
              ? color.black
              : errorMessage !== ""
              ? color.red500
              : color.gray300,
          },
        ]}
      >
        <TextInput
          blurOnSubmit={type === "password" && visiblePassword}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={color.gray300}
          placeholder={placeholder}
          secureTextEntry={type === "password" && !visiblePassword}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {type === "password" && (
          <TouchableOpacity
            onPress={() => setVisiblePassword(!visiblePassword)}
          >
            {visiblePassword ? (
              <Eye color={color.black} />
            ) : (
              <EyeOff color={color.black} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {errorMessage !== "" && (
        <Txt textStyle="medium12" color="red500">
          {errorMessage}
        </Txt>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 4,
    position: "relative",
  },
  input: {
    fontWeight: "500",
    fontSize: 18,
    flex: 1,
  },
  inputBox: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titleBox: {
    paddingHorizontal: 8,
    backgroundColor: color.white,
    position: "absolute",
    top: -8,
    left: 8,
    zIndex: 10,
  },
});
