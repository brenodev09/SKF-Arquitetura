import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsapSetup';
import useRevelarAoRolar from '../../hooks/useRevelarAoRolar';
import retrato from '../../assets/fundadora-retrato.jpg';
import ambiente from '../../assets/fundadora-ambiente.jpg';
import estilos from './Sobre.module.css';

const NUMEROS = [
  { valor: 12, sufixo: '+', rotulo: 'Anos de atuação' },
  { valor: 140, sufixo: '+', rotulo: 'Projetos entregues' },
  { valor: 9, sufixo: '', rotulo: 'Prêmios e reconhecimentos' },
  { valor: 98, sufixo: '%', rotulo: 'Clientes que indicam a SKF' },
];

const DIFERENCIAIS = [
  {
    titulo: 'Projeto autoral',
    texto: 'Cada residência nasce de uma escuta ativa do cliente — nenhum projeto é replicado.',
  },
  {
    titulo: 'Acompanhamento integral',
    texto: 'Da concepção à entrega das chaves, a equipe acompanha obra, fornecedores e prazos.',
  },
  {
    titulo: 'Curadoria de materiais',
    texto: 'Seleção criteriosa de acabamentos, marcenaria e iluminação junto a fornecedores parceiros.',
  },
];

export default function Sobre() {
  const raiz = useRef(null);
  useRevelarAoRolar(raiz);

  useGSAP(
    () => {
      // Reveal com máscara na foto principal
      gsap.set(`.${estilos.fotoPrincipal} img`, { clipPath: 'inset(0 0 0 0)', scale: 1.16 });
      gsap.fromTo(
        `.${estilos.fotoPrincipal}`,
        { clipPath: 'inset(0 0 0 100%)' },
        {
          clipPath: 'inset(0 0 0 0%)',
          duration: 1.3,
          ease: 'expo.inOut',
          scrollTrigger: { trigger: `.${estilos.composicao}`, start: 'top 78%' },
        }
      );
      gsap.to(`.${estilos.fotoPrincipal} img`, {
        scale: 1,
        duration: 1.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.composicao}`, start: 'top 78%' },
      });
      gsap.from(`.${estilos.fotoAmbiente}`, {
        opacity: 0,
        y: 24,
        duration: 0.9,
        delay: 0.35,
        ease: 'power3.out',
        scrollTrigger: { trigger: `.${estilos.composicao}`, start: 'top 78%' },
      });
    },
    { scope: raiz }
  );

  // Contadores animados — usa IntersectionObserver nativo em vez de
  // ScrollTrigger para este caso específico: como a faixa de números
  // fica fora da grade principal e seu deslocamento vertical pode
  // mudar conforme fontes/imagens carregam, calcular a posição do
  // gatilho uma única vez (como o ScrollTrigger faz) é frágil demais.
  // O IntersectionObserver reavalia a visibilidade continuamente, então
  // funciona mesmo que o layout se ajuste depois da primeira renderização.
  useEffect(() => {
    const elementosNumero = raiz.current?.querySelectorAll(`.${estilos.numero}`);
    if (!elementosNumero || !elementosNumero.length) return undefined;

    const observador = new IntersectionObserver(
      (entradas, obs) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;

          const el = entrada.target;
          const alvo = Number(el.dataset.valor) || 0;
          const contador = { n: 0 };

          gsap.to(contador, {
            n: alvo,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.round(contador.n).toLocaleString('pt-BR');
            },
          });

          obs.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    elementosNumero.forEach((el) => observador.observe(el));

    return () => observador.disconnect();
  }, []);

  return (
    <section id="sobre" className={estilos.secao} ref={raiz}>
      <div className="container">
        <div className={estilos.grade}>
          <div className={estilos.composicao} data-reveal>
            <div className={estilos.fotoPrincipal}>
              <img src={retrato} alt="Fundadora e arquiteta responsável pela SKF Arquitetura" />
            </div>
            <div className={estilos.fotoAmbiente}>
              <img src={ambiente} alt="Fundadora da SKF Arquitetura em ambiente do escritório" />
            </div>
            <div className={estilos.cartaoSelo}>
              <span className={estilos.seloNumero}>12+</span>
              <span className={estilos.seloTexto}>anos conduzindo projetos autorais de arquitetura e interiores</span>
            </div>
          </div>

          <div className={estilos.colunaTexto}>
            <span className="rotulo" data-reveal>
              A fundadora
            </span>
            <h2 className={estilos.titulo} data-reveal>
              Arquitetura conduzida por sensibilidade, técnica e escuta
            </h2>
            <p className={estilos.paragrafo} data-reveal>
              À frente da SKF Arquitetura, a arquiteta constrói cada projeto a partir de
              uma pergunta simples: como este espaço deve fazer alguém se sentir? Formada
              com especialização em arquitetura de interiores de alto padrão, ela reúne um
              olhar autoral a uma gestão de obra rigorosa — o que resulta em residências e
              ambientes corporativos que unem estética, funcionalidade e identidade.
            </p>
            <p className={estilos.paragrafo} data-reveal>
              Ao longo de mais de uma década, liderou projetos residenciais e comerciais
              em todo o estado de São Paulo, construindo um escritório reconhecido pela
              exclusividade do atendimento e pela precisão na execução.
            </p>

            <ul className={estilos.listaDiferenciais} data-reveal>
              {DIFERENCIAIS.map((item, indice) => (
                <li key={item.titulo}>
                  <span className={estilos.indiceDiferencial}>{String(indice + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className={estilos.faixaNumeros}>
        <div className="container">
          <div className={estilos.gradeNumeros}>
            {NUMEROS.map((item) => (
              <div className={estilos.itemNumero} key={item.rotulo} data-reveal>
                <p className={estilos.valorNumero}>
                  <span className={estilos.numero} data-valor={item.valor}>
                    0
                  </span>
                  {item.sufixo}
                </p>
                <p className={estilos.rotuloNumero}>{item.rotulo}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
