'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectService } from '../services/ProjectService';
import { ProjectRepository } from '../repositories/ProjectRepository';

const projectService = new ProjectService(new ProjectRepository());

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1920);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = projectService.getAllProjects('completed');
  
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

  // Calculate card width: 100vw / 3.5 ≈ 28.57vw
  const cardWidthVw = 100 / 3.5; // ~28.57vw
  // gap-6 = 1.5rem = 24px, convert to vw for responsive calculation
  const gapPx = 24;
  const gapVw = windowWidth > 0 ? (gapPx / windowWidth) * 100 : 1.25;

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
  // Layout: [0.5 card (left half)] [full] [full] [full] [0.5 card (right half)]
  // We render triple projects array, starting from middle set
  // Starting position shows left half of first card in middle set
  const getTranslateX = () => {
    // Start from middle set (index = projects.length)
    const middleSetStart = projects.length;
    // Offset to show left half of first card: -0.5 card width
    const halfCardOffset = cardWidthVw / 2;
    // Calculate base position: start of middle set minus half card
    const basePosition = -(middleSetStart * (cardWidthVw + gapVw)) - halfCardOffset;
    // Add movement based on currentIndex
    const movePerStep = cardWidthVw + gapVw;
    const currentMove = currentIndex * movePerStep;
    // Total: base position minus current movement
    return basePosition - currentMove;
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
      className="relative w-full min-h-[85vh] bg-[#c6b99a] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous project"
      >
        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next project"
      >
        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="flex h-full min-h-[85vh] items-center gap-6"
        style={{
          transform: `translateX(${getTranslateX()}%)`,
          transition: 'transform 1000ms ease-in-out',
        }}
      >
        {extendedProjects.map((project, index) => {
          // Determine if this card is in the "active" center area (3 full cards visible)
          const middleSetStart = projects.length;
          // Visible range: middle set start - 0.5 to middle set start + 3.5 (3 full + 2 half)
          const visibleStart = middleSetStart + currentIndex - 1;
          const visibleEnd = middleSetStart + currentIndex + 3;
          const isInVisibleRange = index >= visibleStart && index <= visibleEnd;
          
          // Only prioritize images in the visible range
          const isPriority = isInVisibleRange && index >= middleSetStart && index < middleSetStart + projects.length;

          return (
            <Link
              key={`${project.id}-${index}`}
              href={`/projekt/${project.id}`}
              className="flex-shrink-0 group"
              style={{
                width: `${cardWidthVw}vw`,
              }}
            >
              <div className="relative w-full h-[85vh] overflow-hidden">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
