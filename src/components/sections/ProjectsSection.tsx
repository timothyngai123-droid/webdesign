'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplitText from '../ui/SplitText';
import ProjectFilter from '../projects/ProjectFilter';
import ProjectCard from '../projects/ProjectCard';
import { projects, categories, type ProjectCategory } from '@/data/projects';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-32 lg:py-40" id="projects">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2
          className="text-[clamp(2rem,4vw,4rem)] font-bold mb-12"
          style={{ fontFamily: 'var(--font-display)', color: '#e2e4e9' }}
        >
          <SplitText>Selected Work</SplitText>
        </h2>

        <ProjectFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
