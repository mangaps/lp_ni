# Narrativa Social — Prompt para GitHub Copilot

## Contexto do projeto

Estou refundando o site narrativasocial.com. Tenho um protótipo HTML completo
com o design final aprovado (`narrativa_social_landing.html`). Quero que você
reconstrua o site nesse arquivo como base visual e de código, reaproveitando
os conteúdos (artigos, fotos, textos) já existentes no projeto atual.

O arquivo `narrativa_social_landing.html` é a fonte da verdade para:
- Paleta de cores (variáveis CSS no `:root`)
- Tipografia (Playfair Display + Outfit via Google Fonts)
- Layout e estrutura de seções
- Todos os componentes (nav, hero, cards, banner, footer)

Não altere nenhuma decisão de design sem que eu peça.

---

## O logo

O logo é **tipográfico — não é uma imagem**. Não precisa criar nenhum arquivo
de logo. Ele é gerado puramente com CSS e HTML:

```html
<div class="nav-logo">Narrativa<span>.</span>Social</div>
```

```css
.nav-logo {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}
.nav-logo span { color: #C8892A; } /* o ponto dourado é o único elemento de cor */
```

Use exatamente esse padrão no nav, no footer e em qualquer outro lugar que
o logo apareça.

---

## Paleta de cores (não alterar)

```css
:root {
  --bg:           #0B0D10;   /* fundo principal */
  --bg-card:      #13161C;   /* cards e superfícies */
  --bg-subtle:    #1A1E26;   /* hover states */
  --text:         #EDE8DC;   /* texto principal */
  --text-muted:   #7A7670;   /* texto secundário */
  --text-dim:     #4A4844;   /* texto terciário / metadados */
  --accent:       #C8892A;   /* âmbar — CTAs primários, destaques */
  --accent-light: #E09B30;   /* hover do âmbar */
  --teal:         #1B9068;   /* verde — Tagarelo */
  --teal-light:   #22B07E;   /* hover do verde */
  --border:       rgba(237,232,220,0.08);
  --border-med:   rgba(237,232,220,0.14);
}
```

---

## Fontes

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet" />
```

- `Playfair Display` → todos os títulos (`h1`, `h2`, `h3`, `.nav-logo`, blockquotes)
- `Outfit` → todo o restante (body, labels, botões, inputs)

---

## Estrutura de seções (ordem exata)

1. **Nav** — logo + links + botão "Receber newsletter"
2. **Hero** — headline + subtítulo + bloco de captura de email (newsletter)
3. **O que fazemos** — headline + texto + grid 2×2 de serviços + banner Tagarelo
4. **Para quem** — 2 cards ICP (analistas e C-level)
5. **Logos / prova social** — logos de empresas anteriores
6. **O fundador** — foto + bio de Henrique
7. **Artigos e cases** — grid 3 colunas com artigos do blog
8. **Footer capture** — segundo bloco de captura de email
9. **Footer** — logo + links + copyright

---

## Assets a reaproveitar do site atual

Todos os assets abaixo já existem no projeto. Não preciso enviá-los novamente.
Apenas referenciá-los nos caminhos corretos.

### Foto de Henrique
- Usar a foto de perfil já existente no site atual
- Aplicar no componente `.founder-avatar` substituindo o placeholder `HP`
- Estilo: `border-radius: 50%`, `width: 80px`, `height: 80px`, `object-fit: cover`

### Artigos e cases
Os três artigos do grid já existem como páginas no site atual:

| Título | Tipo | Data | Tempo leitura |
|--------|------|------|---------------|
| Análise de Cenário Digital | Case | — | 10 min |
| Quando terras raras viram munição política | Artigo | 3 dez 2025 | 4 min |
| Quando a distribuição decide eleições | Artigo | 18 nov 2025 | 7 min |

- Manter os links para as páginas internas de cada artigo
- Não é necessário recriar o conteúdo dos artigos, apenas os cards de preview
- Estrutura do card está no HTML de referência (`.article-card`)

### Logos de clientes
Já existem no site atual. Referenciar os mesmos arquivos:
Ambev, Itaú, Kenvue, Heineken, Warner Bros. Discovery, Saint-Gobain,
Bristol Myers Squibb, Dyson

---

## Formulários de captura de email

O site tem **dois** formulários de email (hero e footer). Ambos precisam de
integração com um serviço de email marketing.

### Opções recomendadas (escolha uma):
- **Beehiiv** — recomendado se a newsletter já está lá
- **ConvertKit / Kit** — alternativa popular
- **Resend + banco próprio** — mais controle, mais trabalho

### Implementação básica (substituir pelo endpoint real):
```html
<form action="SEU_ENDPOINT_AQUI" method="POST">
  <input type="email" name="email" placeholder="seu@email.com" required />
  <button type="submit">Quero receber</button>
