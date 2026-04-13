'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { type Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Wrapper = project.href
    ? ({ children, ...props }: React.ComponentPropsWithoutRef<'a'> & { children: React.ReactNode }) => (
        <Link href={project.href!} {...props}>
          {children}
        </Link>
      )
    : 'div';

  return (
    <motion.div
      layout
      className="group relative"
      style={{ cursor: 'none' }}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      data-cursor-hover
    >
      <Wrapper className="block">
        {/* Image container */}
        <div
          className="relative overflow-hidden rounded-xl"
          style={{ aspectRatio: '16 / 10', backgroundColor: '#131518' }}
        >
          <Image
            src={project.image}
            alt={`${project.name} — ${project.subtitle}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading={index < 2 ? 'eager' : 'lazy'}
          />
          {/* Hover gradient overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
            }}
          />
        </div>

        {/* Content below image */}
        <div className="mt-5">
          <span
            className="text-xs uppercase tracking-[0.2em] mb-2 inline-block"
            style={{ color: '#3b82f6' }}
          >
            {project.categoryLabel}
          </span>
          <h3
            className="text-xl font-bold transition-transform duration-500 group-hover:-translate-y-1"
            style={{
              fontFamily: 'var(--font-display)',
              color: '#e2e4e9',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {project.name}
            <span className="font-normal" style={{ color: '#6b6f7a' }}>
              {' '}
              — {project.subtitle}
            </span>
          </h3>
          {/* Accent underline — grows on hover */}
          <div
            className="h-[2px] mt-2 transition-all duration-500 w-0 group-hover:w-full"
            style={{
              backgroundColor: '#3b82f6',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
          <p className="text-sm mt-3 leading-relaxed" style={{ color: '#6b6f7a' }}>
            {project.description}
          </p>
        </div>
      </Wrapper>
    </motion.div>
  );
}
