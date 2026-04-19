import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { TrendingUp, Bot, MousePointerClick, ChevronRight } from 'lucide-react';

const trafegoItems = [
  'Meta Ads (Facebook + Instagram) — Campanhas segmentadas com criativos que convertem',
  'Google Ads (Search + Display) — Apareça para quem busca seu serviço agora',
  'Google Meu Negócio (GBP) — Domine as buscas locais e o Google Maps',
  'Relatórios transparentes — CPL, CPC, ROAS, tudo aberto e claro',
  'Otimização contínua — Testes A/B, ajuste de público, criativos e lances',
];

const iaItems = [
  'Agentes de IA para WhatsApp — Atendimento automático com catálogo, preços e qualificação',
  'SDR Virtual — Seu vendedor digital que nunca dorme e nunca esquece de fazer follow-up',
  'RAG Inteligente — IA que consulta seus PDFs, catálogos e planilhas em tempo real',
  'Automação de Processos (N8N) — Integrações com CRM, Google Sheets, e-commerce',
  'Chatbots para site e redes sociais — Captação de leads automatizada',
];

const landingItems = [
  'Copy estratégica — Headlines e ofertas construídas para converter, não só para informar',
  'Design focado em ação — CTA evidente, hierarquia visual clara, zero distração',
  'Mobile-first — 80% do tráfego pago chega pelo celular; a página é pensada pra ele',
  'Integração com tráfego — Pixel, UTMs e eventos prontos para Meta e Google Ads',
  'Velocidade máxima — Carregamento rápido que não derruba sua taxa de conversão',
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="section-light py-20 lg:py-28" style={{ backgroundColor: 'hsl(210 40% 98%)', color: 'hsl(217 33% 17%)' }}>
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4" style={{ color: 'hsl(217 33% 17%)' }}>
            Três Forças. Um Objetivo.
          </h2>
          <p className="text-base lg:text-lg max-w-2xl mx-auto" style={{ color: 'hsl(215 20% 45%)' }}>
            Tráfego pago, landing pages de alta conversão e agentes de IA. Uma engrenagem pensada de ponta a ponta para gerar e converter clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tráfego Pago */}
          <div
            className={`rounded-2xl p-8 lg:p-10 border shadow-lg transition-all ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              animationDelay: '0.15s',
              backgroundColor: 'white',
              borderColor: 'hsl(214 32% 91%)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(25 95% 53% / 0.1)' }}>
                <TrendingUp className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl" style={{ color: 'hsl(217 33% 17%)' }}>Tráfego Pago Estratégico</h3>
            </div>
            <p className="mb-6" style={{ color: 'hsl(215 20% 45%)' }}>
              Campanhas que colocam seu negócio na frente de quem está comprando — agora.
            </p>
            <ul className="space-y-3">
              {trafegoItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(217 33% 30%)' }}>
                  <ChevronRight size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contato" className="inline-flex items-center gap-1 mt-8 text-sm font-semibold text-accent hover:underline">
              Saber mais →
            </a>
          </div>

          {/* Landing Pages */}
          <div
            className={`rounded-2xl p-8 lg:p-10 border shadow-lg transition-all ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              animationDelay: '0.3s',
              backgroundColor: 'white',
              borderColor: 'hsl(214 32% 91%)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(25 95% 53% / 0.1)' }}>
                <MousePointerClick className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl" style={{ color: 'hsl(217 33% 17%)' }}>Landing Pages de Alta Conversão</h3>
            </div>
            <p className="mb-6" style={{ color: 'hsl(215 20% 45%)' }}>
              Páginas criadas para converter visitantes em clientes. Copy estratégica, design focado em ação e integração com suas campanhas de tráfego pago.
            </p>
            <ul className="space-y-3">
              {landingItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(217 33% 30%)' }}>
                  <ChevronRight size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contato" className="inline-flex items-center gap-1 mt-8 text-sm font-semibold text-accent hover:underline">
              Saber mais →
            </a>
          </div>

          {/* IA */}
          <div
            className={`rounded-2xl p-8 lg:p-10 border shadow-lg transition-all ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{
              animationDelay: '0.45s',
              backgroundColor: 'white',
              borderColor: 'hsl(214 32% 91%)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(217 91% 60% / 0.1)' }}>
                <Bot className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl" style={{ color: 'hsl(217 33% 17%)' }}>Automação & Agentes de IA</h3>
            </div>
            <p className="mb-6" style={{ color: 'hsl(215 20% 45%)' }}>
              Agentes inteligentes que trabalham 24h vendendo, qualificando e atendendo seus clientes.
            </p>
            <ul className="space-y-3">
              {iaItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(217 33% 30%)' }}>
                  <ChevronRight size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contato" className="inline-flex items-center gap-1 mt-8 text-sm font-semibold text-primary hover:underline">
              Saber mais →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
