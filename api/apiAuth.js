import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const postLoginUser = async (params) => {
  const { data } = await instance.post(BASE_URL + "loginuser", params);
  return data;
};

const postRegisterUser = async (params) => {
  const { data } = await instance.post(BASE_URL + "registeruser", params);
  return data;
};

export { postLoginUser, postRegisterUser };
