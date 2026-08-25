import { useRef } from 'react';
import useRevelarAoRolar from '../../hooks/useRevelarAoRolar';
import estilos from './Servicos.module.css';

const SERVICOS = [
  {
    id: 's1',
    titulo: 'Arquitetura Residencial',
    texto:
      'Projetos completos de casas e apartamentos, do estudo de viabilidade ao projeto executivo aprovado.',
  },
  {
    id: 's2',
    titulo: 'Design de Interiores',
    texto:
      'Composição de ambientes, marcenaria sob medida, iluminação e curadoria de mobiliário e decoração.',
  },
  {
    id: 's3',
    titulo: 'Reformas de Alto Padrão',
    texto:
      'Retrofit completo de residências e escritórios, com gestão de obra e fornecedores especializados.',
  },
  {
    id: 's4',
    titulo: 'Consultoria em Arquitetura',
    texto:
      'Direcionamento estratégico para incorporadoras, decoradores e clientes em fase de decisão de projeto.',
  },
];

export default function Servicos() {
  const raiz = useRef(null);
  useRevelarAoRolar(raiz);

  return (
    <section id="servicos" className={estilos.secao} ref={raiz}>
      <div className="container">
        <div className={estilos.cabecalho} data-reveal>
          <span className="rotulo">Serviços</span>
          <h2 className={estilos.titulo}>Atuação especializada em cada fase do projeto</h2>
        </div>

        <div className={estilos.lista}>
          {SERVICOS.map((servico, indice) => (
            <div className={estilos.linha} key={servico.id} data-reveal>
              <span className={estilos.indice}>{String(indice + 1).padStart(2, '0')}</span>
              <h3 className={estilos.tituloServico}>{servico.titulo}</h3>
              <p className={estilos.textoServico}>{servico.texto}</p>
              <a href="#contato" className={estilos.seta} aria-label={`Saiba mais sobre ${servico.titulo}`}>
                →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
