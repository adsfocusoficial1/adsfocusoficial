import { WHATSAPP_LINK } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const Hero = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden section-dark">
      <div className="hero-mesh absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 pt-24 pb-16 lg:pt-32 lg:pb-24 relative z-10">
        <div ref={ref} className={`grid lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center ${isVisible ? '' : 'opacity-0'}`}>
          {/* Text */}
          <div className="space-y-6 lg:space-y-8">
            <span
              className="inline-block font-mono text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary"
              style={{ animationDelay: '0.1s', animation: isVisible ? 'fade-in-up 0.6s ease-out forwards' : 'none', opacity: 0 }}
            >
              Tráfego Pago + Automação IA
            </span>

            <h1
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] leading-tight"
              style={{ animationDelay: '0.2s', animation: isVisible ? 'fade-in-up 0.6s ease-out 0.1s forwards' : 'none', opacity: 0 }}
            >
              Seus anúncios geram cliques.{' '}
              <span className="gradient-text">Nossos agentes de IA</span>{' '}
              transformam em clientes.
            </h1>

            <p
              className="text-muted-foreground text-base lg:text-lg max-w-xl leading-relaxed"
              style={{ animationDelay: '0.3s', animation: isVisible ? 'fade-in-up 0.6s ease-out 0.2s forwards' : 'none', opacity: 0 }}
            >
              Estratégia de tráfego pago no Meta Ads, Google Ads e Google Meu Negócio, combinada com agentes inteligentes que atendem, qualificam e vendem pelo WhatsApp — 24 horas por dia, 7 dias por semana.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: isVisible ? 'fade-in-up 0.6s ease-out 0.3s forwards' : 'none', opacity: 0 }}
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-cta">
                Quero Crescer com IA →
              </a>
              <a href="#ia-em-acao" className="btn-outline-cta">
                Veja a IA em Ação ↓
              </a>
            </div>

            <div
              className="flex flex-wrap gap-3 pt-2"
              style={{ animation: isVisible ? 'fade-in-up 0.6s ease-out 0.4s forwards' : 'none', opacity: 0 }}
            >
              {['Meta Ads', 'Google Ads', 'Google Meu Negócio', 'WhatsApp AI', 'N8N'].map((badge) => (
                <span key={badge} className="text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Visual - Floating Cards */}
          <div
            className="relative h-[340px] sm:h-[400px] lg:h-[480px] hidden md:block"
            style={{ animation: isVisible ? 'fade-in-up 0.8s ease-out 0.3s forwards' : 'none', opacity: 0 }}
          >
            {/* Dashboard card */}
            <div className="glass-card absolute top-0 right-0 w-64 p-5 rotate-2 hover:rotate-0 transition-transform duration-500 card-hover">
              <div className="text-xs font-mono text-primary mb-3 uppercase tracking-wider">Dashboard</div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">CPL</span>
                  <span className="font-mono font-bold text-primary text-sm">R$ 12,40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Leads</span>
                  <span className="font-mono font-bold text-accent text-sm">247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">ROAS</span>
                  <span className="font-mono font-bold text-green-400 text-sm">4.2x</span>
                </div>
                <div className="h-16 mt-2 flex items-end gap-1">
                  {[40, 55, 35, 70, 60, 80, 65, 90, 75, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/40 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp card */}
            <div className="glass-card absolute top-28 left-0 w-60 p-4 -rotate-3 hover:rotate-0 transition-transform duration-500 card-hover">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">🤖</div>
                <div>
                  <div className="text-xs font-bold text-foreground">Sofia ✨</div>
                  <div className="text-[10px] text-muted-foreground">Online agora</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-muted/50 rounded-lg rounded-tl-none px-3 py-2 text-xs text-foreground/80 max-w-[85%]">
                  Oi, quero ver tecidos
                </div>
                <div className="bg-green-600/20 rounded-lg rounded-tr-none px-3 py-2 text-xs text-foreground/80 ml-auto max-w-[85%]">
                  Oi! ✨ Temos opções incríveis! Renda, tule ou bordado?
                </div>
              </div>
            </div>

            {/* Growth card */}
            <div className="glass-card absolute bottom-4 right-8 w-52 p-4 rotate-1 hover:rotate-0 transition-transform duration-500 card-hover">
              <div className="text-xs font-mono text-accent mb-2">Crescimento</div>
              <div className="flex items-end gap-0.5 h-12">
                {[20, 30, 25, 40, 50, 45, 65, 60, 75, 85, 80, 95].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `linear-gradient(to top, hsl(25 95% 53% / 0.6), hsl(217 91% 60% / 0.6))` }} />
                ))}
              </div>
              <div className="text-right mt-1">
                <span className="font-mono font-bold text-accent text-lg">+340%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
