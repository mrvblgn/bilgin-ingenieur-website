interface Service {
  title: string;
}

interface ServiceCategoryProps {
  title: string;
  services: Service[];
}

function ServiceCategory({ title, services }: ServiceCategoryProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-light text-black dark:text-white mb-6 uppercase tracking-wider">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-zinc-700 dark:text-zinc-300 text-lg"
          >
            {service.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services: ServiceCategoryProps[] = [
    {
      title: "Hizmetlerimiz",
      services: [
        { title: "Proje Geliştirme" },
        { title: "Mimarlık" },
        { title: "İç Mimarlık" },
        { title: "Proje Yönetimi" }
      ]
    }
  ];

  return (
    <section id="hizmetler" className="py-20 px-4 bg-white dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        {services.map((category, index) => (
          <ServiceCategory key={index} {...category} />
        ))}
      </div>
    </section>
  );
}

