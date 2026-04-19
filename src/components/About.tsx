import { useScrollReveal } from '@/hooks/useScrollAnimations';

const joaoBento = '/images/joao-bento.png';

const skills = ['Tráfego Pago', 'Inteligência Artificial', 'Automação', 'Estratégia Digital'];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(210 40% 98%)', color: 'hsl(217 33% 17%)' }}>
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl" style={{ color: 'hsl(217 33% 17%)' }}>
            A Mente por Trás da ADSFOCUS
          </h2>
        </div>

        <div className={`grid lg:grid-cols-[280px_1fr] gap-10 items-start ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
          <div className="flex justify-center">
            <div className="w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 bg-muted/20" style={{ borderColor: 'hsl(217 91% 60% / 0.4)' }}>
              <img
                src={joaoBento}
                alt="João Bento — Fundador da ADSFOCUS"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                style={{ imageRendering: 'auto' }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl" style={{ color: 'hsl(217 33% 17%)' }}>
              João Bento — Fundador e Estrategista-Chefe
            </h3>
            <p className="leading-relaxed" style={{ color: 'hsl(215 20% 35%)' }}>
              Mais de 20 anos de experiência nas maiores operadoras de telecomunicações do Brasil: OI, Claro e VTAL. Especialista em operações críticas de rede, gestão de equipes e indicadores. Essa bagagem de engenharia e operação é o que traz para a ADSFOCUS uma visão rara: unir a precisão técnica com a estratégia de crescimento digital.
            </p>
            <p className="leading-relaxed" style={{ color: 'hsl(215 20% 35%)' }}>
              Hoje, combina gestão de tráfego pago com desenvolvimento de agentes de IA e automação — criando soluções que geram resultados reais para empresas de pequeno e médio porte em todo o Brasil.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((s) => (
                <span key={s} className="text-xs font-medium px-4 py-1.5 rounded-full border" style={{ borderColor: 'hsl(217 91% 60% / 0.3)', color: 'hsl(217 91% 60%)', backgroundColor: 'hsl(217 91% 60% / 0.05)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
