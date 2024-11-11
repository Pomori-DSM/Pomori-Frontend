import { instance } from "./axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserAuthProps {
  id: string;
  password: string;
  passwordCheck?: string;
}

export const login = async (data: IUserAuthProps, navigation: any) => {
  return await instance
    .post(`/auth/login`, {
      username: data.id,
      password: data.password,
    })
    .then((response) => {
      AsyncStorage.setItem("accessToken", response.data.accessToken);
      navigation.navigate("Main");
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const signup = async (data: IUserAuthProps, navigation: any) => {
  return await instance
    .post(`/auth/signup`, {
      username: data.id,
      password: data.password,
    })
    .then((response) => {
      AsyncStorage.setItem("accessToken", response.data.accessToken);
      // navigation.navigate("Login");
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};
