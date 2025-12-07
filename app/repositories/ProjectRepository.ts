// SOLID: Single Responsibility Principle - Repository handles data storage/retrieval
// SOLID: Dependency Inversion Principle - Implements IProjectRepository interface

import { Project } from '../types';
import { IProjectRepository } from '../services/ProjectService';

export class ProjectRepository implements IProjectRepository {
  private projects: Project[] = [
    {
      id: '1',
      title: 'Luxuriöses Chalet in Kitzbühel',
      description: 'Modernes Chalet mit atemberaubendem Alpenblick',
      status: 'completed',
      location: 'Kitzbühel',
    },
    {
      id: '2',
      title: 'Villa am See',
      description: 'Exklusive Villa mit Seeblick in der bayrischen Seenregion',
      status: 'completed',
      location: 'Bayern',
    },
    {
      id: '3',
      title: 'Alpine Residenz',
      description: 'Hochwertige Residenz mit traditioneller Architektur',
      status: 'completed',
      location: 'Kitzbühel',
    },
    {
      id: '4',
      title: 'Modernes Wohnhaus',
      description: 'Zeitgemäßes Design mit nachhaltigen Materialien',
      status: 'completed',
      location: 'Kitzbühel',
    },
    {
      id: '5',
      title: 'Chalet Projekt Alpha',
      description: 'Neues Chalet-Projekt in Planung',
      status: 'planning',
      location: 'Kitzbühel',
    },
    {
      id: '6',
      title: 'Villa Projekt Beta',
      description: 'Luxuriöse Villa in Entwicklung',
      status: 'planning',
      location: 'Bayern',
    },
    {
      id: '7',
      title: 'Residenz Projekt Gamma',
      description: 'Exklusive Residenz in Planung',
      status: 'planning',
      location: 'Kitzbühel',
    },
    {
      id: '8',
      title: 'Wohnhaus Projekt Delta',
      description: 'Modernes Wohnhaus in Entwicklung',
      status: 'planning',
      location: 'Bayern',
    },
    {
      id: '9',
      title: 'Chalet Projekt Epsilon',
      description: 'Neues Chalet-Projekt',
      status: 'planning',
      location: 'Kitzbühel',
    },
  ];

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
