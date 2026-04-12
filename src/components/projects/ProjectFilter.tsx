'use client';

import { motion } from 'framer-motion';
import { type ProjectCategory } from '@/data/projects';

interface ProjectFilterProps {
  categories: ProjectCategory[];
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
}

export default function ProjectFilter({
  categories,
  active,
  onChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 relative">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className="relative px-5 py-2.5 text-sm tracking-wide bg-transparent border-none"
          style={{ cursor: 'none' }}
          data-cursor-hover
        >
          {active === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full border"
              style={{
                backgroundColor: 'rgba(59,130,246,0.1)',
                borderColor: 'rgba(59,130,246,0.3)',
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            />
          )}
          <span
            className="relative transition-colors"
            style={{
              color: active === category ? '#e2e4e9' : '#6b6f7a',
              zIndex: 10,
            }}
          >
            {category}
          </span>
        </button>
      ))}
    </div>
  );
}
