import type { Metadata } from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Next.js Auth',
    template: '%s | Commerce Store'
  },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: {
  children: ReactNode;
}) {
  return (
    <>{children}</>
  );
}