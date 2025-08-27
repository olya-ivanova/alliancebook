export const fetchPeople = async (page: number, search: string, signal?: AbortSignal) => {
  const searchParam = search ? `&search=${encodeURIComponent(search)}` : '';
  const res = await fetch(`https://swapi.py4e.com/api/people/?page=${page}${searchParam}`, { signal });
  const data = await res.json();

  return {
    results: data.results || [],
    totalCount: data.count || 0,
  };
};
