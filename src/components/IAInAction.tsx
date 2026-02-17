import { useScrollReveal } from '@/hooks/useScrollAnimations';
import { WHATSAPP_LINK } from '@/lib/constants';
import { Clock, Brain, DollarSign, Target, MessageSquare, BarChart3 } from 'lucide-react';

const benefits = [
  { icon: Clock, text: 'Atende 24h/dia, 7 dias por semana — sem folga, sem atraso' },
  { icon: Brain, text: 'Identifica tecidos por foto e nome, consultando o catálogo real' },
  { icon: DollarSign, text: 'Informa preços, promoções e links diretos do e-commerce' },
  { icon: Target, text: 'Qualifica o cliente: ocasião, orçamento, urgência' },
  { icon: MessageSquare, text: 'Transfere para atendente humano quando o cliente está pronto' },
  { icon: BarChart3, text: 'Gera dados: tecidos mais pedidos, horários de pico, dúvidas frequentes' },
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
          <p className="text-muted-foreground max-w-2xl mx-auto mb-3">
            Este é um exemplo real de como nossos agentes de IA funcionam no WhatsApp de uma loja de tecidos finos.
          </p>
          <span className="inline-block font-mono text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
            Case Real: Em Implementação
          </span>
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
                    <div className="text-xs font-bold text-primary-foreground">Sofia ✨ — Tecidos Finos</div>
                    <div className="text-[10px] text-primary-foreground/60">online</div>
                  </div>
                </div>
                {/* Messages */}
                <div className="p-3 space-y-2 min-h-[360px]" style={{ backgroundColor: 'hsl(222 30% 10%)' }}>
                  {/* Received */}
                  <div className="flex justify-start">
                    <div className="bg-muted/60 rounded-xl rounded-tl-sm px-3 py-2 max-w-[80%]">
                      <p className="text-xs text-foreground/90">Oi, quero ver tecidos para casamento</p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:23</span>
                    </div>
                  </div>
                  {/* Sent */}
                  <div className="flex justify-end">
                    <div className="rounded-xl rounded-tr-sm px-3 py-2 max-w-[80%]" style={{ backgroundColor: 'hsl(152 44% 28% / 0.4)' }}>
                      <p className="text-xs text-foreground/90">
                        Oi! ✨ Sou a Sofia, da Tecidos Finos! Para casamento, temos opções maravilhosas! Você procura renda, tule ou bordado?
                      </p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:23 ✓✓</span>
                    </div>
                  </div>
                  {/* Received */}
                  <div className="flex justify-start">
                    <div className="bg-muted/60 rounded-xl rounded-tl-sm px-3 py-2">
                      <p className="text-xs text-foreground/90">Renda</p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:24</span>
                    </div>
                  </div>
                  {/* Sent - Long */}
                  <div className="flex justify-end">
                    <div className="rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]" style={{ backgroundColor: 'hsl(152 44% 28% / 0.4)' }}>
                      <p className="text-xs text-foreground/90">
                        Temos opções incríveis! 🧵<br />
                        • Renda Chantilly — R$128/m<br />
                        • Renda Francesa — R$98/m<br />
                        • Coleção Dubai — R$398/m<br /><br />
                        Qual te interessa mais?
                      </p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:24 ✓✓</span>
                    </div>
                  </div>
                  {/* Received - Image placeholder */}
                  <div className="flex justify-start">
                    <div className="bg-muted/60 rounded-xl rounded-tl-sm px-3 py-2">
                      <div className="w-28 h-20 bg-muted/40 rounded-lg flex items-center justify-center text-muted-foreground text-lg mb-1">📷</div>
                      <p className="text-xs text-foreground/90">Quero algo parecido com isso</p>
                      <span className="text-[9px] text-muted-foreground block text-right mt-0.5">14:25</span>
                    </div>
                  </div>
                  {/* Sent */}
                  <div className="flex justify-end">
                    <div className="rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]" style={{ backgroundColor: 'hsl(152 44% 28% / 0.4)' }}>
                      <p className="text-xs text-foreground/90">
                        Pela foto, parece um tule bordado com pedrarias! ✨ Temos o Dubai TF2208 — R$398/m com frete grátis para SP! Quer mais detalhes?
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
            <h3 className="font-heading font-bold text-xl lg:text-2xl">O que a Sofia faz pelo negócio:</h3>
            <div className="space-y-3">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="glass-card p-4 flex items-start gap-3 card-hover">
                  <Icon size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/90">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              Resultado: o dono da loja foca em vender para quem está pronto, enquanto a Sofia cuida de todo o resto.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary-cta inline-flex">
              Quero um Agente de IA →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IAInAction;
