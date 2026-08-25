import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProjetosDestaque from './components/ProjetosDestaque/ProjetosDestaque';
import Sobre from './components/Sobre/Sobre';
import Processo from './components/Processo/Processo';
import Servicos from './components/Servicos/Servicos';
import Portfolio from './components/Portfolio/Portfolio';
import Premiacoes from './components/Premiacoes/Premiacoes';
import Depoimentos from './components/Depoimentos/Depoimentos';
import ContatoCTA from './components/ContatoCTA/ContatoCTA';
import Footer from './components/Footer/Footer';
import WhatsAppFlutuante from './components/WhatsApp/WhatsAppFlutuante';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjetosDestaque />
        <Sobre />
        <Processo />
        <Servicos />
        <Portfolio />
        <Premiacoes />
        <Depoimentos />
        <ContatoCTA />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
