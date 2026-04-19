import { useState, FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollAnimations';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/maqajgyp';

const ContactForm = () => {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        const msg = (body?.errors?.[0]?.message as string | undefined) ?? 'Não foi possível enviar agora. Tente novamente em instantes.';
        setError(msg);
      }
    } catch {
      setError('Falha de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="formulario"
      className="py-20 lg:py-28 section-dark border-t border-border"
    >
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`max-w-xl mx-auto text-center mb-10 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="inline-block font-mono text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary mb-4">
            Comece agora
          </span>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-foreground mb-4">
            Receba sua análise gratuita
          </h2>
          <p className="text-muted-foreground">
            Deixe seus dados. Em até 2 horas úteis entramos em contato para entender seu negócio e mostrar como podemos crescer juntos.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className={`max-w-xl mx-auto glass-card p-6 lg:p-8 rounded-2xl space-y-5 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.15s' }}
        >
          <input type="hidden" name="_subject" value="Novo lead do site ADSFOCUS" />
          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                Recebemos seus dados
              </h3>
              <p className="text-sm text-muted-foreground">
                Em até 2 horas úteis nossa equipe entra em contato.
              </p>
            </div>
          ) : (
            <>
              <div>
                <label
                  htmlFor="contato-nome"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nome
                </label>
                <input
                  id="contato-nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contato-telefone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Telefone
                </label>
                <input
                  id="contato-telefone"
                  name="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(11) 9 0000-0000"
                  className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contato-email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  E-mail
                </label>
                <input
                  id="contato-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="voce@empresa.com.br"
                  className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary-cta w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Enviando...' : 'Quero uma análise gratuita →'}
              </button>

              {error && (
                <p role="alert" className="text-sm text-red-400 text-center">
                  {error}
                </p>
              )}

              <p className="text-xs text-muted-foreground text-center">
                Seus dados são tratados com confidencialidade. Não enviamos spam.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
