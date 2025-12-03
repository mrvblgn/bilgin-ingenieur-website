export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-5xl md:text-7xl font-light text-black dark:text-white mb-6 leading-tight">
          İnovatif Mimari, Doğa ve Lüksü Birleştiren
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-3xl mx-auto">
          Kitzbüheler Alpleri ve Bavyera Göl Bölgesi'nde özel tasarım çözümleri ve lüks konut projeleri keşfedin.
        </p>
        <a
          href="#referanslar"
          className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-lg font-medium"
        >
          Projelerimizi Keşfedin
        </a>
      </div>
    </section>
  );
}

