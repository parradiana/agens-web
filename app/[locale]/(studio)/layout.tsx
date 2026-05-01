import { NextStudioLayout } from 'next-sanity/studio';
import './studio.css';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <NextStudioLayout>{children}</NextStudioLayout>;
}
