# Softweb — Briefing de Redesign

Coletado em 07/10/2026 · Fonte: https://softweb.inf.br/

---

## 1. Visão geral

A Softweb Tecnologia vende software e consultoria para transportadoras que usam o TMS SSW. O site atual é um WordPress com tema BeTheme, visual de 2023, textos com erros e CTAs genéricos — vale um redesign focado em gerar demonstrações pelo WhatsApp.

| Item | Dado coletado |
| --- | --- |
| Empresa | Softweb Tecnologia — mais de 15 anos no mercado de tecnologia para logística |
| CEO / fundador | Alex Santana |
| Público | Transportadoras e operadores logísticos que usam (ou vão usar) o SSW Sistemas |
| Produtos | SoftwebApp (app white-label integrado ao SSW) · ChatSWT (chatbot de WhatsApp integrado ao SSW) · Revenda/implantação do SSW Sistemas (TMS) · AnalyticsLog (https://analyticslog.io/, link externo no menu) |
| Serviços | Consultoria Empresarial & Financeira · Treinamentos SSW, Chat-Bot e SoftwebApp |
| WhatsApp | +55 (62) 4101-1073 — https://wa.me/556241011073 (DDD 62, Goiás) |
| E-mail | suporte@softweb.inf.br |
| Instagram | https://www.instagram.com/softwebtecnologia/ |
| Vídeo | YouTube embutido na home: "Aplicativo Softweb" (canal Softweb Tecnologia) |
| Clientes exibidos (logos) | Accet, RIT, Service Logística, Amigo Transportes e mais um sem nome no arquivo |
| Stack atual | WordPress + BeTheme + Contact Form 7 + reCAPTCHA + banner de cookies |

### Problemas do site atual

- **Hero sem proposta clara:** "A tecnologia inovadora que vai levar sua empresa para outro nível!" não diz que é para transportadoras nem cita o SSW.
- **Slider duplicado:** os mesmos 3 textos de produto se repetem 3 vezes na home.
- **Erros de digitação:** "SofwebApp", "SSWSitemas", "seguimento", "Seri referencia", "uma atendimento", "PROTEGITOS", "ESPECILIAZADO", "Tecnolgia", "esta" sem acento.
- **Links quebrados no rodapé:** produtos, serviços, "Envie seu curriculum", "2ª via de Boleto" e "Downloads" apontam todos para a home.
- **Inconsistência de nomes:** SoftwebApp / Softweb-APP / SoftwebApp System; ChatSWT / Chat-Bot / Automação Chat-Bot.
- **CTA final repetido:** a faixa "Tenha agora mesmo o Chat-Bot" aparece em páginas que não são do chatbot (home, contato).
- **Blog parado:** um único post (DT-e).
- **Sem prova social forte:** nenhum depoimento, número de clientes da Softweb ou case; o "+1000 transportadoras" é do SSW, não da Softweb.
- **Contraste baixo:** corpo de texto cinza (#626262) em 13px, títulos com sublinhado e muita área clara lavada.

---

## 2. Mapa do site e conteúdo

| Menu | Página | URL |
| --- | --- | --- |
| HOME | Home | https://softweb.inf.br/ |
| PRODUTOS | SoftwebApp | /softweb-app/ |
| PRODUTOS | ChatSWT | /chat-bot/ |
| PRODUTOS | SSW Sistemas | /ssw-sistemas/ |
| PRODUTOS | AnalyticsLog (externo) | https://analyticslog.io/ |
| SERVIÇOS | Consultoria Empresarial & Financeira | /consultoria-empresarial/ |
| SOBRE NÓS | Sobre nós | /sobre-nos/ |
| BLOG | Blog | /blog/ |
| CONTATO | Fale Conosco | /contato/ |
| Rodapé | Política de Privacidade | /politica-de-privacidade/ |

### Home

1. **Hero** (fundo azul com padrão geométrico + foto de homem sorrindo com notebook): "A tecnologia inovadora que vai levar sua empresa para outro nível!" · botão amarelo "SOLICITE SUA PROPOSTA AGORA MESMO" (WhatsApp) · abas SoftwebApp / ChatSWT / SSW Sistemas com slider de textos curtos.
2. **Softweb-APP** — "Conecte seus clientes à sua transportadora com o nosso aplicativo!" App que aproxima transportadora e cliente, integrado ao SSW.
    - Para a transportadora: comunicação simplificada; monitoramento de cargas em tempo real; organização das operações.
    - Para o cliente: consulta rápida de status; notificações automáticas por etapa; acesso instantâneo às informações.
    - Imagem: mockup de celular "Soft Transportes" com botões Solicitar coleta / Rastrear mercadoria / Solicitar cotação / Fale conosco.
3. **SSW Sistemas** — "O TMS que revoluciona a gestão logística". SaaS validado por mais de 1.000 transportadoras.
    - Entrega: gestão integrada; automação de processos; otimização de custos; implementação imediata.
    - Por que escolher: tecnologia confiável; atendimento especializado; inovação contínua.
    - Imagem: diagrama octógono com módulos (planejamento, cotação, financeiro, contabilidade, gestão empresa, emissão de documentos fiscais, cadastros gerais, estoque).
4. **ChatSWT** — chatbot no WhatsApp integrado ao SSW: coletas, cotações automáticas, rastreamento instantâneo, respostas 24/7. CTA "Solicite uma demonstração personalizada".
5. **Vídeo** — "Preparamos um vídeo para você entender mais sobre nossos produtos e serviços" + YouTube.
6. **Cards institucionais** — "Empresa Inteligente" (+15 anos) e "Nosso Compromisso" (excelência, novidades, aprimorar produtos, ser referência, facilitar o dia a dia do empreendedor, paixão).
7. **Faixa CTA escura** — "Tenha agora mesmo o Chat-Bot da Softweb Tecnologia" + botão "CONTATE-NOS".
8. **Rodapé** azul-marinho — logo branco, texto institucional, 3 colunas (Nossos Produtos, Nossos Serviços, Empresa), selo Let's Encrypt, copyright, ícone Instagram e faixa multicolorida no fim.

Texto institucional do rodapé: "Tornamos a vida de muitos empreendimentos muito mais simples, criamos soluções robustas e de grande funcionalidade. A Softweb sempre está trabalhando para trazer novidades em tecnologia, e proporcionando a melhor ferramenta para seu negócio."

### SoftwebApp

- **Promessa:** autonomia para o cliente solicitar coleta, rastrear mercadoria e cotar frete — tudo com a marca da transportadora (app próprio na Play Store / App Store).
- **Recursos:** cadastro de filiais (cliente vai direto ao WhatsApp da filial escolhida); cotação de frete via API na base do SSW; chatbot opcional junto ao app.
- **Condições:** exclusivo para quem usa SSW; sem contrato de permanência; app pronto "em poucas horas"; 24x7x365 em cloud data center TIER 3.
- **Benefícios:** redução de custos operacionais; diferenciação de serviço; atendimento 24h.
- **Destaques:** Solicitação de coleta · Rastreamento de mercadoria · Cotação de fretes · Atendimento por filiais.

### ChatSWT (Chat-bot)

- **Promessa:** atendimento automatizado no WhatsApp, 24h, direcionado por setor, com 1 número e vários atendentes simultâneos.
- **Funcionalidades:** tirar dúvidas, agendar, confirmar entregas, gerar e qualificar leads, coletar e armazenar dados do cliente; modelos prontos.
- **Destaques:** plataforma em nuvem · monitoramento das conversas · transferência de atendimento · atendimento pelo celular · transferência de arquivos.
- Inclui um texto didático longo "O que é um chat-bot?" (candidato a virar post de blog).

### SSW Sistemas

- **Título:** "SSWSistemas é o maior TMS de todo o Brasil — Solução robusta para sua transportadora". Web, 100% online, matriz em Curitiba-PR, +120 colaboradores, +1.000 clientes.
- **Integração com clientes:** ocorrências por e-mail, rastreamento online, comprovante de entrega por imagem, acesso direto ao sistema, EDI (e-mail/FTP/webservice), SMS.
- **Módulos:** emissão de CT-e, MDF-e e NF-e; CT-e a partir de XML/chave NF-e; simulação de fretes; solicitação de coleta; avaliação de resultados; comissão de vendedores; acompanhamento de clientes; controle de frota; controle fiscal (Sintegra, SPED Fiscal, SPED PIS/COFINS).
- **Integrações citadas:** Comprovei, Portal da Entrega e qualquer parceiro via EDI.
- **Quem pode usar:** transportadoras terrestres, aéreas ou aquaviárias regularizadas na SEFAZ/Receita/Município.
- **Destaques:** plataforma 100% online · suporte humanizado · dados em data center Amazon · acesso nacional · fácil de usar · automação em vários módulos.

### Consultoria Empresarial & Financeira

- **Título:** "Somos especialistas em auxiliar empresas a ter ótimos resultados! Crescimento e Desempenho é o nosso foco."
- **Escopo geral:** planejamento estratégico, análise financeira, redução de custos, desenvolvimento de negócios, riscos, fusões e aquisições, gestão de projetos, treinamento.
- **6 serviços:** Treinamento SSW (presencial/remoto) · Reimplantação do SSW · Análise de Frete & Custos (Excel e BI) · Boas práticas · Processos (POP, fluxogramas, manuais) · Parametrização para análise de fretes.
- **Por que contratar:** identificar gargalos; gerenciar crises; aumentar receita e reduzir despesas; produtividade; finanças em ordem.
- Seção "Alguns de nossos clientes" (logos).

### Sobre nós

- **Título:** "São mais de 15 anos de serviços prestados!" + carta do CEO Alex Santana.
- **Missão:** transformar a logística com tecnologia, conhecimento e visão estratégica, democratizando boas práticas do transporte.
- **Visão:** estar entre as empresas referência em logística e transporte no país; ser uma das melhores empresas para trabalhar.
- **Valores:** propósito e ética; resultados com excelência; construímos juntos; simplicidade; 1% melhores todos os dias; somos verdadeiros.
- Bloco "Sua empresa não pode ficar obsoleta!" com 5 dicas + logos de clientes.

### Fale Conosco

- Canais: e-mail suporte@softweb.inf.br e WhatsApp +55 (62) 4101-1073.
- Formulário (Contact Form 7): Seu nome, Telefone, Nome empresa, Seu e-mail, Assunto, Anexar arquivo, Mensagem + reCAPTCHA.

### Blog

- Um post: "Documento Eletrônico de Transporte: o que é, e como vai funcionar o DT-e?".

---

## 3. Design system atual

O site usa uma única fonte (Source Sans Pro), azul como cor de marca, amarelo nos CTAs e azul-marinho no rodapé; valores lidos dos estilos computados da página.

### Cores

| Papel | Hex | Onde aparece |
| --- | --- | --- |
| Azul marca (logo, hero) | #0076B6 | Fundo dos heros das páginas internas, logo |
| Azul destaque | #2693FF | Subtítulos (h4), fundos de ícones |
| Teal / ciano | #00CDC1 · #1DC6BC | Ícone do menu, marcadores, links ativos |
| Amarelo CTA | #FFDE59 · #FFBD1F | Botões "Solicite sua proposta" e "Contate-nos", título da faixa CTA |
| Azul-marinho | #09142F | Títulos (h2), fundo do rodapé |
| Marinho secundário | #21293F | Barra de copyright |
| Preto CTA | #111111 | Fundo da faixa "Tenha agora mesmo" |
| Fundo claro | #F1F7FB | Seções alternadas |
| Texto corpo | #626262 | Parágrafos |
| Texto secundário | #9DA1AC · #737E86 | Links do rodapé, legendas |
| Branco | #FFFFFF | Fundos e texto sobre escuro |

A faixa decorativa no fim do rodapé alterna magenta, amarelo, teal e azul.

### Tipografia

| Elemento | Fonte | Tamanho | Peso | Cor / estilo |
| --- | --- | --- | --- | --- |
| H1 hero | Source Sans Pro | ~34–36 px | 500 | Branco |
| H2 seção | Source Sans Pro | 36 px | 500 | #09142F, sublinhado |
| H4 subtítulo | Source Sans Pro | 17 px | 300 | #2693FF, itálico |
| Corpo | Source Sans Pro | 13 px | 400 | #626262 |
| Menu / links | Source Sans Pro | 14 px | 400 | — |
| Faixa CTA título | Source Sans Pro | 36 px | 500 | #FFDE59 |
| Botão | Source Sans Pro | 13–14 px | 400 | Caixa alta |

### Componentes

- **Header:** logo à esquerda, menu hambúrguer teal + lupa à direita, fundo branco.
- **Botão primário:** amarelo, raio 5 px, caixa alta, sem ícone.
- **Seção produto:** texto 50% + imagem 50%, alternando lados, título sublinhado + subtítulo azul itálico + bullets com emoji e ✔.
- **Cards:** brancos, raio ~20 px, sombra suave (0 4px 10px rgba(0,0,0,.08)).
- **Faixa CTA:** fundo preto, título amarelo, divisória vertical, botão amarelo.
- **Rodapé:** marinho, 4 colunas, marcadores teal (▸), selo SSL.
- **Hero interno:** faixa azul #0076B6 com título branco centralizado.

### Assets reaproveitáveis (base: https://softweb.inf.br/wp-content/uploads/)

| Asset | Arquivo | Tamanho |
| --- | --- | --- |
| Logo horizontal (cor) | 2023/01/logo.png | 1800×467 |
| Logo vertical branco | 2023/01/logosoftweb.fw_.png | 608×467 |
| Logo fundo azul | 2023/02/logo_softweb_fundo_azul-768x614-1.png | 768×614 |
| Mockup do app | 2023/10/25351.1057712023-38-1-1.png | 1080×1350 |
| Ilustração chatbot | 2023/02/2573826_1610-2-1-1024x1024.png | 879×879 |
| Ilustração "Customers" | 2023/08/CUSTOMERS-SOFTWEB.png | 482×614 |
| Fundo do hero | 2023/01/bg1.png | — |
| Logos de clientes | accet, LOGO-RIT-OK, service-logistica, amigo-transp | 150 px |

O símbolo do logo é um conjunto de quadrados "pixelados" que se conectam em nós — bom ponto de partida para ícones e padrões gráficos na nova versão.

---

## 4. Proposta para a nova versão

Manter o azul da marca, trocar o amarelo genérico por um teal mais tecnológico e posicionar a Softweb como "o ecossistema que turbina o SSW" — com a demonstração pelo WhatsApp como única conversão.

### Tokens propostos

| Token | Valor | Uso |
| --- | --- | --- |
| --brand-600 | #0076B6 | Cor primária (mantida do logo) |
| --brand-500 | #2693FF | Links, foco, gráficos |
| --brand-50 | #EEF6FF | Fundos de seção e badges |
| --accent-500 | #00CDC1 | Botão primário, destaques, ícones |
| --accent-600 | #00A89E | Hover do botão |
| --navy-950 | #09142F | Títulos, hero escuro, rodapé |
| --ink-700 | #334155 | Texto corpo (substitui #626262) |
| --ink-500 | #64748B | Texto secundário |
| --line | #E2E8F0 | Bordas e divisórias |
| --whatsapp | #25D366 | Somente botão flutuante de WhatsApp |
| Fonte títulos | Plus Jakarta Sans 700/800 | H1 56–64 px, H2 40 px, H3 24 px |
| Fonte corpo | Inter 400/500 | 16–18 px, entrelinha 1.6 |
| Raio | 12 px (cards), 999 px (botões/badges) | — |
| Sombra | 0 10px 30px -12px rgba(9,20,47,.18) | Cards e mockups |
| Container | 1200 px, gutter 24 px (16 px no mobile) | — |

```css
:root {
  --brand-600: #0076B6;
  --brand-500: #2693FF;
  --brand-50:  #EEF6FF;
  --accent-500: #00CDC1;
  --accent-600: #00A89E;
  --navy-950: #09142F;
  --ink-700: #334155;
  --ink-500: #64748B;
  --line: #E2E8F0;
  --whatsapp: #25D366;
  --font-heading: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius-card: 12px;
  --radius-pill: 999px;
  --shadow-card: 0 10px 30px -12px rgba(9, 20, 47, .18);
  --container: 1200px;
}
```

### Estrutura sugerida da nova home

1. **Hero escuro (navy):** "Tecnologia para transportadoras que usam SSW" + subtítulo com os 3 produtos + CTA "Agendar demonstração" (WhatsApp) e CTA secundário "Ver produtos"; mockup real do app + conversa do ChatSWT.
2. **Faixa de logos** dos clientes (Accet, RIT, Service Logística, Amigo Transportes) com "+15 anos atendendo transportadoras".
3. **Ecossistema:** 3 cards (SoftwebApp, ChatSWT, SSW Sistemas) + AnalyticsLog, mostrando que tudo conversa com o SSW.
4. **Como funciona:** 3 passos — conversa no WhatsApp → configuração na base do SSW → app/bot no ar em horas.
5. **Benefícios com números:** atendimento 24/7, sem contrato de permanência, data center TIER 3, app com a marca da transportadora.
6. **Consultoria & treinamentos:** os 6 serviços em grid de ícones.
7. **Vídeo** de demonstração.
8. **Depoimentos** (pedir 2–3 ao cliente) e **FAQ** (preço, prazo, precisa ter SSW?, contrato).
9. **CTA final** + rodapé com links que funcionam.

### Recomendações

- Padronizar nomes: **SoftwebApp**, **ChatSWT**, **SSW Sistemas**, **AnalyticsLog**.
- Revisar todo o texto (erros listados na Visão geral) e trocar emojis por ícones de linha (Lucide).
- Botão flutuante de WhatsApp com mensagem pré-preenchida por página (ex.: "Quero conhecer o ChatSWT").
- Corrigir ou remover os links mortos do rodapé (currículo, 2ª via de boleto, downloads).
- Mover o texto "O que é um chat-bot?" para o blog e criar 3–4 posts de SEO (DT-e, CT-e, rastreamento, SSW).
- Stack sugerida: Next.js ou Astro + Tailwind na Vercel, formulário enviando para WhatsApp/e-mail, Pixel e GA4.

### Perguntas em aberto

- [ ] O AnalyticsLog é produto da Softweb e entra no novo site?
- [ ] A Softweb é revenda/parceira oficial do SSW? Pode usar a marca e o número "+1.000 transportadoras"?
- [ ] Existem preços ou planos que possam ser mostrados?
- [ ] Há depoimentos e números próprios (clientes ativos, apps publicados)?
- [ ] O logo será mantido ou redesenhado?
