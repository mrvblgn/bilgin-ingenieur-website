// SOLID: Single Responsibility Principle - Repository handles data storage/retrieval
// SOLID: Dependency Inversion Principle - Implements IProjectRepository interface

import { Project } from '../types';
import { IProjectRepository } from '../services/ProjectService';

export class ProjectRepository implements IProjectRepository {
  private projects: Project[] = [
    {
      id: '1',
      title: 'EINFAMILIENHAUS',
      description: 'Repräsentatives Luxus-Chalet der Superlative.',
      status: 'completed',
      location: 'Kitzbühel',
      imageUrl: '/assets/projekt_1/PHOTO-2025-11-30-14-50-02 2.jpg',
      images: [
        '/assets/projekt_1/PHOTO-2025-11-30-14-50-01.jpg',
        '/assets/projekt_1/PHOTO-2025-11-30-14-50-01 2.jpg',
        '/assets/projekt_1/PHOTO-2025-11-30-14-50-01 3.jpg',
        '/assets/projekt_1/PHOTO-2025-11-30-14-50-02.jpg',
        '/assets/projekt_1/PHOTO-2025-11-30-14-50-02 2.jpg',
        '/assets/projekt_1/PHOTO-2025-11-30-14-50-02 3.jpg',
        '/assets/projekt_1/PHOTO-2025-11-30-14-50-02 4.jpg',
      ],
    },
    {
      id: '2',
      title: 'EINFAMILIENHAUS',
      description: 'Modernes Wohnhaus mit zeitgemäßem Design und nachhaltigen Materialien.',
      status: 'completed',
      location: 'Bayern',
      imageUrl: '/assets/projekt_2/PHOTO-2025-11-30-14-50-15 8.jpg',
      images: [
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-15.jpg',
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-15 2.jpg',
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-15 3.jpg',
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-15 4.jpg',
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-15 5.jpg',
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-15 6.jpg',
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-15 7.jpg',
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-15 8.jpg',
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-15 9.jpg',
        '/assets/projekt_2/PHOTO-2025-11-30-14-50-16.jpg',
      ],
    },
    {
      id: '3',
      title: 'EINFAMILIENHAUS',
      description: 'Hochwertige Residenz mit traditioneller Architektur und modernem Komfort.',
      status: 'completed',
      location: 'Kitzbühel',
      imageUrl: '/assets/projekt_3/PHOTO-2025-11-30-14-50-31 5.jpg',
      images: [
        '/assets/projekt_3/PHOTO-2025-11-30-14-50-30.jpg',
        '/assets/projekt_3/PHOTO-2025-11-30-14-50-30 2.jpg',
        '/assets/projekt_3/PHOTO-2025-11-30-14-50-31.jpg',
        '/assets/projekt_3/PHOTO-2025-11-30-14-50-31 2.jpg',
        '/assets/projekt_3/PHOTO-2025-11-30-14-50-31 3.jpg',
        '/assets/projekt_3/PHOTO-2025-11-30-14-50-31 4.jpg',
        '/assets/projekt_3/PHOTO-2025-11-30-14-50-31 5.jpg',
        '/assets/projekt_3/PHOTO-2025-11-30-14-50-31 6.jpg',
      ],
    },
    {
      id: '4',
      title: 'MEHRFAMILIENHAUS',
      description: 'Zeitgemäßes Design mit nachhaltigen Materialien und innovativen Lösungen.',
      status: 'completed',
      location: 'Kitzbühel',
      imageUrl: '/assets/projekt_4/PHOTO-2025-11-30-14-50-46.jpg',
      images: [
        '/assets/projekt_4/PHOTO-2025-11-30-14-50-46.jpg',
        '/assets/projekt_4/PHOTO-2025-11-30-14-50-46 2.jpg',
        '/assets/projekt_4/PHOTO-2025-11-30-14-50-46 3.jpg',
        '/assets/projekt_4/PHOTO-2025-11-30-14-50-46 4.jpg',
        '/assets/projekt_4/PHOTO-2025-11-30-14-50-46 5.jpg',
        '/assets/projekt_4/PHOTO-2025-11-30-14-50-46 6.jpg',
        '/assets/projekt_4/PHOTO-2025-11-30-14-50-46 7.jpg',
        '/assets/projekt_4/PHOTO-2025-11-30-14-50-47.jpg',
        '/assets/projekt_4/PHOTO-2025-11-30-14-50-47 2.jpg',
      ],
    },
    {
      id: '5',
      title: 'CHALET PROJEKT ALPHA',
      description: 'Neues Chalet-Projekt in Planung mit atemberaubendem Alpenblick.',
      status: 'planning',
      location: 'Kitzbühel',
      imageUrl: '/assets/projekt_5/PHOTO-2025-11-30-14-51-03.jpg',
      images: [
        '/assets/projekt_5/PHOTO-2025-11-30-14-51-03.jpg',
        '/assets/projekt_5/PHOTO-2025-11-30-14-51-03 2.jpg',
        '/assets/projekt_5/PHOTO-2025-11-30-14-51-03 3.jpg',
        '/assets/projekt_5/PHOTO-2025-11-30-14-51-03 4.jpg',
        '/assets/projekt_5/PHOTO-2025-11-30-14-51-04.jpg',
      ],
    },
    {
      id: '6',
      title: 'VILLA PROJEKT BETA',
      description: 'Luxuriöse Villa in Entwicklung mit exklusivem Seeblick.',
      status: 'planning',
      location: 'Bayern',
      imageUrl: '/assets/projekt_6/1_page-0001.jpg',
      images: [
        '/assets/projekt_6/1_page-0001.jpg',
        '/assets/projekt_6/2_page-0001.jpg',
        '/assets/projekt_6/3_page-0001.jpg',
        '/assets/projekt_6/4_page-0001.jpg',
        '/assets/projekt_6/BV_Arslan_26.08.2025_Alte Version-Model_page-0001.jpg',
      ],
    },
    {
      id: '7',
      title: 'RESIDENZ PROJEKT GAMMA',
      description: 'Exklusive Residenz in Planung mit hochwertiger Architektur.',
      status: 'planning',
      location: 'Kitzbühel',
      imageUrl: '/assets/projekt_7/PHOTO-2025-11-30-14-51-45.jpg',
      images: [
        '/assets/projekt_7/PHOTO-2025-11-30-14-51-45.jpg',
        '/assets/projekt_7/PHOTO-2025-11-30-14-51-45 2.jpg',
      ],
    },
  ];

  getById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getAll(): Project[] {
    return [...this.projects];
  }

  getByStatus(status: 'completed' | 'planning'): Project[] {
    return this.projects.filter(project => project.status === status);
  }

  getPaginated(page: number, pageSize: number, status?: 'completed' | 'planning'): {
    projects: Project[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
  } {
    let filteredProjects = status 
      ? this.getByStatus(status)
      : this.getAll();

    const totalItems = filteredProjects.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    return {
      projects: paginatedProjects,
      totalPages,
      currentPage: page,
      totalItems,
    };
  }
}
