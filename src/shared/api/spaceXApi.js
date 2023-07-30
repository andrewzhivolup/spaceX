import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spaceXApi = createApi({
    reducerPath: 'spaceXApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spacexdata.com/v3/',
    }),
    endpoints: (builder) => ({
        getMissions: builder.query({
            query: () => 'launches?start=2015-01-01&end=2019-12-31&success=true',
        }),
    }),
});

export const { useGetMissionsQuery } = spaceXApi;
