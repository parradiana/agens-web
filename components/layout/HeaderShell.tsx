'use client';

import { useEffect, useState } from 'react';
import { usePathname } from '@/i18n/navigation';

interface HeaderShellProps {
  children: React.ReactNode;
}

export function HeaderShell({ children }: HeaderShellProps) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    if (!isHome) return;

    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  const isTransparent = isHome && heroVisible;

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
