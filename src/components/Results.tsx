import { useScrollReveal } from '@/hooks/useScrollAnimations';

const cards = [
  {
    icon: '🌐',
    title: 'Provedor de Internet Regional',
    items: [
      { label: 'Investimento em mídia', value: 'R$ 5.000/mês' },
      { label: 'Leads estimados', value: '120-250/mês' },
      { label: 'CPL projetado', value: 'R$ 20-60' },
      { label: 'Prazo de otimização', value: '2-3 meses' },
    ],
    diff: 'Campanhas segmentadas por bairro + agente IA qualificando leads 24h',
  },
  {
    icon: '🏗️',
    title: 'Reformas de Alto Padrão',
    items: [
      { label: 'Investimento em mídia', value: 'R$ 10.000/mês' },
      { label: 'Leads estimados', value: '80-200/mês' },
      { label: 'CPL projetado', value: 'R$ 60-150' },
      { label: 'Prazo de otimização', value: '3-4 meses' },
    ],
    diff: 'Criativos premium no Instagram + SDR virtual filtrando orçamentos qualificados',
  },
  {
    icon: '🧵',
    title: 'Loja de Tecidos Finos',
    badge: '🟢 CASE REAL EM ANDAMENTO',
    items: [
      { label: '', value: 'Agente "Sofia" ativo no WhatsApp' },
      { label: '', value: 'Identificação de tecidos por foto' },
      { label: '', value: 'Catálogo com preços em tempo real via RAG' },
      { label: '', value: 'Qualificação automática de leads' },
      { label: '', value: 'Atendimento 24h sem custo adicional' },
    ],
    diff: '',
  },
];

const Results = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="resultados" className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(210 40% 98%)', color: 'hsl(217 33% 17%)' }}>
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4" style={{ color: 'hsl(217 33% 17%)' }}>
            Resultados que Fazem Sentido para o Seu Bolso
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'hsl(215 20% 45%)' }}>
            Projeções realistas baseadas em benchmarks de mercado. Sem promessas vazias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-2xl p-6 lg:p-8 border shadow-md hover:shadow-xl transition-all ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${0.1 * (i + 1)}s`,
                backgroundColor: 'white',
                borderColor: card.badge ? 'hsl(142 70% 45% / 0.3)' : 'hsl(214 32% 91%)',
              }}
            >
              {card.badge && (
                <span className="inline-block text-xs font-mono px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 mb-4">
                  {card.badge}
                </span>
              )}
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-heading font-bold text-lg mb-4" style={{ color: 'hsl(217 33% 17%)' }}>{card.title}</h3>
              <div className="space-y-2.5">
                {card.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-center text-sm">
                    {item.label ? (
                      <>
                        <span style={{ color: 'hsl(215 20% 45%)' }}>{item.label}</span>
                        <span className="font-mono font-semibold" style={{ color: 'hsl(217 33% 17%)' }}>{item.value}</span>
                      </>
                    ) : (
                      <span style={{ color: 'hsl(217 33% 25%)' }}>✓ {item.value}</span>
                    )}
                  </div>
                ))}
              </div>
              {card.diff && (
                <div className="mt-6 pt-4 border-t" style={{ borderColor: 'hsl(214 32% 91%)' }}>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Diferencial ADSFOCUS</span>
                  <p className="text-sm mt-1" style={{ color: 'hsl(215 20% 45%)' }}>{card.diff}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs italic text-center mt-8 max-w-3xl mx-auto" style={{ color: 'hsl(215 20% 55%)' }}>
          *Projeções baseadas em benchmarks de mercado (HubSpot, RD Station) e experiência operacional. Resultados variam conforme investimento, concorrência, qualidade da oferta e sazonalidade.
        </p>
      </div>
    </section>
  );
};

export default Results;
