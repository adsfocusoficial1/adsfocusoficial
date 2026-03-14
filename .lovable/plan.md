

## Plano: Atualizar telefone, links e URL do site

### Mudanças

**1. Número de celular: `5511971028939`**
Atualizar em todos os lugares:
- `src/lib/constants.ts` — WhatsApp links (wa.me/5511971028939)
- `src/components/Footer.tsx` — telefone exibido: (11) 97102-8939, href tel:+5511971028939
- `index.html` — schema JSON-LD telephone

**2. Link do site: usar URL publicada do Lovable**
O site publicado é `https://digital-brazil-forge.lovable.app`. Atualizar:
- `src/components/Footer.tsx` — link do Globe (href e texto exibido)
- `index.html` — og:url e schema url

**3. Link do Instagram: corrigir para `https://www.instagram.com/adsfocusoficial`**
Atualizar nas 2 ocorrências no Footer (ícone social e lista de contato).

### Arquivos editados
- `src/lib/constants.ts`
- `src/components/Footer.tsx`
- `index.html`

