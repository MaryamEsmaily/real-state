import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as apiPost from "api/apiPost";
import reactQueryConfig from "config/reactQueryConfig";

const useGetGetPost = (params) => {
  return useQuery(["getGetPost", params], apiPost.getGetPost, {
    ...reactQueryConfig,
  });
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
