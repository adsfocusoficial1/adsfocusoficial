import { WHATSAPP_LINK_CTA } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const CTAFinal = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contato"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, hsl(222 47% 7%) 0%, hsl(216 43% 22%) 60%, hsl(25 95% 53% / 0.12) 100%)' }}
    >
      <div className="container mx-auto px-4 text-center relative z-10" ref={ref}>
        <div className={`max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-5xl mb-6 text-foreground">
            Pronto para Transformar Cliques em Clientes?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Agende agora sua análise gratuita. Sem compromisso. Sem fidelidade. Só resultado.
          </p>
          <a
            href={WHATSAPP_LINK_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-cta text-xl px-12 py-5 whatsapp-pulse"
          >
            Falar com a ADSFOCUS →
          </a>
          <p className="text-xs text-muted-foreground mt-6">
            Resposta em até 2 horas em horário comercial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
