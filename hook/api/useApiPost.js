import { useQuery } from "@tanstack/react-query";
import * as apiPost from "api/apiPost";

const useGetGetPost = () => {
  return useQuery(["getGetPost"], apiPost.getGetPost);
};

export { useGetGetPost };
