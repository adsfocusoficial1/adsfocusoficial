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
      <div
        className="relative max-w-4xl mx-auto rounded-2xl p-5 lg:p-6 flex flex-col lg:flex-row gap-4 lg:items-center border"
        style={{
          backgroundColor: 'hsl(222 50% 7%)',
          borderColor: 'rgba(255, 117, 0, 0.25)',
          boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="flex-1 text-sm text-white/85 leading-relaxed">
          <strong className="block text-white font-heading font-bold mb-1 text-base">
            Nós usamos cookies
          </strong>
          Utilizamos cookies essenciais para o funcionamento do site e cookies de análise para
          melhorar sua experiência, de acordo com nossa{' '}
          <a
            href="/politica-de-privacidade"
            className="text-primary hover:underline font-semibold"
            style={{ color: '#FF7500' }}
          >
            Política de Privacidade
          </a>
          .
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={reject}
            className="px-4 py-2 text-sm rounded-lg border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold rounded-lg text-white transition-all hover:brightness-110 shadow-lg"
            style={{ backgroundColor: '#FF7500', boxShadow: '0 4px 14px rgba(255, 117, 0, 0.4)' }}
          >
            Aceitar
          </button>
        </div>

        <button
          type="button"
          onClick={reject}
          aria-label="Fechar aviso"
          className="absolute top-3 right-3 lg:hidden text-white/60 hover:text-white p-1"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
