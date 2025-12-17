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

  // Calculate card width: 100vw / 3.5 ≈ 28.57vw
  const cardWidthVw = 100 / 3.5; // ~28.57vw
  // gap-6 = 1.5rem = 24px, convert to vw for responsive calculation
  const gapPx = 24;
  const gapVw = windowWidth > 0 ? (gapPx / windowWidth) * 100 : 1.25;

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
  // Layout: [0.5 video (left half)] [full] [full] [full] [0.5 video (right half)]
  // We render triple reels array, starting from middle set
  // Starting position shows left half of first video in middle set
  const getTranslateX = () => {
    // Start from middle set (index = reels.length)
    const middleSetStart = reels.length;
    // Offset to show left half of first video: -0.5 video width
    const halfCardOffset = cardWidthVw / 2;
    // Calculate base position: start of middle set minus half video
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
      className="relative w-full min-h-[85vh] bg-[#c6b99a] overflow-hidden p-4 md:p-5 lg:p-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous reel"
      >
        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next reel"
      >
        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div 
        className="flex h-full min-h-[85vh] items-center gap-6"
        style={{
          transform: `translateX(${getTranslateX()}%)`,
          transition: 'transform 1000ms ease-in-out',
        }}
      >
        {extendedReels.map((reel, index) => {
          // Determine if this video is in the "active" center area (3 full videos visible)
          const middleSetStart = reels.length;
          // Visible range: middle set start - 0.5 to middle set start + 3.5 (3 full + 2 half)
          const visibleStart = middleSetStart + currentIndex - 1;
          const visibleEnd = middleSetStart + currentIndex + 3;
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
                className={`relative w-full h-[85vh] overflow-hidden rounded-lg transition-transform duration-700 ${
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {reels.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/75'
            }`}
            aria-label={`Go to reel ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
