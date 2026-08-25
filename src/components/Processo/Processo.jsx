import { useRef } from 'react';
import useRevelarAoRolar from '../../hooks/useRevelarAoRolar';
import estilos from './Processo.module.css';

const ETAPAS = [
  {
    numero: '01',
    titulo: 'Escuta & Briefing',
    texto:
      'Reunião de imersão para compreender rotina, referências estéticas e expectativas do cliente com o espaço.',
  },
  {
    numero: '02',
    titulo: 'Estudo & Conceito',
    texto:
      'Desenvolvimento do partido arquitetônico, plantas de layout, moodboards e primeiras imagens 3D do projeto.',
  },
  {
    numero: '03',
    titulo: 'Projeto Executivo',
    texto:
      'Detalhamento técnico completo — marcenaria, elétrica, hidráulica e especificação de acabamentos e mobiliário.',
  },
  {
    numero: '04',
    titulo: 'Acompanhamento de Obra',
    texto:
      'Gestão e visitas periódicas para garantir fidelidade ao projeto até a entrega final das chaves.',
  },
];

export default function Processo() {
  const raiz = useRef(null);
  useRevelarAoRolar(raiz);

  return (
    <section id="processo" className={estilos.secao} ref={raiz}>
      <div className="container">
        <div className={estilos.cabecalho} data-reveal>
          <span className="rotulo">Processo de trabalho</span>
          <h2 className={estilos.titulo}>Quatro etapas, uma só direção</h2>
        </div>

        <div className={estilos.linhaEtapas}>
          {ETAPAS.map((etapa) => (
            <div className={estilos.etapa} key={etapa.numero} data-reveal>
              <span className={estilos.numero}>{etapa.numero}</span>
              <h3>{etapa.titulo}</h3>
              <p>{etapa.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
