import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as apiPost from "api/apiPost";
import reactQueryConfig from "config/reactQueryConfig";

const useGetGetPost = (params) => {
  return useQuery(["getGetPost", params], apiPost.getGetPost, {
    ...reactQueryConfig,
    enabled: !!params.Location,
  });
};

const useGetGetAllPosts = (params) => {
  return useQuery(["getGetAllPosts", params], apiPost.getGetAllPosts);
};

const usePostCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation(apiPost.postCreatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("getAllposts");
    },
  });
};

export { useGetGetPost, useGetGetAllPosts, usePostCreatePost };
