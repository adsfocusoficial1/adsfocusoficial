import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { WHATSAPP_LINK, CTA_PRIMARY_LABEL } from '@/lib/constants';
import { Clock, Brain, DollarSign, Target, MessageSquare, BarChart3 } from 'lucide-react';

const benefits = [
  { icon: Clock, text: 'Atende 24h/dia, 7 dias por semana — sem folga, sem atraso' },
  { icon: Brain, text: 'Reconhece produtos por foto e nome, consultando seu catálogo' },
  { icon: DollarSign, text: 'Informa preços, promoções e disponibilidade automaticamente' },
  { icon: Target, text: 'Qualifica o cliente antes de passar para sua equipe' },
  { icon: MessageSquare, text: 'Transfere para atendente humano na hora certa' },
  { icon: BarChart3, text: 'Gera relatórios: produtos mais pedidos, horários de pico' },
];

const IAInAction = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="ia-em-acao" className="section-dark py-20 lg:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4">
            Veja a IA Vendendo Enquanto Você Dorme
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos agentes de IA atendem, qualificam e vendem pelo WhatsApp — de forma automática e personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Phone Mockup */}
          <div className={`flex justify-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
            <div className="w-[300px] sm:w-[320px] rounded-[2.5rem] border-[3px] border-foreground/20 bg-background p-1.5 shadow-2xl">
              <div className="rounded-[2rem] overflow-hidden bg-muted/30">
                {/* Notch */}
                <div className="flex justify-center py-2">
                  <div className="w-24 h-5 bg-background rounded-full" />
                </div>
                {/* WhatsApp Header */}
                <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: 'hsl(152 44% 28%)' }}>
                  <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-xs">✨</div>
                  <div>
                    <div className="text-xs font-bold text-primary-foreground">Assistente IA ✨</div>
                    <div className="text-[10px] text-primary-foreground/60">online</div>
                  </div>
                </div>
                {/* Messages */}
                <div className="p-3 space-y-2 min-h-[360px]" style={{ backgroundColor: 'hsl(222 30% 10%)' }}>
                  <div className="flex justify-start">
                    <div className="bg-muted/60 rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%]">
                      <p className="text-xs text-foreground/90">Oi, quero saber mais sobre os produtos</p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:23</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%]" style={{ backgroundColor: 'hsl(152 44% 28% / 0.4)' }}>
                      <p className="text-xs text-foreground/90">
                        Olá! ✨ Que bom ter você aqui! Posso te ajudar a encontrar o produto ideal. O que você está procurando?
                      </p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:23 ✓✓</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted/60 rounded-xl rounded-tl-sm px-3 py-2">
                      <p className="text-xs text-foreground/90">Quero ver as opções disponíveis</p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:24</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]" style={{ backgroundColor: 'hsl(152 44% 28% / 0.4)' }}>
                      <p className="text-xs text-foreground/90">
                        Temos várias opções! 🎯<br />
                        Vou te mostrar as mais procuradas com preços e disponibilidade.<br /><br />
                        Quer que eu filtre por categoria ou orçamento?
                      </p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:24 ✓✓</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted/60 rounded-xl rounded-tl-sm px-3 py-2">
                      <div className="w-28 h-20 bg-muted/40 rounded-lg flex items-center justify-center text-muted-foreground text-lg mb-1">📷</div>
                      <p className="text-xs text-foreground/90">Quero algo parecido com isso</p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:25</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]" style={{ backgroundColor: 'hsl(152 44% 28% / 0.4)' }}>
                      <p className="text-xs text-foreground/90">
                        Identifiquei pela foto! ✨ Temos opções muito similares em estoque. Posso te passar os detalhes e valores?
                      </p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:25 ✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Benefits */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h3 className="font-heading font-bold text-xl lg:text-2xl">O que a IA faz pelo seu negócio:</h3>
            <div className="space-y-3">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="glass-card p-4 flex items-start gap-3 card-hover">
                  <Icon size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/90">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              Resultado: você foca em vender para quem está pronto, enquanto a IA cuida de todo o resto.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-cta inline-flex">
              {CTA_PRIMARY_LABEL} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IAInAction;
