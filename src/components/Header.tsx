import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_LINK, CTA_PRIMARY_LABEL } from '@/lib/constants';
import logoLight from '@/assets/adsfocus-logo-horizontal-light.png';

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'IA em Ação', href: '#ia-em-acao' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <a href="#inicio" aria-label="ADSFOCUS - Início">
          <img
            src={logoLight}
            alt="ADSFOCUS"
            className="h-16 lg:h-20 w-auto object-contain"
            style={{ objectPosition: 'left center' }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={320}
            height={80}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-cta !px-6 !py-2.5 !text-sm"
          >
            {CTA_PRIMARY_LABEL} →
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-foreground p-2"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-background border-l border-border shadow-2xl animate-slide-in-right flex flex-col">
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileOpen(false)} aria-label="Fechar menu">
                <X size={24} className="text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-4" aria-label="Menu mobile">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-all font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-cta mt-4 !text-sm text-center"
                onClick={() => setMobileOpen(false)}
              >
                {CTA_PRIMARY_LABEL} →
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
