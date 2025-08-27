interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
  return (
    <nav aria-label="Pagination" className="mt-6 flex items-center justify-between">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="px-3 py-2 rounded border disabled:opacity-50 focus:outline-none focus:ring-2 focus:blue-500"
      >
        Previous
      </button>

      <button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="px-3 py-2 rounded border disabled:opacity-50 focus:outline-none focus:ring-2 focus:blue-500"
      >
        Next
      </button>
    </nav>
  );
};
