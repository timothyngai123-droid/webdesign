import type { ReactNode } from 'react';
import ClientLayout from '../client-layout';

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
