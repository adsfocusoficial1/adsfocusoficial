import { useCountUp } from '@/hooks/useScrollAnimations';

const metrics = [
  { value: 20, prefix: '', suffix: '+', label: 'Anos em TELECOM (OI · Claro · VTAL)' },
  { value: 24, prefix: '', suffix: '/7', label: 'Atendimento IA' },
  { value: 100, prefix: '', suffix: '%', label: 'Transparência' },
];

const MetricItem = ({ value, prefix, suffix, label }: { value: number; prefix: string; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-mono font-bold text-3xl lg:text-4xl text-primary">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Credibility = () => (
  <section className="section-dark py-12 lg:py-16 border-t border-b border-border">
    <div className="container mx-auto px-4">
      <p className="text-center text-sm lg:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
        Mais de 20 anos em telecom (OI · Claro · VTAL). Agora, essa experiência operacional a serviço do seu crescimento digital com tráfego pago e automação em IA.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {metrics.map((m) => (
          <MetricItem key={m.label} {...m} />
        ))}
      </div>
    </div>
  </section>
);

export default Credibility;
