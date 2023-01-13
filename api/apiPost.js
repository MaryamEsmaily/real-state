import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
const BASE_URL = BASE_URL_ADDRESS;

const getGetPost = async ({ queryKey }) => {
  const params = queryKey[1];
  const { data } = await instance.get(BASE_URL + "getpost", {
    params,
  });
  return data;
};

const postCreatePost = async (params) => {
  const { data } = await instance.post(BASE_URL + "createpost", params);
  return data;
};

export { getGetPost, postCreatePost };
