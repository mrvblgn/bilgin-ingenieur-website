'use client';

// SOLID: Single Responsibility Principle - ProjectsSection handles project display
// SOLID: Dependency Inversion Principle - Uses ProjectService interface

import React, { useState, useEffect } from 'react';
import { ProjectService } from '../services/ProjectService';
import { ProjectRepository } from '../repositories/ProjectRepository';
import Card from './ui/Card';
import Pagination from './ui/Pagination';
import { useLanguage } from '../contexts/LanguageContext';

const projectService = new ProjectService(new ProjectRepository());
const ITEMS_PER_PAGE = 6;

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [completedProjects, setCompletedProjects] = useState({
    projects: [] as any[],
    totalPages: 0,
    currentPage: 1,
    totalItems: 0,
  });
  
  const [planningProjects, setPlanningProjects] = useState({
    projects: [] as any[],
    totalPages: 0,
    currentPage: 1,
    totalItems: 0,
  });

  const loadCompletedProjects = (page: number) => {
    const result = projectService.getPaginatedProjects(page, ITEMS_PER_PAGE, 'completed');
    setCompletedProjects(result);
  };

  const loadPlanningProjects = (page: number) => {
    const result = projectService.getPaginatedProjects(page, ITEMS_PER_PAGE, 'planning');
    setPlanningProjects(result);
  };

  useEffect(() => {
    loadCompletedProjects(1);
    loadPlanningProjects(1);
  }, []);

  return (
    <>
      <section id="projects" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-black font-amoret uppercase tracking-tight">
            {t('projects.title')}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-black font-amoret uppercase tracking-wide">
            {t('projects.completed')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {completedProjects.projects.map((project) => (
              <Card key={project.id} className="cursor-pointer hover:shadow-xl transition-shadow bg-white">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Projektbild</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-black">{project.title}</h4>
                  <p className="text-gray-700 mb-3 leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>{project.description}</p>
                  {project.location && (
                    <p className="text-sm text-gray-500">{project.location}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {completedProjects.totalPages > 1 && (
            <Pagination
              currentPage={completedProjects.currentPage}
              totalPages={completedProjects.totalPages}
              onPageChange={loadCompletedProjects}
            />
          )}
        </div>
      </section>

      <section id="real-estate" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-black font-amoret uppercase tracking-wide">
            {t('projects.planning')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {planningProjects.projects.map((project) => (
              <Card key={project.id} className="cursor-pointer hover:shadow-xl transition-shadow bg-white">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Projektbild</span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-black">{project.title}</h4>
                  <p className="text-gray-700 mb-3 leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>{project.description}</p>
                  {project.location && (
                    <p className="text-sm text-gray-500">{project.location}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {planningProjects.totalPages > 1 && (
            <Pagination
              currentPage={planningProjects.currentPage}
              totalPages={planningProjects.totalPages}
              onPageChange={loadPlanningProjects}
            />
          )}
        </div>
      </section>
    </>
  );
}
