'use client';

import React, { useState, useEffect, useCallback } from 'react';
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

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = project?.images || (project?.imageUrl ? [project.imageUrl] : []);

  // Open lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Navigate to previous image
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Navigate to next image
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, prevImage, nextImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

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
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-amoret uppercase tracking-tight page-title">
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
              <div 
                key={index} 
                className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={imageUrl}
                  alt={`${project.title} - Bild ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg 
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Schließen"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-10"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-10"
            aria-label="Nächstes Bild"
          >
            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Current Image */}
          <div 
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${project.title} - Bild ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white text-sm md:text-base font-medium tracking-wider">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
            {images.map((imageUrl, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 relative overflow-hidden rounded transition-all ${
                  index === currentImageIndex 
                    ? 'ring-2 ring-white opacity-100' 
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <Image
                  src={imageUrl}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
