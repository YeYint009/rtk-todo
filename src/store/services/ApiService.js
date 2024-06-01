import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:"https://contact.sankyitar.store/api/v1"
  }),
  endpoints:(builder)=> ({})
});
