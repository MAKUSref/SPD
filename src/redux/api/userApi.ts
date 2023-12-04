import { baseApi } from "./baseApi";

interface User {
  sub: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  counter: number;
  lastSip?: number;
  streak: number;
  status?: string;
  pic?: string;
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
      query: () => '/user/friends',
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

    addFriend: builder.mutation<unknown, string>({
      query: (username) => ({
        url: '/user/friends',
        method: 'POST',
        body: { username }
      }),
      invalidatesTags: ['user']
    }),

    removeFriend: builder.mutation<unknown, string>({
      query: (username) => ({
        url: '/user/friends',
        method: 'DELETE',
        body: { username }
      }),
      invalidatesTags: ['user']
    }),

    changeStatus: builder.mutation<unknown, string>({
      query: (status) => ({
        url: '/user/status',
        method: 'POST',
        body: { status }
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
  useAddFriendMutation,
  useChangeStatusMutation,
  useRemoveFriendMutation,
} = userApi;
