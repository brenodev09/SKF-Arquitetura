import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsapSetup';

/**
 * Anima, com fade-up suave, todos os elementos com o atributo
 * data-reveal dentro do elemento referenciado por scopeRef.
 */
export default function useRevelarAoRolar(scopeRef, opcoes = {}) {
  const { stagger = 0.12, y = 40, start = 'top 82%' } = opcoes;

  useGSAP(
    () => {
      const alvos = gsap.utils.toArray('[data-reveal]');
      if (!alvos.length) return;

      alvos.forEach((grupo) => {
        gsap.from(grupo, {
          y,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: grupo,
            start,
          },
        });
      });
    },
    { scope: scopeRef }
  );
}
