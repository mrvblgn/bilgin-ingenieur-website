// SOLID: Single Responsibility Principle - Service handles only project data operations
// SOLID: Dependency Inversion Principle - Uses interface for data access

import { Project } from '../types';

export interface IProjectRepository {
  getAll(): Project[];
  getByStatus(status: 'completed' | 'planning'): Project[];
  getById(id: string): Project | undefined;
  getPaginated(page: number, pageSize: number, status?: 'completed' | 'planning'): {
    projects: Project[];
    totalPages: number;
    currentPage: number;
    totalItems: number;
  };
}

export class ProjectService {
  constructor(private repository: IProjectRepository) {}

  getPaginatedProjects(page: number, pageSize: number, status?: 'completed' | 'planning') {
    return this.repository.getPaginated(page, pageSize, status);
  }

  getAllProjects(status?: 'completed' | 'planning') {
    if (status) {
      return this.repository.getByStatus(status);
    }
    return this.repository.getAll();
  }

  getProjectById(id: string): Project | undefined {
    return this.repository.getById(id);
  }
}
