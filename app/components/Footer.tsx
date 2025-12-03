interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-medium text-black dark:text-white mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const footerSections: FooterSectionProps[] = [
    {
      title: 'Referanslar',
      links: [
        { label: 'Projeler', href: '#referanslar' },
      ]
    },
    {
      title: 'Hizmetler',
      links: [
        { label: 'Tüm Hizmetler', href: '#hizmetler' },
      ]
    },
    {
      title: 'Hakkımızda',
      links: [
        { label: 'Şirket', href: '#hakkimizda' },
      ]
    },
    {
      title: 'İletişim',
      links: [
        { label: 'Bize Ulaşın', href: '#iletisim' },
      ]
    }
  ];

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}
        </div>
        
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors mr-4">
              İmza
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
              Gizlilik
            </a>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} BİLGİN
          </p>
        </div>
      </div>
    </footer>
  );
}

