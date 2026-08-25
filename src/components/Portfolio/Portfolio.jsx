import { useEffect, useMemo, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsapSetup';
import useRevelarAoRolar from '../../hooks/useRevelarAoRolar';
import estilos from './Portfolio.module.css';

import fachadaMonterey from '../../assets/portfolio-fachada-monterey.jpg';
import fachadaResidencia from '../../assets/portfolio-fachada-residencia.jpg';
import cozinha from '../../assets/portfolio-cozinha.jpg';
import salaJantar from '../../assets/portfolio-sala-jantar.jpg';
import living from '../../assets/portfolio-sala.jpg';
import lojaMarshmallow from '../../assets/portfolio-loja-marshmallow.mp4';

const CATEGORIAS = ['Todos', 'Residencial', 'Interiores', 'Reforma', 'Comercial'];

const ITENS = [
  // Projetos reais
  {
    id: 'r1',
    nome: 'Fachada Monterey',
    categoria: 'Residencial',
    img: fachadaMonterey,
  },
  {
    id: 'r2',
    nome: 'Residência com Garagem Integrada',
    categoria: 'Residencial',
    img: fachadaResidencia,
  },
  {
    id: 'r3',
    nome: 'Cozinha Gourmet Integrada',
    categoria: 'Interiores',
    img: cozinha,
  },
  {
    id: 'r4',
    nome: 'Sala de Jantar Autoral',
    categoria: 'Interiores',
    img: salaJantar,
  },
  {
    id: 'r5',
    nome: 'Living Contemporâneo',
    categoria: 'Interiores',
    img: living,
  },
  {
    id: 'r6',
    nome: 'Loja Marshmallow Kids',
    categoria: 'Comercial',
    tipo: 'video',
    img: lojaMarshmallow,
  },
  // Projetos ilustrativos — complementam o volume da grade
  {
    id: 'i4',
    nome: 'Escada Escultural — Estúdio SKF',
    categoria: 'Reforma',
    img: 'https://images.unsplash.com/photo-1767218902235-51b698637a4f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'i5',
    nome: 'Galeria Corporativa Central',
    categoria: 'Comercial',
    img: 'https://images.unsplash.com/photo-1762928289094-197055a5d5c3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'i6',
    nome: 'Retrofit Cobertura Batel',
    categoria: 'Reforma',
    img: 'https://images.unsplash.com/photo-1682888813788-bf57c360123e?auto=format&fit=crop&w=1000&q=80&sat=-20',
  },
  {
    id: 'i7',
    nome: 'Casa de Campo Serra Negra',
    categoria: 'Residencial',
    img: 'https://images.unsplash.com/photo-1757359056339-22968344cce6?auto=format&fit=crop&w=1000&q=80&flip=h',
  },
];

// --- Ícones (SVG inline, sem dependência externa) ---

function IconePlay() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function IconePausa() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

function IconeSom() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M4 9v6h4l5 5V4L8 9H4z" />
      <path d="M16.4 8.4a5.6 5.6 0 0 1 0 7.2M19 6a9 9 0 0 1 0 12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function IconeMudo() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M4 9v6h4l5 5V4L8 9H4z" />
      <path d="M16 9l6 6M22 9l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconeExpandir() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function IconeFechar() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

// --- Cartão individual (imagem ou vídeo) ---

function ItemPortfolio({ item, aoExpandirVideo }) {
  const ehVideo = item.tipo === 'video';
  const videoRef = useRef(null);
  const [tocando, setTocando] = useState(true);
  const [mudo, setMudo] = useState(true);
  const [volume, setVolume] = useState(0.6);

  const alternarReproducao = (evento) => {
    evento.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setTocando(true);
    } else {
      video.pause();
      setTocando(false);
    }
  };

  const alternarMudo = (evento) => {
    evento.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const novoMudo = !video.muted;
    video.muted = novoMudo;
    if (!novoMudo && video.volume === 0) {
      video.volume = 0.6;
      setVolume(0.6);
    }
    setMudo(novoMudo);
  };

  const aoMudarVolume = (evento) => {
    evento.stopPropagation();
    const valor = Number(evento.target.value);
    setVolume(valor);
    if (videoRef.current) {
      videoRef.current.volume = valor;
      videoRef.current.muted = valor === 0;
      setMudo(valor === 0);
    }
  };

  return (
    <figure className={`${estilos.item} ${ehVideo ? estilos.itemDestaque : ''}`}>
      <div className={estilos.molduraFoto}>
        {ehVideo ? (
          <video
            ref={videoRef}
            src={item.img}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={item.nome}
          />
        ) : (
          <img src={item.img} alt={item.nome} loading="lazy" />
        )}

        {ehVideo ? (
          <>
            <div className={estilos.legendaVideo}>
              <span>{item.categoria}</span>
              <p>{item.nome}</p>
            </div>

            <div className={estilos.controlesVideo} onClick={(evento) => evento.stopPropagation()}>
              <button
                type="button"
                className={estilos.botaoControle}
                onClick={alternarReproducao}
                aria-label={tocando ? 'Pausar vídeo' : 'Reproduzir vídeo'}
              >
                {tocando ? <IconePausa /> : <IconePlay />}
              </button>

              <button
                type="button"
                className={estilos.botaoControle}
                onClick={alternarMudo}
                aria-label={mudo ? 'Ativar som' : 'Silenciar vídeo'}
              >
                {mudo ? <IconeMudo /> : <IconeSom />}
              </button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={mudo ? 0 : volume}
                onChange={aoMudarVolume}
                className={estilos.sliderVolume}
                aria-label="Volume do vídeo"
              />

              <button
                type="button"
                className={`${estilos.botaoControle} ${estilos.botaoExpandir}`}
                onClick={() => aoExpandirVideo(item)}
                aria-label="Expandir vídeo"
              >
                <IconeExpandir />
              </button>
            </div>
          </>
        ) : (
          <div className={estilos.sobreposicao}>
            <span>{item.categoria}</span>
            <p>{item.nome}</p>
          </div>
        )}
      </div>
    </figure>
  );
}

