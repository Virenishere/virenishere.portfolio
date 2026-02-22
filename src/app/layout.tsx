import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import CursorAnimation from '@/components/ui/cursor/CursorAnimation';


const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--space-grotesk',
});
const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--jetbrains-mono',
  weight: ['500', '600'],
});

export const metadata: Metadata = {
  title: 'virenishere',
  description:
    "I'm Virender Prasad — a passionate developer crafting clean, functional web experiences. Explore my work and feel free to reach out!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          spaceGrotesk.variable,
          JetBrainsMono.variable
        )}
      >
        <CursorAnimation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
