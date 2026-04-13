import type { Metadata } from 'next';
import { ThemeProvider } from './theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A modern, responsive developer portfolio showcasing projects and skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
