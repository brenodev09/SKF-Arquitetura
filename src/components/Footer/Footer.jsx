import estilos from './Footer.module.css';

const REDES = [
  { rotulo: 'Instagram', href: 'https://instagram.com' },
  { rotulo: 'Pinterest', href: 'https://pinterest.com' },
  { rotulo: 'LinkedIn', href: 'https://linkedin.com' },
];

const LINKS = [
  { rotulo: 'Projetos', href: '#projetos' },
  { rotulo: 'Escritório', href: '#sobre' },
  { rotulo: 'Processo', href: '#processo' },
  { rotulo: 'Serviços', href: '#servicos' },
  { rotulo: 'Portfólio', href: '#portfolio' },
];

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={estilos.rodape}>
      <div className="container">
        <div className={estilos.grade}>
          <div className={estilos.blocoMarca}>
            <a href="#topo" className={estilos.marca}>
              SKF <span>Arquitetura</span>
            </a>
            <p className={estilos.slogan}>
              Projetos autorais de arquitetura e interiores para quem valoriza exclusividade
              e excelência de execução.
            </p>
          </div>

          <div className={estilos.blocoLinks}>
            <span className={estilos.rotuloBloco}>Navegação</span>
            <ul>
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.rotulo}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={estilos.blocoLinks}>
            <span className={estilos.rotuloBloco}>Contato</span>
            <ul>
              <li>contato@skfarquitetura.com.br</li>
              <li>(16) 99999-9999</li>
              <li>Jaboticabal, SP</li>
            </ul>
          </div>

          <div className={estilos.blocoLinks}>
            <span className={estilos.rotuloBloco}>Redes sociais</span>
            <ul>
              {REDES.map((rede) => (
                <li key={rede.rotulo}>
                  <a href={rede.href} target="_blank" rel="noreferrer">
                    {rede.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={estilos.linhaBase}>
          <span>© {anoAtual} SKF Arquitetura. Todos os direitos reservados.</span>
          <span>CAU nº 000000-0</span>
        </div>
      </div>
    </footer>
  );
}
