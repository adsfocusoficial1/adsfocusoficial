import logoLight from '@/assets/adsfocus-logo-extenso-light.png';
import { Instagram, Phone, Mail, Globe } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/constants';

const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'IA em Ação', href: '#ia-em-acao' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const Footer = () => (
  <footer className="py-12 lg:py-16" style={{ backgroundColor: 'hsl(222 50% 5%)' }}>
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img
            src={logoLight}
            alt="ADSFOCUS"
            className="h-10 w-auto object-contain mb-4"
            style={{ objectPosition: 'left center' }}
            loading="lazy"
            decoding="async"
            width={240}
            height={40}
          />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Inovação que Conecta e Converte. Estratégia de tráfego pago e automação com inteligência artificial para PMEs em todo o Brasil.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://instagram.com/adsfocusoficial" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-heading font-bold text-sm mb-4 text-foreground">Navegação</h2>
          <nav className="space-y-2" aria-label="Footer">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="font-heading font-bold text-sm mb-4 text-foreground">Contato</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} />
              {PHONE_DISPLAY}
            </a>
            <a href="mailto:contato@adsfocus.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} />
              contato@adsfocus.com.br
            </a>
            <a href="https://adsfocus.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Globe size={16} />
              adsfocus.com.br
            </a>
            <a href="https://instagram.com/adsfocusoficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Instagram size={16} />
              @adsfocusoficial
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 ADSFOCUS — Todos os direitos reservados</p>
        <nav className="flex gap-5 text-xs" aria-label="Links legais">
          <a href="/politica-de-privacidade" className="text-muted-foreground hover:text-primary transition-colors">
            Política de Privacidade
          </a>
          <a href="/termos-de-uso" className="text-muted-foreground hover:text-primary transition-colors">
            Termos de Uso
          </a>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
