import { Person } from '@/types/types';
import { fetchAllPeople } from '@/utils/api';
import { useEffect, useState } from 'react';

export function useFetchPeople() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    fetchAllPeople(controller.signal)
      .then(setPeople)
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error(error);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { people, loading };
}
