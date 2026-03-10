'use client';

import { useEffect, useState } from 'react';
import { usePathname } from '@/i18n/navigation';

interface HeroState {
  pathname: string;
  isTransparent: boolean;
}

interface HeaderShellProps {
  children: React.ReactNode;
}

export function HeaderShell({ children }: HeaderShellProps) {
  const pathname = usePathname();
  const [state, setState] = useState<HeroState>({ pathname, isTransparent: false });

  if (state.pathname !== pathname) {
    setState({ pathname, isTransparent: false });
  }

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setState((prev) => ({ ...prev, isTransparent: entry.isIntersecting })),
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  const isTransparent = state.isTransparent;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isTransparent ? 'bg-transparent' : 'bg-off-white'
      }`}
      data-hero={isTransparent ? 'true' : undefined}
    >
      {children}
    </header>
  );
}
