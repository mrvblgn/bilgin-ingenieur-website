interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl?: string;
}

interface ProjectGridProps {
  title: string;
  projects: Project[];
}

function ProjectGrid({ title, projects }: ProjectGridProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-light text-black dark:text-white mb-8 uppercase tracking-wider">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="aspect-square bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <div className="text-center p-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2 uppercase">
                {project.category}
              </p>
              <p className="text-lg text-black dark:text-white font-medium">
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const completedProjects: Project[] = [
    { id: '1', title: 'Proje 1', category: 'Tamamlanan' },
    { id: '2', title: 'Proje 2', category: 'Tamamlanan' },
    { id: '3', title: 'Proje 3', category: 'Tamamlanan' },
  ];

  const plannedProjects: Project[] = [
    { id: '4', title: 'Proje 4', category: 'Planlanan' },
    { id: '5', title: 'Proje 5', category: 'Planlanan' },
    { id: '6', title: 'Proje 6', category: 'Planlanan' },
  ];

  return (
    <section id="referanslar" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto max-w-6xl">
        <ProjectGrid title="Tamamlanan Projeler" projects={completedProjects} />
        <ProjectGrid title="Planlanan Projeler" projects={plannedProjects} />
      </div>
    </section>
  );
}

