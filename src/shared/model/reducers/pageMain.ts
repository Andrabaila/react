import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API } from '../../api/constants';
import { CardObj } from 'widgets/cardList/types';

export const pageMainReducer = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API.baseUrl }),
  endpoints: (build) => ({
    getCharacters: build.query<CardObj[], string>({
      queryFn: async () => {
        try {
          const response = await fetch(`${API.baseUrl}${API.characters}`);
          return { data: (await response.json()).results };
        } catch (e) {
          return { error: { status: 404, data: 'Error' } };
        }
      },
    }),
  }),
});

export const { useGetCharactersQuery } = pageMainReducer;
