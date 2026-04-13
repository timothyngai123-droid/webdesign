import type { Metadata } from 'next';
import ContactPageContent from './contact-page';

export const metadata: Metadata = {
  title: 'Contact — Timothy Ngai Studio',
  description:
    'Get in touch to discuss your web design project. Custom-coded websites for local businesses.',
  openGraph: {
    title: 'Contact — Timothy Ngai Studio',
    description: 'Get in touch to discuss your web design project.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
