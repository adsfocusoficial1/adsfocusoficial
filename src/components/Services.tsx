import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { Search, MapPin, ShoppingBag, Instagram, MousePointerClick, Bot, Check } from 'lucide-react';

type Service = {
  icon: typeof Search;
  name: string;
  image: string;
  imageAlt: string;
  headline: string;
  bullets: string[];
};

const services: Service[] = [
  {
    icon: Search,
    name: 'Google Ads',
    image:
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pessoa pesquisando no Google pelo celular',
    headline: 'Seu Cliente Pesquisou. Seu Anúncio Apareceu. Vendeu.',
    bullets: [
      'Apareça no topo das buscas do Google',
      'Pague só quando clicarem no seu anúncio',
      'Campanhas otimizadas para conversão real',
    ],
  },
  {
    icon: MapPin,
    name: 'Google Meu Negócio',
    image:
      'https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Celular exibindo perfil de negócio no Google Maps com avaliações e direções',
    headline: '5 Estrelas no Google. Agenda Cheia Todo Mês.',
    bullets: [
      'Apareça no topo do Google Maps',
      'Gestão profissional de avaliações',
      'Mais chamadas e visitas diretas',
    ],
  },
  {
    icon: ShoppingBag,
    name: 'Google Merchant Center',
    image:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Carrinho de compras digital e etiquetas de produto',
    headline: 'Seus Produtos no Google Antes da Concorrência Chegar',
    bullets: [
      'Produtos aparecem nas buscas do Google',
      'Catálogo digital sempre atualizado',
      'Mais vendas com menos custo por clique',
    ],
  },
  {
    icon: Instagram,
    name: 'Meta Ads',
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Celular mostrando feed do Instagram',
    headline: 'Conquiste Clientes Todos os Dias no Instagram e Facebook',
    bullets: [
      'Anúncios que param o scroll e convertem',
      'Segmentação precisa do seu público ideal',
      'Criativos profissionais que geram resultado',
    ],
  },
  {
    icon: MousePointerClick,
    name: 'Landing Pages',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Mockup de landing page em desktop e mobile',
    headline: 'Páginas Que Transformam Visitantes em Clientes',
    bullets: [
      'Design focado em conversão',
      'Integrada com suas campanhas de tráfego',
      'Carregamento rápido em qualquer dispositivo',
    ],
  },
  {
    icon: Bot,
    name: 'Automação com IA',
    image:
      'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Atendimento automatizado por IA no celular',
    headline: 'Seu Negócio Vendendo e Atendendo 24h por Dia',
    bullets: [
      'Agente de IA atende e qualifica leads 24/7',
      'Integração com WhatsApp Business',
      'Você foca no negócio, a IA faz o resto',
    ],
  },
];

const ServiceCard = ({
  service,
  index,
  isVisible,
}: {
  service: Service;
  index: number;
  isVisible: boolean;
}) => {
  const Icon = service.icon;
  return (
    <article
      className={`service-card rounded-2xl bg-white border shadow-lg overflow-hidden flex flex-col ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
        borderColor: 'hsl(214 32% 91%)',
      }}
    >
      <div className="service-media relative h-48 overflow-hidden bg-gradient-to-br from-[#001F5B] to-[#0A3A8F]">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
          width={800}
          height={480}
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0, 31, 91, 0.55), rgba(0, 31, 91, 0.25))',
          }}
        />
        <div
          className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(255, 117, 0, 0.95)',
            boxShadow: '0 6px 20px rgba(255, 117, 0, 0.45)',
          }}
        >
          <Icon size={22} color="#001F5B" strokeWidth={2.4} />
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6 lg:p-7">
        <span
          className="text-xs font-heading font-bold uppercase tracking-[0.18em] mb-2"
          style={{ color: '#FF7500' }}
        >
          {service.name}
        </span>
        <h3
          className="service-headline font-heading font-extrabold text-lg lg:text-xl leading-tight mb-5"
          style={{ color: 'hsl(217 33% 17%)' }}
        >
          {service.headline}
        </h3>
        <ul className="space-y-2.5 flex-1">
          {service.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-sm"
              style={{ color: 'hsl(217 33% 30%)' }}
            >
              <Check
                size={16}
                className="mt-0.5 shrink-0"
                style={{ color: '#FF7500' }}
                strokeWidth={3}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="servicos"
      className="section-light py-20 lg:py-28"
      style={{ backgroundColor: 'hsl(210 40% 98%)', color: 'hsl(217 33% 17%)' }}
    >
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span
            className="inline-block text-xs uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: '#FF7500' }}
          >
            Nossos Serviços
          </span>
          <h2
            className="font-heading font-extrabold text-3xl lg:text-4xl mb-4"
            style={{ color: 'hsl(217 33% 17%)' }}
          >
            Tudo Que Seu Negócio Precisa Para Crescer
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: 'hsl(215 20% 45%)' }}
          >
            Seis frentes integradas de tráfego, conversão e automação — trabalhando juntas para gerar e converter clientes todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.headline} service={service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
