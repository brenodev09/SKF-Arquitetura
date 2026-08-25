import { useEffect, useState } from 'react';
import estilos from './Header.module.css';

const LINKS = [
  { rotulo: 'Projetos', href: '#projetos' },
  { rotulo: 'Escritório', href: '#sobre' },
  { rotulo: 'Processo', href: '#processo' },
  { rotulo: 'Serviços', href: '#servicos' },
  { rotulo: 'Portfólio', href: '#portfolio' },
  { rotulo: 'Contato', href: '#contato' },
];

export default function Header() {
  const [rolado, setRolado] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 40);
    window.addEventListener('scroll', aoRolar);
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
  }, [menuAberto]);

  return (
    <header className={`${estilos.cabecalho} ${rolado ? estilos.rolado : ''}`}>
      <div className={estilos.fundo} aria-hidden="true" />
      <div className={estilos.conteudo}>
        <a href="#topo" className={estilos.marca}>
          SKF <span>Arquitetura</span>
        </a>

        <nav className={estilos.navDesktop}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.rotulo}
            </a>
          ))}
        </nav>

        <a href="#contato" className={estilos.botaoOrcamento}>
          Solicitar orçamento
        </a>

        <button
          className={`${estilos.botaoMenu} ${menuAberto ? estilos.aberto : ''}`}
          onClick={() => setMenuAberto((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`${estilos.menuMobile} ${menuAberto ? estilos.menuMobileAberto : ''}`}>
        <nav>
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: `${i * 0.05}s` }}
              onClick={() => setMenuAberto(false)}
            >
              {link.rotulo}
            </a>
          ))}
        </nav>
        <a href="#contato" className={estilos.botaoOrcamentoMobile} onClick={() => setMenuAberto(false)}>
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}
