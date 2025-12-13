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
  const { t, language } = useLanguage();
  const [allProjects, setAllProjects] = useState<any[]>([]);

  useEffect(() => {
    const projects = projectService.getAllProjects();
    setAllProjects(projects);
  }, [language]);

  return (
    <>
      {/* Hero Cover Image with Title */}
      <section className="relative w-full h-screen overflow-hidden hero-section">
        <Image
          src="/assets/projekt_4/PHOTO-2025-11-30-14-50-46 3.jpg"
          alt="Projects Cover"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Title on Hero */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-amoret uppercase tracking-tight text-white text-center"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
              {t('projects.title')}
            </h2>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto" style={{ textTransform: 'none', fontVariant: 'normal' }}>
            {t('projects.subtitle')}
          </p>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {allProjects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projekt/${project.id}`} 
                className="group block bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl project-card"
              >
                {/* Project Image */}
                <div className="relative w-full aspect-[4/5] overflow-hidden project-card-image">
                  {project.imageUrl ? (
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">{t('projects.noImage')}</span>
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  {/* Location Tag */}
                  {project.location && (
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-3 font-medium">
                      {t('projects.region')} {project.location.toUpperCase()} | {project.status === 'completed' ? t('projects.chalet') : t('projects.projekt')}
                    </p>
                  )}

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-black font-amoret uppercase tracking-tight group-hover:text-[#8B7355] transition-colors duration-300">
                    {t(`projects.project${project.id}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 leading-relaxed line-clamp-2" style={{ textTransform: 'none' }}>
                    {t(`projects.project${project.id}.description`)}
                  </p>

                  {/* View More Arrow */}
                  <div className="mt-4 flex items-center text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium uppercase tracking-wide mr-2">
                      {t('projects.details')}
                    </span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
