

## Plan: Site ADSFOCUS — Correções e Melhorias

### Problemas identificados e soluções

**1. Corrigir link do WhatsApp (QUEBRADO)**
O número está errado em `src/lib/constants.ts`. Atual: `5511915765432`. Correto: `551115765432`.
Atualizar ambos os links (`WHATSAPP_LINK` e `WHATSAPP_LINK_CTA`), e o telefone exibido no Footer.

**2. Remover dados de cliente e termos técnicos da seção Resultados**
- Remover valores específicos (R$ 5.000/mês, CPL R$ 20-60, etc.) e termos como CPL, ROAS
- Remover badge "CASE REAL EM ANDAMENTO" do card de Tecidos
- Reescrever os 3 cards com foco em benefícios tangíveis e linguagem acessível (ex: "Mais clientes", "Agenda cheia", "Vendas 24h")
- Remover o disclaimer técnico extenso no rodapé

**3. Seção IA em Ação — Remover dados do cliente**
- Remover nomes de produtos específicos, preços (R$128/m, R$398/m) e referências a catálogos reais da conversa do WhatsApp
- Manter a conversa genérica mas demonstrativa (sem expor dados de cliente real)
- Remover badge "Case Real: Em Implementação"

**4. Seção Sobre — Remover skills técnicos**
- Remover a lista de badges técnicos (Meta Ads, N8N, Supabase, Low-Code, WhatsApp Business API)
- Substituir por uma descrição mais humana das competências: "Tráfego Pago", "Inteligência Artificial", "Automação", "Estratégia Digital"

**5. Foto desfocada do João Bento**
- A imagem `src/assets/joao-bento.png` está com baixa qualidade. Vou ajustar o CSS para melhorar a renderização (object-fit, tamanho adequado) e adicionar um fallback visual com iniciais caso a imagem continue ruim. O ideal seria o usuário enviar uma foto de maior resolução.

**6. Footer — Redes sociais com ícones funcionais**
- Adicionar ícones do Instagram (Lucide) com link funcional para `https://instagram.com/adsfocusoficial`
- Tornar o telefone e email clicáveis (tel: e mailto:)
- Corrigir número de telefone

**7. Seção Nichos — Remover termos técnicos**
- Remover "CAC" de "Captar assinantes e reduzir CAC" → "Captar mais assinantes com menor custo"
- Remover "Leads B2B" → "Contatos qualificados de construtoras e arquitetos"

**8. Hero — Remover badges técnicos**
- Remover "N8N" dos badges do Hero (ninguém sabe o que é)
- Simplificar para: "Meta Ads", "Google Ads", "Google Meu Negócio", "WhatsApp com IA"

### Arquivos a editar
- `src/lib/constants.ts` — corrigir número WhatsApp
- `src/components/Results.tsx` — reescrever cards sem dados técnicos/cliente
- `src/components/IAInAction.tsx` — remover preços/nomes reais, badge case
- `src/components/About.tsx` — simplificar skills
- `src/components/Niches.tsx` — remover jargão
- `src/components/Hero.tsx` — simplificar badges
- `src/components/Footer.tsx` — adicionar ícones sociais, links clicáveis, corrigir telefone

