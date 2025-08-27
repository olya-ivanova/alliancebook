import { useEffect } from 'react';
import { PaginationButton } from './PaginationButton';

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const goToPage = (newPage: number) => {
    const validPage = Math.min(totalPages, Math.max(1, newPage));
    setPage(validPage);
  };

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between m-8">
      <PaginationButton
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
        ariaLabel="Go to previous page"
      >
        Previous
      </PaginationButton>

      <div className="text-[24px] font-sans" aria-live="polite" tabIndex={0}>
        Page <span className="text-orange-500">{page}</span> of {totalPages}
      </div>

      <PaginationButton
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages}
        ariaLabel="Go to next page"
      >
        Next
      </PaginationButton>
    </nav>
  );
};
