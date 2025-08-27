import { Person } from '@/types/types';

export const fetchAllPeople = async (
  signal?: AbortSignal,
  page = 1,
  allPeople: Person[] = [],
): Promise<Person[]> => {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/people/?page=${page}`, { signal });
    const data = await response.json();

    const updatedPeople = allPeople.concat(data.results || []);

    return data.next ? fetchAllPeople(signal, page + 1, updatedPeople) : updatedPeople;
  } catch (error: unknown) {
    if (error instanceof Error && error.name !== 'AbortError') console.error(error);

    return allPeople;
  }
};
