import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1728px] px-6 md:px-8 lg:px-12 xl:px-[50px] ${className}`}
    >
      {children}
    </div>
  );
}
