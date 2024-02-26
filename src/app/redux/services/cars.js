import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import carsData from '../../../../RentalCarData.json';

export const carsApi = createApi({
    reducerPath: 'carsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '' }), // We don't need a base URL since we're not fetching from a server
    endpoints: (builder) => ({
        getAllCars: builder.query({
            query: () => carsData, // Return the entire JSON data
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCarsQuery } = carsApi;
