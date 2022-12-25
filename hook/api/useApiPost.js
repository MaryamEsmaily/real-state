import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as apiPost from "api/apiPost";

const useGetGetPost = () => {
  return useQuery(["getGetPost"], apiPost.getGetPost);
};

const usePostCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(apiPost.postCreatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("getGetPost");
    },
  });
};

export { useGetGetPost, usePostCreatePost };
