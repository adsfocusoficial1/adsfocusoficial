import { useCountUp } from '@/hooks/useScrollAnimations';

const metrics = [
  { value: 20, suffix: '+', label: 'Anos de experiência' },
  { value: 3, suffix: '', label: 'Plataformas dominadas' },
  { value: 24, suffix: '/7', label: 'Atendimento IA' },
  { value: 100, suffix: '%', label: 'Transparência' },
];

const MetricItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-mono font-bold text-3xl lg:text-4xl text-primary">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Credibility = () => (
  <section className="section-dark py-12 lg:py-16 border-t border-b border-border">
    <div className="container mx-auto px-4">
      <p className="text-center text-sm lg:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
        Mais de 20 anos de experiência operacional. Agora, a serviço do seu crescimento digital.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {metrics.map((m) => (
          <MetricItem key={m.label} {...m} />
        ))}
      </div>
    </div>
  </section>
);

export default Credibility;
