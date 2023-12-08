import type { Metadata } from 'next';
import { useAuth } from '@/store/useAuth';

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Admin page',
};


const Page = () => {
  return (
    <p>Admin page</p>
  );
};

export default Page;