import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import useRevelarAoRolar from '../../hooks/useRevelarAoRolar';
import estilos from './Depoimentos.module.css';

const DEPOIMENTOS = [
  {
    nome: 'Camila R.',
    projeto: 'Residência Alto da Serra',
    texto:
      'A equipe entendeu exatamente o que buscávamos, mesmo quando nós ainda não sabíamos explicar. O resultado supera qualquer referência que levamos para a primeira reunião.',
  },
  {
    nome: 'Eduardo M.',
    projeto: 'Cobertura Jardim Europa',
    texto:
      'Acompanhamento de obra impecável — cada detalhe combinado no projeto foi executado com precisão, sem surpresas de prazo ou orçamento.',
  },
  {
    nome: 'Fernanda & Lucas',
    projeto: 'Reforma Retrofit Batel',
    texto:
      'Transformaram um apartamento antigo em um espaço que parece ter sido pensado do zero. Um processo leve, transparente e muito bem conduzido.',
  },
  {
    nome: 'Renato P.',
    projeto: 'Galeria Corporativa Central',
    texto:
      'Profissionalismo raro no mercado. Da concepção à entrega, sentimos que o projeto era conduzido com o mesmo cuidado que teríamos com a nossa própria casa.',
  },
];

export default function Depoimentos() {
  const raiz = useRef(null);
  useRevelarAoRolar(raiz);

  return (
    <section className={estilos.secao} ref={raiz}>
      <div className="container">
        <div className={estilos.cabecalho} data-reveal>
          <span className="rotulo">Depoimentos</span>
          <h2 className={estilos.titulo}>O que dizem os clientes SKF</h2>
        </div>
      </div>

      <div className={estilos.envoltorioCarrossel} data-reveal>
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
          loop
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          pagination={{ el: `.${estilos.paginacao}`, clickable: true }}
          className={estilos.swiper}
        >
          {DEPOIMENTOS.map((item) => (
            <SwiperSlide key={item.nome}>
              <div className="container">
                <div className={estilos.cartao}>
                  <div className={estilos.monograma} aria-hidden="true">
                    {item.nome.charAt(0)}
                  </div>
                  <div className={estilos.corpo}>
                    <span className={estilos.aspas}>“</span>
                    <p className={estilos.texto}>{item.texto}</p>
                    <div className={estilos.autor}>
                      <span className={estilos.nome}>{item.nome}</span>
                      <span className={estilos.projeto}>{item.projeto}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="container">
          <div className={estilos.rodapeCarrossel}>
            <span className={estilos.dica}>Arraste para o lado para ver mais</span>
            <div className={estilos.paginacao} />
          </div>
        </div>
      </div>
    </section>
  );
}
