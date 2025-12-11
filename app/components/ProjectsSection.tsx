'use client';

// SOLID: Single Responsibility Principle - ProjectsSection handles project display
// SOLID: Dependency Inversion Principle - Uses ProjectService interface

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectService } from '../services/ProjectService';
import { ProjectRepository } from '../repositories/ProjectRepository';
import { useLanguage } from '../contexts/LanguageContext';

const projectService = new ProjectService(new ProjectRepository());

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [allProjects, setAllProjects] = useState<any[]>([]);

  useEffect(() => {
    const projects = projectService.getAllProjects();
    setAllProjects(projects);
  }, []);

  return (
    <>
      {/* Hero Cover Image */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/assets/projekt_4/PHOTO-2025-11-30-14-50-46 3.jpg"
          alt="Projects Cover"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </section>

      <section id="projects" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black font-amoret uppercase tracking-tight text-center" style={{ color: '#8B7355', textAlign: 'center' }}>
              {t('projects.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
            {allProjects.map((project) => (
              <Link key={project.id} href={`/projekt/${project.id}`} className="cursor-pointer hover:shadow-xl transition-shadow bg-white block">
                {/* Project Image */}
                <div className="w-full aspect-[4/5] overflow-hidden relative">
                  {project.imageUrl ? (
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Projektbild</span>
                    </div>
                  )}
                </div>
                {/* Project Content */}
                <div className="p-6">
                  {/* Subtitle - Location */}
                  {project.location && (
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide mb-2">
                      REGION {project.location.toUpperCase()} | {project.status === 'completed' ? 'CHALET' : 'PROJEKT'}
                    </p>
                  )}
                  {/* Title */}
                  <h4 className="text-2xl md:text-3xl font-bold mb-3 text-black font-amoret uppercase tracking-tight">
                    {project.title}
                  </h4>
                  {/* Description */}
                  <p className="text-base text-gray-700 leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
