// SOLID: Single Responsibility Principle - Card component only handles card rendering

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 overflow-hidden transition-shadow hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
