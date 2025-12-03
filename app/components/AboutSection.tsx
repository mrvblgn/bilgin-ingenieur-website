interface AboutCardProps {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  position: string;
}

function AboutCard({ title, subtitle, description, author, position }: AboutCardProps) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-light text-black dark:text-white mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 italic mb-6">
        {subtitle}
      </p>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
        {description}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        {author} – {position}
      </p>
    </div>
  );
}

export default function AboutSection() {
  const aboutCards: AboutCardProps[] = [
    {
      title: "Nesiller için evler tasarlıyoruz",
      subtitle: "Tasarımımız, nesiller boyunca dayanabilecek değerli mimariyi mümkün kılar ve böylece sürdürülebilirliği yeniden tanımlar.",
      description: "Yüksek kaliteli konut projelerinin gerçekleştirilmesine tutkuyla bağlıyız. Genel planlayıcı olarak, hayalinizdeki mülkü gerçekleştirmek için size kapsamlı ve ödün vermeyen bir hizmet sunuyoruz. İlk fikirden teslimata kadar sizi yanınızdayız ve tüm planlama sürecini kapsıyoruz.",
      author: "Örnek İsim",
      position: "Genel Müdür"
    },
    {
      title: "Kitzbüheler Köklerimizle Geleneği, En Modern Tekniklerle Birleştiriyoruz",
      subtitle: "Mülk geliştirmede en iyi sonuçların, geleneğin ve modernliğin uyumlu bir birleşimiyle elde edildiğine inanıyoruz.",
      description: "Bizim için estetik ve işlevsellik arasındaki mükemmel denge ön plandadır. Her proje, mimariye olan tutkumuzun ve en yüksek kaliteye olan bağlılığımızın bir kanıtıdır. Birlikte vizyonunuzu gerçekleştirelim ve olağanüstü yaşam alanları yaratalım.",
      author: "Örnek İsim 2",
      position: "Genel Müdür"
    }
  ];

  return (
    <section id="hakkimizda" className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto max-w-6xl space-y-24">
        {aboutCards.map((card, index) => (
          <div key={index} className="flex justify-center">
            <AboutCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
}

