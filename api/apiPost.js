import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const getGetPost = async () => {
  const { data } = await instance.get(BASE_URL + "getpost");
  return data;
};

export { getGetPost };
