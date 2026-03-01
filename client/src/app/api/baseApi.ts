import { fetchBaseQuery } from "@reduxjs/toolkit/query";

// Create a custom base query function that includes error handling and simulates network delay

const customBaseQuery = fetchBaseQuery({
  baseUrl: "https://localhost:5001/api",
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const baseQueryWithErroHandling = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  await sleep(500); // Simulate network delay

  const result = await customBaseQuery(args, api, extraOptions);

  if (result.error) {
    console.error("API Error:", result.error);
    return { error: { status: result.error.status, data: result.error.data } };
  }

  return result;
};
