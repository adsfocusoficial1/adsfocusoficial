import { Instagram } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

type Client = {
  name: string;
  business: string;
  instagram: string;
  avatar: string;
  testimonial: string;
};

const clients: Client[] = [
  {
    name: 'Elton',
    business: 'Tecidos Finos SC',
    instagram: 'tecidosfinossc',
    avatar: '/images/clients/tecidosfinossc.jpg',
    testimonial:
      'A Sofia atende no WhatsApp 24h e não perde um cliente. Mudou a forma como a gente vende tecido aqui em SC.',
  },
  {
    name: 'Sonia',
    business: 'Yakissoba',
    instagram: 'soniayakissoba',
    avatar: '/images/clients/soniayakissoba.jpg',
    testimonial:
      'Desde que a ADSFOCUS assumiu o tráfego e o Google Meu Negócio, meu delivery bombou — a agenda fica cheia sem eu precisar correr atrás.',
  },
  {
    name: 'Jefferson',
    business: 'Jeff Higienização',
    instagram: 'jeffhigienizacao',
    avatar: '/images/clients/jeffhigienizacao.jpg',
    testimonial:
      'O agente de IA no WhatsApp agenda os serviços pra mim enquanto estou atendendo na casa do cliente. É outro patamar de profissionalismo.',
  },
  {
    name: 'Sandro',
    business: 'BPO Vertex',
    instagram: 'bpovertex',
    avatar: '/images/clients/bpovertex.jpg',
    testimonial:
      'Contratei a implantação do agente de IA pra nosso BPO. O nível de detalhe e a entrega do João são diferentes de tudo que já vi.',
  },
];

const Clients = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="clientes"
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'hsl(222 47% 7%)' }}
    >
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary mb-4">
            Quem confia na ADSFOCUS
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-foreground">
            Clientes em Operação
          </h2>
        </div>

        {/* Logo marquee */}
        <div
          className={`relative overflow-hidden mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.15s' }}
          aria-label="Clientes em operação"
        >
          <div className="flex gap-10 logo-marquee">
            {[...clients, ...clients].map((client, i) => (
              <a
                key={`${client.instagram}-${i}`}
                href={`https://instagram.com/${client.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex flex-col items-center gap-2 group"
                aria-label={`Instagram de ${client.business}`}
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-primary/30 bg-muted/20 group-hover:border-primary transition-all group-hover:scale-105">
                  <img
                    src={client.avatar}
                    alt={client.business}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-[11px] font-mono text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  @{client.instagram}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <figure
              key={client.instagram}
              className={`glass-card p-6 rounded-2xl flex flex-col gap-4 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + 0.1 * i}s` }}
            >
              <blockquote className="text-sm text-foreground/90 leading-relaxed flex-1">
                <span className="text-primary font-heading text-2xl leading-none">“</span>
                {client.testimonial}
                <span className="text-primary font-heading text-2xl leading-none">”</span>
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-3 border-t border-border/40">
                <img
                  src={client.avatar}
                  alt={client.business}
                  className="w-10 h-10 rounded-full object-cover border border-primary/30"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-heading font-bold text-foreground leading-tight">
                    {client.name}
                  </div>
                  <a
                    href={`https://instagram.com/${client.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <Instagram size={11} />
                    {client.business}
                  </a>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
