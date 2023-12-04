import { baseApi } from "./baseApi";

interface User {
  sub: string,
  username?: string,
  firstName?: string,
  lastName?: string,
  counter: number,
  lastSip?: number,
  streak: number,
  status?: string
}

interface Friend {
  friend: User,
  since: number
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{url: string}, void>({
      query: () => ({
        url: '/auth',
        method: 'POST'
      })
    }),

    getSelf: builder.query<User, void>({
      query: () => '/user',
      providesTags: ['user']
    }),

    getSelfCounter: builder.query<number, void>({
      query: () => '/user/counter',
      providesTags: ['user']
    }),

    getSelfFriends:builder.query<Friend[], void>({
      query: () => '/user/counter',
      providesTags: ['user']
    }),
    
    registerUsername: builder.mutation<unknown, string>({
      query: (username) => ({
        url: '/user',
        method: 'PATCH',
        body: { username }
      }),
      invalidatesTags: ['user']
    }),

    incrementCounter: builder.mutation<number, void>({
      query: () => ({
        url: '/user/counter/increment',
        method: 'POST'
      }),
      invalidatesTags: ['user']
    }),
  })
});

export const {
  useLoginMutation,
  useGetSelfQuery,
  useGetSelfCounterQuery,
  useGetSelfFriendsQuery,
  useRegisterUsernameMutation,
  useIncrementCounterMutation,
} = userApi;
