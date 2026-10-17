import type { Metadata } from 'next';
// @ts-expect-error CSS side-effect imports are handled by Next.js.
import './globals.css';

export const metadata: Metadata = {
  title: 'UMUHUZA — Real Love, Real People',
  description: 'Meet people, build meaningful relationships, and discover real love with UMUHUZA.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
