import Cta from '../../componenents/section/cta';
import Nav from '../../componenents/nav';
import Promo from '../../componenents/promo/promo';
import Flutuante from '../../componenents/micros/flutter';
import Footer from '../../componenents/footer';
import WebCont from '../../componenents/section/webCont';
import './styles.css';
export default function Website() {
  return (
    <div className="App bg-[#111827]">
      <Promo />
      <Nav />
      <Cta />
      <WebCont />
      <Footer />
      <Flutuante />
    </div>
  );
}
