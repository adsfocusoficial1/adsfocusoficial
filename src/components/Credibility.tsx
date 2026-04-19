import { useCountUp } from '@/hooks/useScrollAnimations';
import { Radio, Target, FileCheck } from 'lucide-react';

const metrics = [
  {
    value: 20,
    prefix: '',
    suffix: '+',
    label: 'Anos em telecom',
    sub: 'Bagagem operacional',
    icon: Radio,
  },
  {
    value: 8,
    prefix: '',
    suffix: '',
    label: 'Nichos atendidos',
    sub: 'Expertise aplicada',
    icon: Target,
  },
  {
    value: 100,
    prefix: '',
    suffix: '%',
    label: 'Transparência',
    sub: 'Relatórios abertos',
    icon: FileCheck,
  },
];

type Metric = (typeof metrics)[number];

const MetricItem = ({ value, prefix, suffix, label, sub, icon: Icon }: Metric) => {
  const { count, ref } = useCountUp(value, 1500);
  return (
    <div
      ref={ref}
      className="group relative flex flex-col items-center text-center px-6 py-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-300"
    >
      <div
        className="mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
        style={{
          backgroundColor: 'rgba(255, 117, 0, 0.1)',
          border: '1px solid rgba(255, 117, 0, 0.2)',
        }}
      >
        <Icon size={24} style={{ color: '#FF7500' }} strokeWidth={2} />
      </div>
      <div
        className="font-mono font-extrabold text-5xl lg:text-6xl leading-none tracking-tight"
        style={{ color: '#FF7500' }}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-3 text-sm lg:text-base text-white font-heading font-bold uppercase tracking-wider">
        {label}
      </div>
      <div className="mt-1 text-xs text-white/50 uppercase tracking-wider">{sub}</div>
    </div>
  );
};

const Credibility = () => (
  <section className="section-dark py-16 lg:py-24 border-t border-b border-border relative overflow-hidden">
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-40"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(255, 117, 0, 0.08), transparent 60%)',
      }}
    />
    <div className="container mx-auto px-4 relative">
      <div className="text-center mb-10 lg:mb-14 max-w-3xl mx-auto">
        <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
          Autoridade &amp; Confiança
        </span>
        <p className="text-base lg:text-lg text-white/75 leading-relaxed">
          Mais de <strong className="text-white">20 anos de experiência em telecomunicações no Brasil</strong>. Essa bagagem operacional agora a serviço do seu crescimento digital com tráfego pago e automação em IA.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
        {metrics.map((m) => (
          <MetricItem key={m.label} {...m} />
        ))}
      </div>
    </div>
  </section>
);

export default Credibility;
