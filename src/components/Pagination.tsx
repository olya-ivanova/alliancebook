import { useEffect } from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const goToPage = (newPage: number) => {
    const validPage = Math.min(totalPages, Math.max(1, newPage));
    setPage(validPage);
  };

  return (
    <nav aria-label="Pagination" className="font-roboto flex items-center justify-between m-8">
      <button
        type="button"
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
        className="w-[100px] px-3 py-2 text-center rounded border border-gray-400 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
        aria-label="Go to previous page"
      >
        Previous
      </button>

      <div className="text-[24px]" aria-live="polite" tabIndex={0}>
        Page <span className="text-orange-500">{page}</span> of {totalPages}
      </div>

      <button
        type="button"
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages}
        className="w-[100px] px-3 py-2 text-center rounded border border-gray-400 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-black text-white"
        aria-label="Go to next page"
      >
        Next
      </button>
    </nav>
  );
};
