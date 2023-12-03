import { lusitana } from '@/ui/fonts';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col h-20 shrink-0  rounded-lg bg-blue-200 p-4 md:h-52">
        <h1 className="text-red-500">I'm blue!</h1>
        <p className={`${lusitana.className} antialiased text-xl text-gray-800 md:text-3xl md:leading-normal`}>Lusitana font</p>
      </div>
      <Image
        src="/hero-desktop.avif"
        width={560}
        height={620}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </main>
  );
}
