import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../models/product";
import { baseQueryWithErroHandling } from "../../api/baseApi";

export const CatalogApi = createApi({
  reducerPath: "CatalogApi",
  baseQuery: baseQueryWithErroHandling,
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => ({ url: "products" }),
    }),

    fetchProductDetails: builder.query<Product, number>({
      query: (productId) => ({ url: `products/${productId}` }),
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductDetailsQuery } =
  CatalogApi;
