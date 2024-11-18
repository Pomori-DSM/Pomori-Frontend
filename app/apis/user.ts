import { NavigationProp } from "@react-navigation/native";
import { instance } from "./axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserAuthProps {
  id: string;
  password: string;
  passwordCheck?: string;
}

interface IUserResponse {
  accessToken: string;
  user: {
    id: string;
    username: string;
    email?: string;
  };
}

export const login = async (
  data: IUserAuthProps,
  navigation: NavigationProp<any>
) => {
  if (data.id == "hamster" && data.password == "rladjwls#0305") {
    navigation.navigate("(tabs)");
  }
  // try {
  //   const response = await instance.post<IUserResponse>(`/auth/login`, {
  //     username: data.id,
  //     password: data.password,
  //   });

  //   const { accessToken, user } = response.data || {};
  //   if (!accessToken || !user) {
  //     throw new Error("Invalid response from server. Missing required fields.");
  //   }

  //   await AsyncStorage.setItem("accessToken", accessToken).catch((err) => {
  //     console.error("Failed to save accessToken:", err);
  //   });
  //   await AsyncStorage.setItem("userInfo", JSON.stringify(user)).catch(
  //     (err) => {
  //       console.error("Failed to save userInfo:", err);
  //     }
  //   );

  //   navigation.navigate("(tabs)");
  //   return response;
  // } catch (err: any) {
  //   const errorMessage =
  //     err.response?.data?.message || "로그인 실패. 다시 시도해보세요.";
  //   console.error("로그인 실패", errorMessage);
  //   alert(errorMessage);
  // }
};

export const signup = async (
  data: IUserAuthProps,
  navigation: NavigationProp<any>
) => {
  try {
    const response = await instance.post<IUserResponse>(`/auth/signup`, {
      username: data.id,
      password: data.password,
    });

    const { accessToken, user } = response.data || {};
    if (!accessToken || !user) {
      throw new Error("Invalid response from server. Missing required fields.");
    }

    await AsyncStorage.setItem("accessToken", accessToken).catch((err) => {
      console.error("Failed to save accessToken:", err);
    });
    await AsyncStorage.setItem("userInfo", JSON.stringify(user)).catch(
      (err) => {
        console.error("Failed to save userInfo:", err);
      }
    );

    navigation.navigate("(tabs)");
    return response;
  } catch (err: any) {
    const errorMessage =
      err.response?.data?.message || "Signup failed. Please try again.";
    console.error("Signup failed:", errorMessage);
    alert(errorMessage);
  }
};