</form>
```

Se usar Beehiiv, o embed deles substitui o `<form>` acima — peça o código
de embed nas configurações da publicação.

### Formulário do Tagarelo (banner verde)
Esse formulário é separado da newsletter. Captura interessados no early
access do Tagarelo. Pode usar um Google Forms simples por ora, ou o mesmo
serviço de email com uma tag/segmento diferente.

---

## Banner do Tagarelo (destaques importantes)

```html
<div class="tagarelo-banner" id="tagarelo">
  <div class="tagarelo-banner-text">
    <p class="banner-eyebrow">Em breve · Tagarelo</p>
    <h3>Nossos serviços são o laboratório em operação.</h3>
    <p>O mesmo método que entregamos nos projetos está sendo embalado
    num produto. O primeiro é o tagarelo — classificação de texto em
    escala, com os seus critérios, em minutos. Quem entra cedo ajuda
    a definir o que o produto se torna.</p>
  </div>
  <div class="banner-cta-block">
    <button class="btn-teal-filled">Quero ser early adopter →</button>
    <p class="banner-cta-sub">Vagas limitadas · Early adopters definem o produto</p>
  </div>
</div>
```

O banner tem:
- Fundo escuro com tom esverdeado (diferente dos cards cinza)
- Linha verde no topo (`::before` com gradiente)
- Botão preenchido verde sólido (não outline)
- Posicionado logo após o grid de serviços, antes da seção "Para quem"

---

## Estrutura de arquivos sugerida

Se for usar HTML/CSS puro:
```
/
├── index.html          ← landing page (baseada no protótipo)
├── assets/
│   ├── css/style.css   ← extrair o <style> do protótipo
│   ├── img/            ← fotos e logos
│   └── fonts/          ← (Google Fonts carrega via CDN, não precisa local)
├── artigos/
│   ├── analise-cenario-digital.html
│   ├── terras-raras.html
│   └── distribuicao-eleicoes.html
└── politica-privacidade.html
```

Se for usar Astro (recomendado para o blog):
```
/
├── src/
│   ├── pages/
│   │   ├── index.astro       ← landing page
│   │   └── artigos/
│   │       └── [slug].astro  ← template de artigo
│   ├── content/
│   │   └── artigos/          ← arquivos .md com os artigos
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── TagareloBanner.astro
│   │   └── ArticleCard.astro
│   └── layouts/
│       └── Base.astro        ← head, nav, footer
├── public/
│   └── assets/img/
└── astro.config.mjs
```

---

## Comportamentos e interações

- **Nav sticky** com `backdrop-filter: blur(12px)` e fundo semitransparente
- **Hover nos cards de serviço**: fundo muda de `--bg-card` para `--bg-subtle`
- **Hover nos cards ICP**: linha colorida animada aparece na base do card (`::after` com `scaleX`)
- **Hover nos article cards**: borda e fundo ficam levemente mais claros
- **Focus nos inputs de email**: borda muda para `--accent` (âmbar)
- **Scroll suave** entre seções via `scroll-behavior: smooth`
- **Responsivo** com breakpoint em 680px (ver media queries no protótipo)

---

## O que NÃO alterar

- Nenhuma cor fora da paleta definida
- Nenhuma fonte diferente de Playfair Display e Outfit
- Ordem das seções
- Copy (textos) de qualquer seção — especialmente do banner Tagarelo
- O logo tipográfico

---

## O que você pode e deve fazer

- Extrair o CSS inline para um arquivo `.css` separado
- Transformar seções repetidas em componentes (se usar framework)
- Substituir placeholders pelos assets reais (foto, logos, links de artigos)
- Conectar os formulários ao serviço de email escolhido
- Garantir que todos os links internos funcionem
- Adicionar `<meta>` tags de SEO básicas em cada página
- Garantir acessibilidade básica (`alt` em imagens, `aria-label` onde necessário)

---

## Referência visual completa

O arquivo `narrativa_social_landing.html` contém o HTML e CSS completos
e aprovados. Use-o como fonte de verdade para qualquer dúvida de
implementação.
