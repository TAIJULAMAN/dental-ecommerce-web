import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/getBaseUrl";

const brandApi = createApi({
  reducerPath: "brandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/brands`,
    credentials: "include",
  }),
  tagTypes: ["Brand"],
  endpoints: (builder) => ({
    fetchAllBrands: builder.query({
      query: () => "/",   
      providesTags: ["Brand"],
      transformResponse: (response) => response.data,  
    }),
  }),
});

export const { useFetchAllBrandsQuery } = brandApi;
export default brandApi;
