# SKF Arquitetura — Site Institucional

Site premium para escritório de arquitetura e interiores, construído com
React, CSS Modules e GSAP (via `useGSAP`).

## Como rodar o projeto

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

O site abrirá em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais são gerados na pasta `dist/`, prontos para publicar em
qualquer serviço de hospedagem estática (Vercel, Netlify, Hostinger, etc).

## Estrutura

```
src/
  assets/            fotos da fundadora enviadas por você
  components/        um componente por seção do site (JSX + .module.css)
  hooks/              useRevelarAoRolar.js — hook GSAP para os fade-ups
  lib/gsapSetup.js    registro do plugin ScrollTrigger
  styles/global.css   tokens de cor, tipografia e reset global
  App.jsx             composição das seções
  main.jsx            ponto de entrada React
```

## O que ajustar antes de publicar

1. **WhatsApp**: troque o número `5516999999999` em
   `src/components/ContatoCTA/ContatoCTA.jsx` e
   `src/components/WhatsApp/WhatsAppFlutuante.jsx` pelo número real (formato
   `55DDXXXXXXXXX`).
2. **Formulário de contato**: hoje o formulário apenas simula o envio (mostra
   uma mensagem de confirmação). Para receber os leads de verdade, conecte-o
   a um serviço como Formspree, EmailJS, ou a uma rota própria de backend —
   troque a função `aoEnviar` em `ContatoCTA.jsx`.
3. **Fotos de projetos**: as imagens de arquitetura/interiores usadas nas
   seções "Projetos em Destaque" e "Portfólio" são fotos de banco de imagens
   (Unsplash, uso livre) — troque pelos projetos reais da SKF assim que
   tiver as fotos em alta resolução.
4. **Textos**: números de anos de atuação, prêmios, depoimentos e projetos
   são exemplos ilustrativos — ajuste com os dados reais do escritório.
5. **Redes sociais e e-mail**: atualize os links no rodapé
   (`src/components/Footer/Footer.jsx`).
6. **CAU**: o rodapé tem um espaço reservado para o número de registro no
   CAU — preencha com o número real.
