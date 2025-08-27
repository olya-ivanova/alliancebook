import { ReactNode } from 'react';

interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: ReactNode;
  ariaLabel: string;
}

export const PaginationButton = ({
  onClick,
  disabled,
  children,
  ariaLabel,
}: PaginationButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="w-[100px] px-3 py-2 text-center rounded border border-gray-400
               disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-orange-500
               bg-black text-white font-sans text-[18px] tracking-wide font-medium"
    aria-label={ariaLabel}
  >
    {children}
  </button>
);
