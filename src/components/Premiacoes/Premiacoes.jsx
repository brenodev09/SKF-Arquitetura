import { useRef } from 'react';
import useRevelarAoRolar from '../../hooks/useRevelarAoRolar';
import estilos from './Premiacoes.module.css';

const RECONHECIMENTOS = [
  {
    ano: '2024',
    titulo: 'Prêmio Casa & Design — Categoria Residencial',
    texto: 'Reconhecimento pela Residência Alto da Serra, entre os 10 projetos mais votados do estado.',
  },
  {
    ano: '2023',
    titulo: 'Palestrante — Fórum Interiores SP',
    texto: 'Participação como palestrante convidada sobre curadoria de materiais em projetos autorais.',
  },
  {
    ano: '2022',
    titulo: 'Menção Honrosa — Bienal de Arquitetura Regional',
    texto: 'Projeto Cobertura Jardim Europa selecionado entre os destaques da mostra regional.',
  },
  {
    ano: '2021',
    titulo: 'Featured — Revista Ambientes',
    texto: 'Editorial de seis páginas sobre o processo criativo e os bastidores do escritório.',
  },
];

export default function Premiacoes() {
  const raiz = useRef(null);
  useRevelarAoRolar(raiz);

  return (
    <section className={estilos.secao} ref={raiz}>
      <div className="container">
        <div className={estilos.cabecalho} data-reveal>
          <span className="rotulo">Premiações & reconhecimentos</span>
          <h2 className={estilos.titulo}>Um trabalho reconhecido pelo setor</h2>
        </div>

        <div className={estilos.linhaTempo}>
          {RECONHECIMENTOS.map((item) => (
            <div className={estilos.marco} key={item.titulo} data-reveal>
              <span className={estilos.ano}>{item.ano}</span>
              <div className={estilos.corpoMarco}>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
