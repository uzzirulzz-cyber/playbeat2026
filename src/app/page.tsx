'use client';

import dynamic from 'next/dynamic';
import { StoreProvider } from '@/store/useStore';

// Load the App shell only on the client to avoid SSR hydration issues
// (the store relies on localStorage, theme classes, and other browser-only APIs)
const App = dynamic(() => import('@/components/App'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f4ee] text-[#10233d]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#fcb800] to-yellow-300 text-slate-950 flex items-center justify-center font-black text-lg shadow-lg shadow-yellow-500/20 animate-pulse">
          PB
        </div>
        <p className="text-sm font-semibold text-[#58687c]">
          Loading PlayBeat Digital...
        </p>
      </div>
    </div>
  ),
});

export default function Page() {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}
