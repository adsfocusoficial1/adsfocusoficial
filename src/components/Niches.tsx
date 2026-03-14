import { useScrollReveal } from '@/hooks/useScrollAnimations';

const niches = [
  { icon: '🌐', name: 'Provedores de Internet', desc: 'Captar mais assinantes com menor custo' },
  { icon: '🏗️', name: 'Reformas de Alto Padrão', desc: 'Orçamentos de clientes premium' },
  { icon: '🪟', name: 'Esquadrias de Alumínio', desc: 'Contatos qualificados de construtoras e arquitetos' },
  { icon: '🏠', name: 'Imobiliárias', desc: 'Vender e alugar mais rápido' },
  { icon: '🍕', name: 'Delivery e Restaurantes', desc: 'Mais pedidos, maior faturamento' },
  { icon: '🛋️', name: 'Limpeza Especializada', desc: 'Agenda lotada todo mês' },
  { icon: '🧵', name: 'Lojas de Tecidos', desc: 'Catálogo inteligente no WhatsApp' },
  { icon: '💼', name: 'Outros PMEs', desc: 'Soluções sob medida para seu negócio' },
];

const Niches = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="nichos" className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4">
            Especialistas nos Desafios do Seu Segmento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conhecemos profundamente o público, a sazonalidade e o comportamento de cada nicho.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {niches.map((n, i) => (
            <div
              key={n.name}
              className={`glass-card p-6 text-center group card-hover cursor-default ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.05 * (i + 1)}s` }}
            >
              <div className="text-3xl mb-3">{n.icon}</div>
              <h3 className="font-heading font-bold text-sm mb-2">{n.name}</h3>
              <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {n.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Niches;
