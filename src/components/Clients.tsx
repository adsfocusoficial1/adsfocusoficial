import { Instagram } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

type Client = {
  name: string;
  business: string;
  service: string;
  instagram: string;
};

const clients: Client[] = [
  {
    name: 'Elton',
    business: 'Tecidos Finos SC',
    service: 'Sofia IA + Tráfego Pago + Google Meu Negócio + Merchant Center',
    instagram: 'tecidosfinossc',
  },
  {
    name: 'Sonia',
    business: 'Yakissoba',
    service: 'Meta Ads + Google Ads + Google Meu Negócio',
    instagram: 'soniayakissoba',
  },
  {
    name: 'Jefferson',
    business: 'Jeff Higienização',
    service: 'Agente IA no WhatsApp',
    instagram: 'jeffhigienizacao',
  },
  {
    name: 'Sandro',
    business: 'BPO Vertex',
    service: 'Agente IA (em implantação)',
    instagram: 'bpovertex',
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
        <div className={`text-center mb-14 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block font-mono text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary mb-4">
            Quem confia na ADSFOCUS
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4 text-foreground">
            Clientes em Operação
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Negócios reais que combinam tráfego pago e automação em IA com a ADSFOCUS.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <a
              key={client.instagram}
              href={`https://instagram.com/${client.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${client.business}`}
              className={`group glass-card p-6 rounded-2xl card-hover flex flex-col gap-3 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-heading font-bold text-lg">
                  {client.name.charAt(0)}
                </div>
                <Instagram
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-foreground leading-tight">
                  {client.name}
                </h3>
                <p className="text-sm text-primary font-medium">{client.business}</p>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                {client.service}
              </p>

              <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors mt-1">
                @{client.instagram}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
