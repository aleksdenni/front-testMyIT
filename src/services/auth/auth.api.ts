import { baseApi } from "@/services/base.api";

export const authService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseType, LoginArgs>({
      invalidatesTags: ["Me"],
      query: (body) => ({
        body,
        method: "POST",
        url: `v1/auth/login`,
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ["Me"],
      query: () => ({
        method: "POST",
        url: "v1/auth/logout",
      }),
    }),
    me: builder.query<any, void>({
      providesTags: ["Me"],
      query: () => "/v1/auth/me",
    }),
    signUp: builder.mutation<SignUpResponse, SignUpArgs>({
      query: (body) => ({
        body,
        method: "POST",
        url: "v1/auth/sign-up",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useSignUpMutation,
} = authService;
export type LoginResponseType = {
  accessToken: string;
};
export type LoginArgs = {
  email: string;
  password: string;
};
type SignUpArgs = {
  email: string;
  password: string;
};
type SignUpResponse = {
  email: string;
  id: string;
  name: string;
};
