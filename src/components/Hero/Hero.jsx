import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsapSetup';
import estilos from './Hero.module.css';

const IMG_HERO =
  'https://images.unsplash.com/photo-1757359056339-22968344cce6?auto=format&fit=crop&w=1800&q=80';

export default function Hero() {
  const raiz = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(`.${estilos.cortina}`, {
        scaleX: 0,
        duration: 1.3,
        ease: 'expo.inOut',
      })
        .fromTo(
          `.${estilos.imagem} img`,
          { scale: 1.25 },
          { scale: 1, duration: 1.8, ease: 'power3.out' },
          0
        )
        .from(
          `.${estilos.rotulo}, .${estilos.linhaTitulo}, .${estilos.texto}, .${estilos.acoes}, .${estilos.rodapeHero}`,
          {
            y: 26,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.7'
        );
    },
    { scope: raiz }
  );

  return (
    <section id="topo" className={estilos.hero} ref={raiz}>
      <div className={estilos.imagem}>
        <img src={IMG_HERO} alt="Residência contemporânea projetada pela SKF Arquitetura" />
        <div className={estilos.veu} />
      </div>
      <div className={estilos.cortina} />

      <div className={estilos.conteudo}>
        <span className={estilos.rotulo}>Arquitetura & Interiores autorais</span>
        <h1 className={estilos.linhaTitulo}>
          Espaços que <em>revelam</em>
          <br /> quem os habita
        </h1>
        <p className={estilos.texto}>
          A SKF Arquitetura projeta residências e ambientes corporativos de alto padrão,
          equilibrando técnica, sensibilidade estética e a identidade de cada cliente
          em cada linha do projeto.
        </p>
        <div className={estilos.acoes}>
          <a href="#contato" className={estilos.botaoPrincipal}>
            Solicitar orçamento
          </a>
          <a href="#projetos" className={estilos.botaoSecundario}>
            Ver projetos
          </a>
        </div>
      </div>

      <div className={estilos.rodapeHero}>
        <span>Desde 2013 — projetos autorais em todo o Brasil</span>
        <span className={estilos.scroll}>Role para explorar</span>
      </div>
    </section>
  );
}
