'use client';

import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import SplitText from '@/components/ui/SplitText';
import AnimatedText from '@/components/ui/AnimatedText';
import ContactForm from '@/components/contact/ContactForm';
import Footer from '@/components/layout/Footer';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function ContactPageContent() {
  return (
    <>
      <section className="min-h-screen pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Info */}
            <div>
              <h1
                className="text-[clamp(2.5rem,5vw,5rem)] font-bold mb-8 leading-[1.1]"
                style={{ fontFamily: 'var(--font-display)', color: '#e2e4e9' }}
              >
                <SplitText>Let&apos;s talk.</SplitText>
              </h1>

              <AnimatedText delay={0.3}>
                <p
                  className="text-lg leading-relaxed mb-12 max-w-md"
                  style={{ color: '#6b6f7a' }}
                >
                  Tell me about your business and what you&apos;re looking for.
                  I&apos;ll get back to you within 24 hours.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.5}>
                <div className="space-y-4">
                  <p style={{ color: '#e2e4e9' }}>hello@timothyngai.studio</p>
                  <div className="flex items-center gap-4 pt-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="transition-colors"
                        style={{ color: '#6b6f7a' }}
                        data-cursor-hover
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>

            {/* Right — Form */}
            <AnimatedText delay={0.3}>
              <ContactForm />
            </AnimatedText>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
