interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
  return (
    <nav aria-label="Pagination" className="flex items-center justify-between m-8">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="w-[100px] px-3 py-2 text-center rounded border border-gray-400 disabled:opacity-50 focus:border-2 focus:border-orange-500 bg-black text-white"
      >
        Previous
      </button>

      <div className="text-sm">
        Page {page} of {totalPages}
      </div>

      <button
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="w-[100px] px-3 py-2 text-center rounded border border-gray-400 disabled:opacity-50 focus:border-2 focus:border-orange-500 bg-black text-white"
      >
        Next
      </button>
    </nav>
  );
};
