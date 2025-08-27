import { Gender, Person } from '@/types/types';
import { useMemo } from 'react';

interface UseFilteredPeopleProps {
  allPeople: Person[];
  search: string;
  gender: Gender;
  page: number;
  itemsPerPage: number;
}

export function useFilteredPeople({
  allPeople,
  search,
  gender,
  page,
  itemsPerPage,
}: UseFilteredPeopleProps) {
  const filteredPeople = useMemo(() => {
    return allPeople.filter((person) => {
      const genderLower = person.gender.toLowerCase();
      const matchesGender =
        gender === Gender.All
          ? true
          : gender === Gender.Other
            ? genderLower !== Gender.Male && genderLower !== Gender.Female
            : genderLower === gender;
      return matchesGender && person.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [allPeople, search, gender]);

  const totalPages = Math.max(1, Math.ceil(filteredPeople.length / itemsPerPage));

  const currentPagePeople = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filteredPeople.slice(start, start + itemsPerPage);
  }, [filteredPeople, itemsPerPage, page]);

  return { currentPagePeople, totalPages };
}
