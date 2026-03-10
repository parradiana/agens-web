'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, usePathname } from '@/i18n/navigation';
import type { StaticPathnames } from '@/i18n/routing';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useContactModal } from '@/lib/contact-modal-context';

export interface NavItem {
  href: StaticPathnames;
  label: string;
  isModalTrigger?: boolean;
}

interface NavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openModal } = useContactModal();

  const linkClass = (isActive: boolean) =>
    `text-[25px] leading-normal transition-all ${
      isActive
        ? 'font-bold underline underline-offset-2'
        : 'font-normal hover:font-bold hover:underline hover:underline-offset-2'
    }`;

  return (
    <>
      {/* Desktop */}
      <nav className="hidden xl:flex xl:items-center xl:gap-8">
        {items.map((item) => {
          const isActive = pathname === item.href;
          if (item.isModalTrigger) {
            return (
              <button
                key={item.href}
                onClick={openModal}
                className={linkClass(false)}
              >
                {item.label.toUpperCase()}
              </button>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(isActive)}
            >
              {item.label.toUpperCase()}
            </Link>
          );
        })}
      </nav>

      {/* Mobile toggle */}
      <button
        className="xl:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            data-mobile-menu
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full w-full bg-off-white border-t border-black px-4 py-6 text-black xl:hidden"
          >
            <nav className="flex flex-col gap-6">
              {items.map((item) => {
                const isActive = pathname === item.href;
                if (item.isModalTrigger) {
                  return (
                    <button
                      key={item.href}
                      onClick={() => { setIsMobileOpen(false); openModal(); }}
                      className={`text-2xl text-left ${isActive ? 'font-bold underline' : 'font-normal'}`}
                    >
                      {item.label}
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-2xl ${isActive ? 'font-bold underline' : 'font-normal'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
