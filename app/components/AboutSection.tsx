'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      id: '1',
      name: 'Christoph Gwercher',
      quote: t('about.member1.quote'),
      description: t('about.member1.description'),
      role: t('about.member1.role'),
    },
    {
      id: '2',
      name: 'Markus Millinger',
      quote: t('about.member2.quote'),
      description: t('about.member2.description'),
      role: t('about.member2.role'),
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`mb-16 md:mb-24 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} flex flex-col md:flex-row gap-8 items-center`}
            >
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {member.quote}
                </h2>
                <p className="text-gray-600 italic mb-6 text-lg">
                  {member.description.split('.')[0]}.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {member.description}
                </p>
                <p className="text-sm text-gray-500 mt-6">
                  {member.name} – {member.role}
                </p>
              </div>
              <div className="flex-1 w-full h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">{member.name} resmi</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
