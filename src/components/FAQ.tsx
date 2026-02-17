import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Quanto custa contratar a ADSFOCUS?',
    a: 'Cada projeto é personalizado. O investimento em mídia (Google, Meta) é separado da nossa taxa de gestão. Trabalhamos com pacotes flexíveis para diferentes orçamentos. Agende uma análise gratuita e receba uma proposta sob medida.',
  },
  {
    q: 'Vocês garantem resultados exatos?',
    a: 'Nenhuma agência séria garante números absolutos — desconfie de quem promete. O que garantimos: estratégia comprovada, otimização contínua, total transparência, e se não gerarmos leads qualificados em 30 dias, você não paga a taxa de gestão.',
  },
  {
    q: 'O que é um agente de IA para WhatsApp?',
    a: 'É um atendente virtual inteligente, treinado com as informações reais do seu negócio — catálogo, preços, políticas, promoções. Ele responde clientes automaticamente pelo WhatsApp, envia preços, qualifica leads, identifica necessidades e direciona para a venda. Funciona 24 horas por dia.',
  },
  {
    q: 'Quanto tempo leva para ver resultados?',
    a: 'Campanhas de tráfego pago mostram primeiros leads em 1-2 semanas. A otimização plena acontece entre 60-90 dias. Agentes de IA ficam operacionais em 7-15 dias após aprovação do conteúdo.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim. Trabalhamos com contratos mensais, sem fidelidade e sem multa rescisória.',
  },
  {
    q: 'Atendem todo o Brasil?',
    a: 'Sim, 100% online. Nossos clientes estão em São Paulo, interior, Nordeste, Sul — tráfego pago e agentes de IA funcionam para qualquer localização.',
  },
  {
    q: 'Preciso ter site para contratar vocês?',
    a: 'Não necessariamente. Podemos trabalhar com landing pages dedicadas, Google Meu Negócio e WhatsApp como canais de conversão. Se precisar de site, também podemos ajudar.',
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-sm lg:text-base">{q}</span>
        <ChevronDown
          size={20}
          className={`text-muted-foreground shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-60 pb-5' : 'max-h-0'}`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl">Perguntas Frequentes</h2>
        </div>
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
