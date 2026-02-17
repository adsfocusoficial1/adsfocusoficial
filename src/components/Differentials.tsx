import { useScrollReveal } from '@/hooks/useScrollAnimations';

const diffs = [
  { title: 'Transparência Radical', desc: 'Custos de mídia e taxa de gestão sempre separados. Você vê cada centavo investido.' },
  { title: 'Sem Fidelidade', desc: 'Contratos mensais. Sem multa, sem burocracia. Você fica porque vê resultado.' },
  { title: 'Tráfego + IA: A Combinação Rara', desc: 'Somos uma das poucas agências que domina as duas frentes e sabe integrá-las.' },
  { title: 'Agência Boutique', desc: 'Atendimento direto com quem executa. Você nunca fala com estagiário ou robô.' },
  { title: 'Decisão por Dados', desc: 'CPL, CAC, ROAS, taxa de conversão — tomamos decisões pelo que os números dizem.' },
  { title: 'Garantia de 30 Dias', desc: 'Se não gerarmos leads qualificados em 30 dias, você não paga a taxa de gestão.' },
];

const Differentials = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl">Por Que a ADSFOCUS?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diffs.map((d, i) => (
            <div
              key={d.title}
              className={`glass-card p-6 card-hover ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.08 * (i + 1)}s` }}
            >
              <h3 className="font-heading font-bold text-base mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
