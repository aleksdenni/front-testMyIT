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
    me: builder.query<any, void>({
      providesTags: ["Me"],
      query: () => "/v1/auth/me",
    }),
  }),
});

export const { useLoginMutation, useMeQuery } = authService;
export type LoginResponseType = {
  accessToken: string;
};
export type LoginArgs = {
  email: string;
  password: string;
};
