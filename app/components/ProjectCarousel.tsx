'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectService } from '../services/ProjectService';
import { ProjectRepository } from '../repositories/ProjectRepository';
import { useLanguage } from '../contexts/LanguageContext';

const projectService = new ProjectService(new ProjectRepository());

export default function ProjectCarousel() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1920);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = projectService.getAllProjects('completed');
  
  // Get localized project detail URL
  const getProjectDetailUrl = (projectId: string): string => {
    return language === 'DE' ? `/projekt/${projectId}` : `/proje/${projectId}`;
  };
  
  // Ensure we have enough projects for infinite loop (triple for seamless looping)
  const extendedProjects = [...projects, ...projects, ...projects];

  // Get window width for gap calculation
  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Determine if mobile (breakpoint at 768px)
  const isMobile = windowWidth < 768;
  
  // Calculate card width: mobile shows 1.2 cards (hint of next), desktop shows 3.5 cards
  const cardsVisible = isMobile ? 1.2 : 3.5;
  const cardWidthVw = 100 / cardsVisible;
  
  // gap: smaller on mobile (16px), larger on desktop (24px)
  const gapPx = isMobile ? 16 : 24;
  const gapVw = windowWidth > 0 ? (gapPx / windowWidth) * 100 : (isMobile ? 1.25 : 1.25);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (isPaused || projects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Move to next project with infinite loop
        return (prev + 1) % projects.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  // Calculate translateX in vw units
  // Mobile: Center the current card
  // Desktop: Layout: [0.5 card (left half)] [full] [full] [full] [0.5 card (right half)]
  const getTranslateX = () => {
    const middleSetStart = projects.length;
    const movePerStep = cardWidthVw + gapVw;
    
    if (isMobile) {
      // Mobile: Center the current card
      // Start from middle set, then center the first card (index 0)
      const basePosition = -(middleSetStart * movePerStep);
      // To center: move right by (50vw - cardWidthVw/2)
      const centerOffset = 50 - (cardWidthVw / 2);
      // Move based on currentIndex
      const currentMove = currentIndex * movePerStep;
      return basePosition + centerOffset - currentMove;
    } else {
      // Desktop: Show left half of first card in middle set
      const halfCardOffset = cardWidthVw / 2;
      const basePosition = -(middleSetStart * movePerStep) - halfCardOffset;
      const currentMove = currentIndex * movePerStep;
      return basePosition - currentMove;
    }
  };

  // Navigate functions
  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsPaused(false), 1000); // Resume after animation
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsPaused(false), 1000); // Resume after animation
  };

  return (
    <section 
      className="relative w-full min-h-[70vh] md:min-h-[85vh] bg-[#c6b99a] overflow-hidden px-2 md:px-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-2 text-white/80 hover:text-white active:text-white transition-colors touch-manipulation"
        aria-label="Previous project"
      >
        <svg className="w-8 h-8 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-2 text-white/80 hover:text-white active:text-white transition-colors touch-manipulation"
        aria-label="Next project"
      >
        <svg className="w-8 h-8 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="flex h-full min-h-[70vh] md:min-h-[85vh] items-center"
        style={{
          transform: `translateX(${getTranslateX()}vw)`,
          transition: 'transform 1000ms ease-in-out',
          gap: `${gapPx}px`,
        }}
      >
        {extendedProjects.map((project, index) => {
          // Determine if this card is in the "active" center area
          const middleSetStart = projects.length;
          // Mobile: show current + 1 on each side, Desktop: show 3 full + 2 half
          const visibleRange = isMobile ? 1 : 2;
          const visibleStart = middleSetStart + currentIndex - visibleRange;
          const visibleEnd = middleSetStart + currentIndex + visibleRange;
          const isInVisibleRange = index >= visibleStart && index <= visibleEnd;
          
          // Only prioritize images in the visible range
          const isPriority = isInVisibleRange && index >= middleSetStart && index < middleSetStart + projects.length;

          return (
            <Link
              key={`${project.id}-${index}`}
              href={getProjectDetailUrl(project.id)}
              className="flex-shrink-0 group"
              style={{
                width: `${cardWidthVw}vw`,
              }}
            >
              <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden rounded-lg md:rounded-none shadow-lg md:shadow-none">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={`${cardWidthVw}vw`}
                    priority={isPriority}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <span className="text-white">No Image</span>
                  </div>
                )}
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Title overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold font-amoret uppercase tracking-tight" style={{paddingLeft: '6px'}}>
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Optional: Dots indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsPaused(true);
              setCurrentIndex(index);
              setTimeout(() => setIsPaused(false), 1000);
            }}
            className={`rounded-full transition-all duration-300 touch-manipulation ${
              index === currentIndex 
                ? 'bg-white h-2.5 md:h-2 w-8 md:w-8' 
                : 'bg-white/50 h-2.5 md:h-2 w-2.5 md:w-2 hover:bg-white/75 active:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
