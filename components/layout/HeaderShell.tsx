'use client';

import { usePathname } from '@/i18n/navigation';

interface HeaderShellProps {
  children: React.ReactNode;
}

export function HeaderShell({ children }: HeaderShellProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isHome ? 'bg-transparent' : 'bg-off-white'
      }`}
      data-hero={isHome ? 'true' : undefined}
    >
      {children}
    </header>
  );
}
