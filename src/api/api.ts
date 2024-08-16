import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {PagedResults, People} from '$src/api/types';

const BASE_URL = 'https://swapi.py4e.com/api';

const fetchSingle = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

// Hooks
export const usePeopleInfiniteQuery = () => {
  return useInfiniteQuery<PagedResults<People[]>, Error>({
    queryKey: ['people'],
    queryFn: async ({pageParam}) => {
      const response = await fetch(pageParam as string);
      const data = await response.json();
      return data;
    },
    initialPageParam: `${BASE_URL}/people/?page=1`,
    getNextPageParam: lastPage => {
      return lastPage.next;
    },
  });
};

export const useFilmNames = (filmUrls: string[]) => {
  return useQuery<string[], Error>({
    queryKey: ['filmNames', filmUrls],
    queryFn: async () => {
      const filmPromises = filmUrls.map(url => fetchSingle(url));
      const films = await Promise.all(filmPromises);
      return films.map(film => {
        if ('title' in film) {
          return film.title;
        }
        throw new Error('Unexpected item format');
      });
    },
    enabled: filmUrls.length > 0,
  });
};

export const useStarshipNames = (starshipUrls: string[]) => {
  return useQuery<string[], Error>({
    queryKey: ['starshipNames', starshipUrls],
    queryFn: async () => {
      if (starshipUrls.length === 0) return [];
      const starshipPromises = starshipUrls.map(url => fetchSingle(url));
      const starships = await Promise.all(starshipPromises);
      return starships.map(starship => {
        if ('name' in starship) {
          return starship.name;
        }
        throw new Error('Unexpected item format');
      });
    },
    enabled: starshipUrls.length > 0,
  });
};
