'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Reel {
  id: number;
  src: string;
}

export default function ProjectReelsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1920);
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Video reels array
  const reels: Reel[] = [
    { id: 1, src: '/reels/reels1.mp4' },
    { id: 2, src: '/reels/reels2.mp4' },
    { id: 3, src: '/reels/reels3.mp4' },
    { id: 4, src: '/reels/reels4.mp4' },
  ];

  // Ensure we have enough videos for infinite loop (triple for seamless looping)
  const extendedReels = [...reels, ...reels, ...reels];

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
    if (isPaused || reels.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Move to next video with infinite loop
        return (prev + 1) % reels.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, reels.length]);

  // Calculate translateX in vw units
  // Mobile: Center the current card
  // Desktop: Layout: [0.5 video (left half)] [full] [full] [full] [0.5 video (right half)]
  const getTranslateX = () => {
    const middleSetStart = reels.length;
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
      // Desktop: Show left half of first video in middle set
      const halfCardOffset = cardWidthVw / 2;
      const basePosition = -(middleSetStart * movePerStep) - halfCardOffset;
      const currentMove = currentIndex * movePerStep;
      return basePosition - currentMove;
    }
  };

  // Navigate functions
  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
    setTimeout(() => setIsPaused(false), 1000); // Resume after animation
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev + 1) % reels.length);
    setTimeout(() => setIsPaused(false), 1000); // Resume after animation
  };

  // Handle video hover - unmute on hover
  const handleVideoHover = (reelId: number, index: number) => {
    setHoveredVideoId(reelId);
    const videoKey = `${reelId}-${index}`;
    const video = videoRefs.current[videoKey];
    if (video) {
      video.muted = false;
    }
  };

  // Handle video leave - mute again
  const handleVideoLeave = (reelId: number, index: number) => {
    setHoveredVideoId(null);
    const videoKey = `${reelId}-${index}`;
    const video = videoRefs.current[videoKey];
    if (video) {
      video.muted = true;
    }
  };

  // Determine if video is in center (active) area
  const isVideoActive = (index: number) => {
    const middleSetStart = reels.length;
    const visibleStart = middleSetStart + currentIndex - 1;
    const visibleEnd = middleSetStart + currentIndex + 3;
    return index >= visibleStart && index <= visibleEnd;
  };

  return (
    <section 
      className="relative w-full min-h-[70vh] md:min-h-[85vh] bg-[#c6b99a] overflow-hidden p-4 md:p-5 lg:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-2 text-white/80 hover:text-white active:text-white transition-colors touch-manipulation"
        aria-label="Previous reel"
      >
        <svg className="w-8 h-8 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-2 text-white/80 hover:text-white active:text-white transition-colors touch-manipulation"
        aria-label="Next reel"
      >
        <svg className="w-8 h-8 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div 
        className="flex h-full min-h-[70vh] md:min-h-[85vh] items-center"
        style={{
          transform: `translateX(${getTranslateX()}vw)`,
          transition: 'transform 1000ms ease-in-out',
          gap: `${gapPx}px`,
        }}
      >
        {extendedReels.map((reel, index) => {
          // Determine if this video is in the "active" center area
          const middleSetStart = reels.length;
          // Mobile: show current + 1 on each side, Desktop: show 3 full + 2 half
          const visibleRange = isMobile ? 1 : 2;
          const visibleStart = middleSetStart + currentIndex - visibleRange;
          const visibleEnd = middleSetStart + currentIndex + visibleRange;
          const isInVisibleRange = index >= visibleStart && index <= visibleEnd;
          const isActive = isVideoActive(index);
          
          // Only prioritize videos in the visible range
          const isPriority = isInVisibleRange && index >= middleSetStart && index < middleSetStart + reels.length;

          return (
            <div
              key={`${reel.id}-${index}`}
              className="flex-shrink-0 group"
              style={{
                width: `${cardWidthVw}vw`,
              }}
              onMouseEnter={() => handleVideoHover(reel.id, index)}
              onMouseLeave={() => handleVideoLeave(reel.id, index)}
            >
              <div 
                className={`relative w-full h-[70vh] md:h-[85vh] overflow-hidden rounded-lg transition-transform duration-700 shadow-lg md:shadow-none ${
                  isActive ? 'scale-100' : 'scale-95'
                }`}
              >
                <video
                  ref={(el) => {
                    if (el) {
                      videoRefs.current[`${reel.id}-${index}`] = el;
                    }
                  }}
                  src={reel.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  preload={isPriority ? 'auto' : 'metadata'}
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional: Dots indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {reels.map((_, index) => (
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
            aria-label={`Go to reel ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
