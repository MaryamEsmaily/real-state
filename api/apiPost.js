import axios from "axios";
import { instance } from "config/instanceAxios";
import { BASE_URL_ADDRESS } from "constant/baseURL";
import getChartData from "utils/getChartData";
const BASE_URL = BASE_URL_ADDRESS;

const getGetPost = async ({ queryKey }) => {
  const params = queryKey[1];
  const { data } = await instance.get(BASE_URL + "getpost", {
    params,
  });

  const { data: predictedData } = await axios.get(
    `http://127.0.0.1:8000/location/${params?.Location}`
  );

  const finalData = getChartData(data, predictedData);

  return finalData;
};

const getGetAllPosts = async ({ queryKey }) => {
  const params = queryKey[1];
  if (!params?.Location) {
    const { data } = await instance.get(BASE_URL + "getAllposts");
    return data;
  } else {
    const { data } = await instance.get(BASE_URL + "getpost", {
      params,
    });
    return data;
  }
};

const postCreatePost = async (params) => {
  const { data } = await instance.post(BASE_URL + "createpost", params);
  return data;
};

export { getGetPost, postCreatePost, getGetAllPosts };
