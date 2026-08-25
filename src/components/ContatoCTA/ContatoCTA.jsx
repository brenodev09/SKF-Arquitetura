import { useRef, useState } from 'react';
import useRevelarAoRolar from '../../hooks/useRevelarAoRolar';
import estilos from './ContatoCTA.module.css';

const NUMERO_WHATSAPP = '5516999999999';

export default function ContatoCTA() {
  const raiz = useRef(null);
  const [enviado, setEnviado] = useState(false);
  const [dados, setDados] = useState({ nome: '', telefone: '', tipo: 'Residencial', mensagem: '' });
  useRevelarAoRolar(raiz);

  const aoMudar = (campo) => (evento) =>
    setDados((atual) => ({ ...atual, [campo]: evento.target.value }));

  const aoEnviar = (evento) => {
    evento.preventDefault();
    setEnviado(true);
  };

  const linkWhatsapp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento com a SKF Arquitetura.'
  )}`;

  return (
    <section id="contato" className={estilos.secao} ref={raiz}>
      <div className="container">
        <div className={estilos.grade}>
          <div className={estilos.colunaTexto} data-reveal>
            <span className="rotulo">Vamos conversar</span>
            <h2 className={estilos.titulo}>
              Solicite um orçamento e comece o projeto do seu próximo espaço
            </h2>
            <p className={estilos.paragrafo}>
              Preencha o formulário com os detalhes do seu projeto ou fale diretamente pelo
              WhatsApp — a equipe retorna em até 24 horas úteis.
            </p>

            <a href={linkWhatsapp} target="_blank" rel="noreferrer" className={estilos.botaoWhats}>
              Falar no WhatsApp
            </a>

            <div className={estilos.contatosDiretos}>
              <div>
                <span>Telefone</span>
                <p>(16) 99999-9999</p>
              </div>
              <div>
                <span>E-mail</span>
                <p>contato@skfarquitetura.com.br</p>
              </div>
            </div>
          </div>

          <form className={estilos.formulario} data-reveal onSubmit={aoEnviar}>
            {enviado ? (
              <div className={estilos.confirmacao}>
                <h3>Solicitação enviada</h3>
                <p>Obrigado pelo contato. Nossa equipe retornará em breve para dar seguimento ao seu projeto.</p>
              </div>
            ) : (
              <>
                <div className={estilos.campo}>
                  <label htmlFor="nome">Nome completo</label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={dados.nome}
                    onChange={aoMudar('nome')}
                    placeholder="Seu nome"
                  />
                </div>

                <div className={estilos.campo}>
                  <label htmlFor="telefone">Telefone / WhatsApp</label>
                  <input
                    id="telefone"
                    type="tel"
                    required
                    value={dados.telefone}
                    onChange={aoMudar('telefone')}
                    placeholder="(16) 00000-0000"
                  />
                </div>

                <div className={estilos.campo}>
                  <label htmlFor="tipo">Tipo de projeto</label>
                  <select id="tipo" value={dados.tipo} onChange={aoMudar('tipo')}>
                    <option>Residencial</option>
                    <option>Interiores</option>
                    <option>Reforma</option>
                    <option>Comercial</option>
                    <option>Consultoria</option>
                  </select>
                </div>

                <div className={estilos.campo}>
                  <label htmlFor="mensagem">Conte um pouco sobre o projeto</label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    value={dados.mensagem}
                    onChange={aoMudar('mensagem')}
                    placeholder="Metragem, localização, prazo desejado..."
                  />
                </div>

                <button type="submit" className={estilos.botaoEnviar}>
                  Enviar solicitação
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
