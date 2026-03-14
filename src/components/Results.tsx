import { useScrollReveal } from '@/hooks/useScrollAnimations';

const cards = [
  {
    icon: '🌐',
    title: 'Provedores de Internet',
    items: [
      'Campanhas segmentadas por bairro e região',
      'Mais assinantes com menor custo de aquisição',
      'Agente de IA qualificando interessados 24h',
      'Otimização contínua para escalar resultados',
    ],
  },
  {
    icon: '🏗️',
    title: 'Reformas de Alto Padrão',
    items: [
      'Criativos premium para atrair clientes qualificados',
      'Filtro automático de orçamentos pelo WhatsApp',
      'Presença forte no Google para buscas locais',
      'Agenda cheia com clientes do perfil certo',
    ],
  },
  {
    icon: '🧵',
    title: 'Lojas e E-commerces',
    items: [
      'Atendimento automático com catálogo no WhatsApp',
      'Identificação de produtos por foto com IA',
      'Respostas instantâneas sobre preços e disponibilidade',
      'Vendas acontecendo 24h sem equipe adicional',
    ],
  },
];

const Results = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="resultados" className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(210 40% 98%)', color: 'hsl(217 33% 17%)' }}>
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4" style={{ color: 'hsl(217 33% 17%)' }}>
            Resultados Reais para o Seu Negócio
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'hsl(215 20% 45%)' }}>
            Estratégias sob medida para cada segmento. Veja como podemos ajudar o seu.
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
                borderColor: 'hsl(214 32% 91%)',
              }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-heading font-bold text-lg mb-4" style={{ color: 'hsl(217 33% 17%)' }}>{card.title}</h3>
              <div className="space-y-2.5">
                {card.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-0.5">✓</span>
                    <span style={{ color: 'hsl(217 33% 25%)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
