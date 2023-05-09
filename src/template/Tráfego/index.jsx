import Nav from '../../componenents/nav';
import Footer from '../../componenents/footer';
import Promo from '../../componenents/promo/promo';
import Marcas from '../../componenents/section/marcas';
import Compr from '../../componenents/section/comparativo';
import Faq from '../../componenents/loopings/faq';
import PageHT from '../../componenents/section/trafegoHeader';
import Persona from '../../componenents/section/Persona';
import Flutuante from '../../componenents/micros/flutter';
import ScrollTop from '../../componenents/micros/scrollTop';
export default function Trafego() {
  return (
    <div className="App  ">
      <Promo />
      <Nav />
      <PageHT />
      <Compr />
      <Marcas />
      <Faq />
      <Persona />
      <Footer />
      <Flutuante />
      <ScrollTop/>
    </div>
  );
}
