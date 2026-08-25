import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

// As folhas de estilo base do Swiper precisam ser importadas ANTES do
// CSS Module do componente. Módulos CSS e o CSS do Swiper têm a mesma
// especificidade (uma classe), então quem for importado por último
// vence a cascata — se o Swiper viesse depois, `.swiper-slide { width:
// 100% }` sobrescrevia a largura customizada dos cartões, esticando as
// imagens e distorcendo o carrossel inteiro.
import 'swiper/css';
import 'swiper/css/free-mode';

import useRevelarAoRolar from '../../hooks/useRevelarAoRolar';
import estilos from './ProjetosDestaque.module.css';

const PROJETOS = [
  {
    id: 'p1',
    nome: 'Residência Alto da Serra',
    local: 'Campinas, SP',
    ano: '2024',
    categoria: 'Residencial',
    img: 'https://images.unsplash.com/photo-1757359056339-22968344cce6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p2',
    nome: 'Living Jardim Europa',
    local: 'São Paulo, SP',
    ano: '2023',
    categoria: 'Interiores',
    img: 'https://images.unsplash.com/photo-1759238136854-a43787126db7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p3',
    nome: 'Cozinha Gourmet Ipanema',
    local: 'Ribeirão Preto, SP',
    ano: '2023',
    categoria: 'Interiores',
    img: 'https://images.unsplash.com/photo-1682888813788-bf57c360123e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p4',
    nome: 'Escada Escultural — Estúdio SKF',
    local: 'Jaboticabal, SP',
    ano: '2023',
    categoria: 'Reforma',
    img: 'https://images.unsplash.com/photo-1767218902235-51b698637a4f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p5',
    nome: 'Galeria Corporativa Central',
    local: 'São Paulo, SP',
    ano: '2022',
    categoria: 'Comercial',
    img: 'https://images.unsplash.com/photo-1762928289094-197055a5d5c3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'p6',
    nome: 'Casa de Campo Serra Negra',
    local: 'Serra Negra, SP',
    ano: '2022',
    categoria: 'Residencial',
    img: 'https://images.unsplash.com/photo-1757359056339-22968344cce6?auto=format&fit=crop&w=1000&q=80&flip=h',
  },
];

// Deslocamento vertical de cada slide para criar o efeito de
// cascata/escada visto no carrossel de referência.
const DESLOCAMENTOS = [0, 56, 112, 56, 0, 56];

export default function ProjetosDestaque() {
  const raiz = useRef(null);
  useRevelarAoRolar(raiz);

  return (
    <section id="projetos" className={estilos.secao} ref={raiz}>
      <div className="container">
        <div className={estilos.cabecalho} data-reveal>
          <div className={estilos.cabecalhoTexto}>
            <span className="rotulo">Projetos recentes</span>
            <h2 className={estilos.titulo}>
              Uma seleção de obras que traduzem o repertório da SKF
            </h2>
          </div>
          <span className={estilos.dica}>Arraste para navegar</span>
        </div>
      </div>

      <div className={estilos.envoltorioCarrossel} data-reveal>
        <Swiper
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentumRatio: 0.7, sticky: false }}
          grabCursor
          slidesPerView="auto"
          spaceBetween={28}
          slidesOffsetBefore={24}
          slidesOffsetAfter={24}
          className={estilos.swiper}
          breakpoints={{
            640: { slidesOffsetBefore: 40, slidesOffsetAfter: 40, spaceBetween: 32 },
            1024: { slidesOffsetBefore: 64, slidesOffsetAfter: 64, spaceBetween: 32 },
          }}
        >
          {PROJETOS.map((projeto, indice) => (
            <SwiperSlide key={projeto.id} className={estilos.slide}>
              <a
                href="#portfolio"
                className={estilos.cartao}
                style={{ marginTop: `${DESLOCAMENTOS[indice % DESLOCAMENTOS.length]}px` }}
              >
                <div className={estilos.molduraImagem}>
                  <img src={projeto.img} alt={projeto.nome} loading="lazy" draggable="false" />
                  <span className={estilos.categoria}>{projeto.categoria}</span>
                </div>
                <div className={estilos.infoCartao}>
                  <h3>{projeto.nome}</h3>
                  <p>
                    {projeto.local} — {projeto.ano}
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
