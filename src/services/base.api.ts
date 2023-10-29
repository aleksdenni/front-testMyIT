import { baseQueryWithReauth } from "@/services/base-api-with-refetch";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: "baseApi",
  tagTypes: ["Me"],
});
