import { ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

const LegalLayout = ({ title, updatedAt, children }: Props) => {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} — ADSFOCUS`;
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, [title]);

  return (
    <main>
      <Header />
      <article className="section-dark min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <header className="mb-10 pb-8 border-b border-border">
            <h1 className="font-heading font-extrabold text-3xl lg:text-5xl text-foreground mb-3">
              {title}
            </h1>
            <p className="text-sm text-muted-foreground">Última atualização: {updatedAt}</p>
          </header>

          <div className="legal-prose space-y-6 text-foreground/85 leading-relaxed">
            {children}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <a href="/" className="text-sm text-primary hover:underline">
              ← Voltar para a página inicial
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default LegalLayout;
