import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'adsfocus.cookie-consent.v1';

type Consent = 'accepted' | 'rejected' | null;

const readConsent = (): Consent => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'accepted' || v === 'rejected') return v;
  } catch {
    /* localStorage bloqueado */
  }
  return null;
};

const writeConsent = (v: Exclude<Consent, null>) => {
  try {
    localStorage.setItem(STORAGE_KEY, v);
  } catch {
    /* noop */
  }
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    writeConsent('accepted');
    setVisible(false);
  };

  const reject = () => {
    writeConsent('rejected');
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 inset-x-0 z-[90] px-4 pb-4 lg:pb-6 animate-fade-in-up"
    >
      <div className="max-w-4xl mx-auto glass-card rounded-2xl p-5 lg:p-6 flex flex-col lg:flex-row gap-4 lg:items-center shadow-2xl border border-border">
        <div className="flex-1 text-sm text-foreground/90 leading-relaxed">
          <strong className="block text-foreground font-heading font-bold mb-1">
            Nós usamos cookies
          </strong>
          Utilizamos cookies essenciais para o funcionamento do site e cookies de análise para
          melhorar sua experiência, de acordo com nossa{' '}
          <a
            href="/politica-de-privacidade"
            className="text-primary hover:underline font-medium"
          >
            Política de Privacidade
          </a>
          . Você pode aceitar ou recusar os cookies opcionais.
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={reject}
            className="px-4 py-2 text-sm rounded-lg border border-border text-foreground/80 hover:text-foreground hover:bg-muted/40 transition-colors"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={accept}
            className="btn-primary-cta !px-5 !py-2 !text-sm"
          >
            Aceitar
          </button>
        </div>

        <button
          type="button"
          onClick={reject}
          aria-label="Fechar aviso"
          className="absolute top-3 right-3 lg:hidden text-muted-foreground hover:text-foreground p-1"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
