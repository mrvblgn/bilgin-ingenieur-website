'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
  email?: string;
};

export default function AboutContactSection() {
  const { t } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: t('about.member1.name'),
      title: t('about.member1.title'),
      email: 'projekte@deca-online.de',
      image: '/assets/bilal.jpg',
    },
    {
      id: '2',
      name: t('about.member2.name'),
      title: t('about.member2.title'),
      email: 'projekte@deca-online.de',
      image: '/assets/derman.jpg',
    },
  ];

  return (
    <>
      {/* Hero Image Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="/assets/PHOTO-2025-11-30-14-48-45.jpg"
          alt={t('about.title')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-black font-amoret uppercase tracking-tight">
              {t('about.title')}
            </h1>

            {/* First Paragraph */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
              {t('about.pageIntro1')}
            </p>

            {/* Second Paragraph */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-16 normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
              {t('about.pageIntro2')}
            </p>

            {/* DIE GENERALPLANER Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black font-amoret uppercase tracking-tight">
                {t('about.generalplanerTitle')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
                {t('about.generalplanerText')}
              </p>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
                {t('about.generalplanerText2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-black font-amoret uppercase tracking-tight">
                {t('about.teamTitle')}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
                {t('about.teamSubtitle')}
              </p>
            </div>

            {/* Team Members */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 justify-center items-start">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center md:items-start gap-6 flex-1 max-w-sm"
                >
                  {/* Circular Image */}
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-md border-2 border-gray-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-black">
                      {member.name}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 mb-2 normal-case" style={{ textTransform: 'none', fontVariant: 'normal' }}>
                      {member.title}
                    </p>
                    {member.email && (
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-sm md:text-base text-gray-600 hover:text-black hover:underline transition-colors normal-case" 
                        style={{ textTransform: 'none', fontVariant: 'normal' }}
                      >
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
