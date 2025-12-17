'use client';

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type TeamMember = {
  id: string;
  name: string;
  title: string;
  title2: string;
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
      title2: t('about.member1.title2'),
      email: 'projekte@deca-online.de',
      image: '/assets/bilal.jpg',
    },
    {
      id: '2',
      name: t('about.member2.name'),
      title: t('about.member2.title'),
      title2: t('about.member2.title2'),
      email: 'projekte@deca-online.de',
      image: '/assets/derman.jpg',
    },
  ];

  return (
    <>
      {/* Hero Image Section with Title */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <img
          src="/assets/PHOTO-2025-11-30-14-48-45.jpg"
          alt={t('about.title')}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Gradient overlay for better text readability */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)' 
        }}></div>
        
        {/* Title on Hero */}
        <div style={{ 
          position: 'absolute', 
          bottom: '32px', 
          left: 0, 
          right: 0, 
          zIndex: 10,
          padding: '0 16px'
        }}>
          <h2 
            className="font-amoret"
            style={{ 
              fontSize: 'clamp(1.875rem, 5vw, 3rem)',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '-0.025em',
              color: 'white',
              textAlign: 'center',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            {t('about.title')}
          </h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Editorial Intro */}
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {/* First paragraph - normal text */}
            <p style={{ 
              fontSize: '1.05rem',
              lineHeight: '1.9',
              color: '#4a4a4a',
              marginBottom: '40px',
              fontWeight: '400'
            }}>
              {t('about.pageIntro1')}
            </p>

            {/* Highlighted statement - larger, medium weight */}
            <p style={{ 
              fontSize: '1.75rem',
              lineHeight: '1.4',
              color: '#1a1a1a',
              marginBottom: '40px',
              fontWeight: '500',
              letterSpacing: '-0.01em'
            }}>
              {t('about.pageHighlight')}
            </p>

            {/* Second paragraph - normal text */}
            <p style={{ 
              fontSize: '1.05rem',
              lineHeight: '1.9',
              color: '#4a4a4a',
              fontWeight: '400'
            }}>
              {t('about.pageIntro2')}
            </p>
          </div>
        </div>
      </section>

      {/* DIE GENERALPLANER Section - Image Right */}
      <section>
        <div className="generalplaner-grid">
          {/* Left - Text Content */}
          <div className="generalplaner-content generalplaner-section">
            <h2 className="font-amoret generalplaner-title">
              {t('about.generalplanerTitle1')}
              </h2>
            
            <p className="generalplaner-text">
                {t('about.generalplanerText')}
              </p>
          </div>

          {/* Right - Image */}
          <div className="generalplaner-image">
            <img
              src="/assets/PHOTO-2025-11-30-14-48-45-2.jpg"
              alt="Büro"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
          </div>
        </div>
      </section>

      {/* Spacer between sections */}
      <div style={{ height: '80px', backgroundColor: 'white' }}></div>

      {/* Second Section - Image Left */}
      <section>
        <div className="generalplaner-grid">
          {/* Left - Image */}
          <div className="generalplaner-image">
            <img
              src="/assets/projekt_4/PHOTO-2025-11-30-14-50-46 3.jpg"
              alt="Projekt"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
          </div>

          {/* Right - Text Content */}
          <div className="generalplaner-content generalplaner-section">
            <h2 className="font-amoret generalplaner-title">
              {t('about.generalplanerTitle2')}
            </h2>
            
            <p className="generalplaner-text" style={{ marginBottom: 0 }}>
                {t('about.generalplanerText2')}
              </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <h2 className="font-amoret team-title">
                {t('about.teamTitle')}
              </h2>
          <p className="team-subtitle">
                {t('about.teamSubtitle')}
              </p>

            {/* Team Members */}
          <div className="team-members">
              {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                    </div>
                <h3 className="font-amoret team-member-name">
                      {member.name}
                    </h3>
                <p className="team-member-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  {/* Mezuniyet/Diploma ikonu - Meslek */}
                  <svg style={{ width: '16px', height: '16px', color: '#8B7355' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                      {member.title}
                    </p>
                <p className="team-member-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>        
                  {/* Yıldız ikonu - Kurucu */}
                  <svg style={{ width: '16px', height: '16px', color: '#8B7355' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  {member.title2}
                </p>
                    {member.email && (
                  <a href={`mailto:${member.email}`} className="team-member-email" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                        {member.email}
                      </a>
                    )}
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
