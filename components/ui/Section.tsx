import type { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  /**
   * Background that extends full-width.
   * Examples: 'bg-black', 'bg-gray', 'bg-off-white'
   */
  background?: string;
  /**
   * If true, renders children directly without Container wrapper.
   * Use this when you need full-width content without padding.
   */
  fullWidth?: boolean;
}

export function Section({
  children,
  className = '',
  background = '',
  fullWidth = false,
}: SectionProps) {
  const sectionClasses = `w-full ${background} ${className}`;

  if (fullWidth) {
    return <section className={sectionClasses}>{children}</section>;
  }

  return (
    <section className={sectionClasses}>
      <Container>{children}</Container>
    </section>
  );
}