// --- Janela de vídeo expandido (modal) ---

function ModalVideo({ item, aoFechar }) {
  useEffect(() => {
    // Sem item, o modal nem está visível — não faz sentido travar o
    // scroll da página (era exatamente esse o bug: o efeito rodava no
    // mount mesmo com item=null e nunca liberava o overflow).
    if (!item) return undefined;

    document.body.style.overflow = 'hidden';

    const aoTeclado = (evento) => {
      if (evento.key === 'Escape') aoFechar();
    };
    window.addEventListener('keydown', aoTeclado);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', aoTeclado);
    };
  }, [item, aoFechar]);

  if (!item) return null;

  return (
    <div className={estilos.overlayModal} onClick={aoFechar}>
      <div className={estilos.janelaModal} onClick={(evento) => evento.stopPropagation()}>
        <button type="button" className={estilos.botaoFecharModal} onClick={aoFechar} aria-label="Fechar vídeo">
          <IconeFechar />
        </button>

        <video
          key={item.id}
          src={item.img}
          className={estilos.videoModal}
          controls
          autoPlay
          playsInline
        />

        <div className={estilos.legendaModal}>
          <span>{item.categoria}</span>
          <p>{item.nome}</p>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const raiz = useRef(null);
  const grade = useRef(null);
  const [filtro, setFiltro] = useState('Todos');
  const [itemExpandido, setItemExpandido] = useState(null);

  const itensFiltrados = useMemo(
    () => (filtro === 'Todos' ? ITENS : ITENS.filter((item) => item.categoria === filtro)),
    [filtro]
  );

  useRevelarAoRolar(raiz);

  useGSAP(
    () => {
      gsap.fromTo(
        `.${estilos.item}`,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out' }
      );
    },
    { scope: grade, dependencies: [filtro] }
  );

  return (
    <section id="portfolio" className={estilos.secao} ref={raiz}>
      <div className="container">
        <div className={estilos.cabecalho} data-reveal>
          <span className="rotulo">Portfólio completo</span>
          <h2 className={estilos.titulo}>Projetos organizados por especialidade</h2>
        </div>

        <div className={estilos.filtros} data-reveal>
          {CATEGORIAS.map((categoria) => (
            <button
              key={categoria}
              className={`${estilos.botaoFiltro} ${filtro === categoria ? estilos.filtroAtivo : ''}`}
              onClick={() => setFiltro(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>

        <div className={estilos.grade} ref={grade}>
          {itensFiltrados.map((item) => (
            <ItemPortfolio key={item.id} item={item} aoExpandirVideo={setItemExpandido} />
          ))}
        </div>
      </div>

      <ModalVideo item={itemExpandido} aoFechar={() => setItemExpandido(null)} />
    </section>
  );
}