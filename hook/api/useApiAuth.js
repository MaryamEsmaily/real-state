import * as apiAuth from "api/apiAuth";
import { useMutation } from "@tanstack/react-query";

const usePostLoginUser = () => {
  return useMutation(apiAuth.postLoginUser);
};

const usePostRegisterUser = () => {
  return useMutation(apiAuth.postRegisterUser);
};

export { usePostLoginUser, usePostRegisterUser };
