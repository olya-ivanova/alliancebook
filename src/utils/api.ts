import { Person } from "@/types/types";

export const fetchAllPeople = async (signal?: AbortSignal): Promise<Person[]> => {
  let people: Person[] = [];
  let nextPage = 1;

  try {
    while (true) {
      const res = await fetch(`https://swapi.py4e.com/api/people/?page=${nextPage}`, { signal });
      const data = await res.json();
      people = people.concat(data.results || []);
      if (!data.next) break;
      nextPage++;
    }
  } catch (error) {
    if ((error as any).name !== 'AbortError') console.error(error);
  }

  return people;
};
