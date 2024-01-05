import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About title',
  description: 'About description',
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
