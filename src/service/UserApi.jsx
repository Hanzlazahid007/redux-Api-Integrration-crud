import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://665b2880003609eda4600464.mockapi.io/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/userApi",
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (id) => `/userApi/${id}`,
      providesTags: ["User"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/userApi",
        method: "POST",
        body: JSON.stringify(user),
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/userApi/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (user) => ({
        url: `/userApi/${user.id}`,
        method: "DELETE",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useGetUserQuery,
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
} = UserApi;
