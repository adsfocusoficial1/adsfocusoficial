import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { Search, Map, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico Gratuito',
    desc: 'Analisamos seu negócio, concorrência, presença digital e oportunidades. Sem custo, sem compromisso.',
  },
  {
    icon: Map,
    title: 'Estratégia Personalizada',
    desc: 'Montamos o plano ideal: canais de anúncio, orçamento, criativos, e quais automações de IA implementar.',
  },
  {
    icon: Rocket,
    title: 'Execução e Otimização',
    desc: 'Campanhas no ar + agentes de IA funcionando. Otimizamos semanalmente com base em dados reais.',
  },
  {
    icon: TrendingUp,
    title: 'Escala com Dados',
    desc: 'Relatórios claros, reuniões de acompanhamento e escala do que funciona. Você acompanha tudo.',
  },
];

const Process = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="como-funciona" className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(210 40% 98%)', color: 'hsl(217 33% 17%)' }}>
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4" style={{ color: 'hsl(217 33% 17%)' }}>
            Do Diagnóstico ao Resultado
          </h2>
          <p style={{ color: 'hsl(215 20% 45%)' }}>Um processo claro e transparente em 4 etapas.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed" style={{ borderColor: 'hsl(217 91% 60% / 0.3)' }} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`text-center relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 relative z-10" style={{ backgroundColor: 'hsl(217 91% 60% / 0.1)', border: '2px solid hsl(217 91% 60% / 0.2)' }}>
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="font-mono text-xs text-primary mb-2">Etapa {i + 1}</div>
                <h3 className="font-heading font-bold text-base mb-2" style={{ color: 'hsl(217 33% 17%)' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(215 20% 45%)' }}>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
