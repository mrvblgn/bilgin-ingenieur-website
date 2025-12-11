'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ProjectService } from '../../services/ProjectService';
import { ProjectRepository } from '../../repositories/ProjectRepository';
import { useLanguage } from '../../contexts/LanguageContext';

const projectService = new ProjectService(new ProjectRepository());

export default function ProjectDetailPage() {
  const params = useParams();
  const { t } = useLanguage();
  const projectId = params?.id as string;
  
  const project = projectService.getProjectById(projectId);

  if (!project) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Projekt nicht gefunden</h1>
              <p className="text-gray-600">Das angeforderte Projekt konnte nicht gefunden werden.</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const images = project.images || (project.imageUrl ? [project.imageUrl] : []);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Cover Image */}
      {project.imageUrl && (
        <section className="relative w-full h-screen overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </section>
      )}
      
      {/* Project Header */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black font-amoret uppercase tracking-tight" style={{ color: '#8B7355', textAlign: 'center' }}>
              {project.title}
            </h2>
            <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section id="project-images-gallery" className="bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {images.map((imageUrl, index) => (
              <div key={index} className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`${project.title} - Bild ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
