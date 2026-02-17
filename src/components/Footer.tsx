import logoLight from '@/assets/logo-light.png';

const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'IA em Ação', href: '#ia-em-acao' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const Footer = () => (
  <footer className="py-12 lg:py-16" style={{ backgroundColor: 'hsl(222 50% 5%)' }}>
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img src={logoLight} alt="ADSFOCUS" className="h-10 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Inovação que Conecta e Converte. Estratégia de tráfego pago e automação com inteligência artificial para PMEs em todo o Brasil.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 text-foreground">Navegação</h4>
          <nav className="space-y-2" aria-label="Footer">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 text-foreground">Contato</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📱 (11) 9-1576-5432</p>
            <p>📧 contato@adsfocus.com.br</p>
            <p>🌐 adsfocus.com.br</p>
            <p>📸 @adsfocusoficial</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 ADSFOCUS — Todos os direitos reservados</p>
        <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a>
      </div>
    </div>
  </footer>
);

export default Footer;
