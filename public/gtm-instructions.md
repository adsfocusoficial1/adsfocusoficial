# ADSFOCUS — GA4 + Meta Pixel via Google Tag Manager

Passo a passo para João ativar **GA4** e **Meta Pixel** sem mexer no código toda vez.

---

## Visão geral da arquitetura

```
index.html
   │
   ├── <head>   → carrega GTM container (1 script)
   └── <body>   → fallback <noscript> (iframe GTM)

GTM (interface web do Google)
   ├── Tag: Google Analytics 4 Configuration
   │     • Measurement ID: G-XXXXXXXXXX
   │     • Trigger: All Pages
   │
   └── Tag: Meta Pixel (usando template custom HTML)
         • Pixel ID: XXXXXXXXXX
         • Trigger: All Pages
```

**Vantagem**: depois de plugar o GTM, você adiciona/remove pixels (Google Ads, LinkedIn Insight, TikTok, etc) **sem deploy** — direto na UI do GTM.

---

## Passo 1 — Criar container GTM (5 min)

1. Abrir [tagmanager.google.com](https://tagmanager.google.com/) logado com `adsfocusoficial1@gmail.com`
2. Clicar em **"Criar conta"**
3. Nome da conta: `ADSFOCUS`
4. País: `Brasil`
5. Nome do container: `adsfocus.com.br`
6. Plataforma de destino: **Web**
7. Aceitar termos → **Criar**
8. Aparecerá um modal com **dois snippets** e um **ID tipo `GTM-XXXXXXX`**
9. **NÃO precisa copiar os snippets** — eu já deixei o código preparado no `index.html` só com o ID como placeholder. Me envia apenas o **ID `GTM-XXXXXXX`**

---

## Passo 2 — Substituir o ID no index.html

Quando você me mandar o ID, eu:
1. Edito `index.html` substituindo `GTM-XXXXXXX` pelo ID real
2. Commit + push
3. Vercel redeploya

**Locais no index.html** (já marcados com comentários `<!-- Google Tag Manager -->`):
- **Head**: script de carregamento (logo após `<meta name="author">`)
- **Body**: iframe de fallback `<noscript>` (logo após a tag `<body>`)

---

## Passo 3 — Criar propriedade GA4 (5 min)

1. Abrir [analytics.google.com](https://analytics.google.com/) → **Admin** (engrenagem)
2. **Criar → Propriedade**
3. Nome: `ADSFOCUS — Site`
4. Fuso: `Brasil (GMT-03:00)`
5. Moeda: `Real brasileiro (BRL)`
6. Detalhes do negócio: selecionar categoria "Marketing / Publicidade", tamanho "1-10"
7. Objetivos: marcar **"Gerar leads"** e **"Examinar comportamento do usuário"**
8. **Criar stream de dados**:
   - Plataforma: **Web**
   - URL: `https://adsfocus.com.br`
   - Nome: `ADSFOCUS Web`
   - Enhanced Measurement: **deixar ligado** (captura scroll, outbound clicks, form submissions automaticamente)
9. Copiar o **Measurement ID** (formato `G-XXXXXXXXXX`)

---

## Passo 4 — Configurar tag GA4 no GTM

1. Voltar ao [tagmanager.google.com](https://tagmanager.google.com/) → entrar no container `adsfocus.com.br`
2. Menu esquerdo → **Tags** → **Nova**
3. Clicar em **"Configuração da tag"** → escolher **"Google Tag"**
4. Campo **Tag ID**: colar `G-XXXXXXXXXX` (o Measurement ID do GA4)
5. Clicar em **"Acionamento"** → escolher **"All Pages"**
6. Nome da tag: `GA4 - Configuration`
7. **Salvar**

---

## Passo 5 — Criar Meta Pixel (5 min)

1. Abrir [business.facebook.com/events_manager](https://business.facebook.com/events_manager) (perfil Meta Business Suite)
2. **Conectar fontes de dados** → **Web** → **Avançar**
3. Nome: `ADSFOCUS Pixel`
4. URL do site: `https://adsfocus.com.br`
5. Método de conexão: **"Tag Manager"** (Google Tag Manager)
6. Copiar o **Pixel ID** (numérico, tipo `123456789012345`)

---

## Passo 6 — Configurar tag Meta Pixel no GTM

1. GTM → **Tags** → **Nova**
2. **Configuração da tag** → escolher **"HTML Personalizado"**
3. Colar este código (substituindo `SEU_PIXEL_ID_AQUI`):

```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID_AQUI');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"
/></noscript>
```

4. **Acionamento** → **All Pages**
5. Nome: `Meta Pixel - Base`
6. **Salvar**

---

## Passo 7 — Eventos de conversão (formulário do site)

Quando alguém preencher o formulário de contato, queremos disparar:
- GA4: evento `generate_lead`
- Meta: evento `Lead`

Isso exige um pequeno ajuste no código do formulário para empurrar evento ao `dataLayer`. **Não faça agora** — me avise quando quiser esta etapa e eu implemento:

```js
// src/components/ContactForm.tsx (após res.ok)
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ event: 'lead_form_submit' });
```

Aí no GTM cria 2 tags adicionais com trigger `Custom Event = lead_form_submit`.

---

## Passo 8 — Publicar o container

**Crítico**: GTM só entra em produção quando você clicar em **"Enviar" (Submit)**.

1. Canto superior direito → botão **"Enviar"**
2. Nome da versão: `v1 - GA4 + Meta Pixel base`
3. Descrição: `Setup inicial de analytics e pixel`
4. Clicar **"Publicar"**
5. Status vira `Publicado` ✅

---

## Passo 9 — Validar (5 min, CRÍTICO)

### GA4 Realtime
1. Abrir [analytics.google.com](https://analytics.google.com/) → **Relatórios** → **Tempo real**
2. Abrir `https://adsfocus.com.br` em outra aba → navegar
3. O contador "Usuários nos últimos 30 min" deve subir imediatamente

### Meta Pixel (extensão Chrome)
1. Instalar [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Abrir `https://adsfocus.com.br` → clicar no ícone da extensão
3. Deve mostrar: ✅ `PageView — ADSFOCUS Pixel`

### GTM Preview
1. Dentro do GTM → **Preview** (canto superior direito)
2. Cola `https://adsfocus.com.br` → **Connect**
3. Abre uma janela nova com painel de debug embaixo
4. Verifica se `GA4 - Configuration` e `Meta Pixel - Base` aparecem em **"Tags Fired"**

---

## Resumo do que eu preciso de você

Para eu plugar o GTM no site, me envie **só 1 coisa**:

> **GTM Container ID** (formato `GTM-XXXXXXX`)

O resto (GA4 Measurement ID, Meta Pixel ID) você configura dentro da UI do GTM sem precisar de mim — inclusive adiciona novos pixels futuros (Google Ads, TikTok, LinkedIn) pela mesma interface.

---

## Checklist

- [ ] Criar container GTM em `tagmanager.google.com`
- [ ] Me enviar o ID `GTM-XXXXXXX`
- [ ] Eu ponho no `index.html` + deploy
- [ ] Criar propriedade GA4
- [ ] Criar Meta Pixel
- [ ] Configurar as 2 tags no GTM com triggers All Pages
- [ ] Publicar container (botão Submit)
- [ ] Validar com GA4 Realtime + Meta Pixel Helper
- [ ] (Opcional) Implementar evento `lead_form_submit` no formulário
