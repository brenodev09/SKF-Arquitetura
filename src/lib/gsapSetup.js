import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// As fontes web e as imagens carregam de forma assíncrona e alteram a altura
// da página depois que o ScrollTrigger já calculou as posições dos gatilhos.
// Sem isso, seções abaixo do fold (como os números da seção "Sobre") podem
// nunca disparar a animação no momento certo. Atualizamos os cálculos assim
// que as fontes carregam e a cada imagem que termina de carregar.
if (typeof window !== 'undefined') {
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  window.addEventListener('load', () => ScrollTrigger.refresh());

  document.addEventListener(
    'DOMContentLoaded',
    () => {
      document.querySelectorAll('img').forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
        }
      });
    },
    { once: true }
  );
}

export { gsap, ScrollTrigger };
