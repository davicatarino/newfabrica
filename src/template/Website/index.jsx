import Cta from '../../componenents/section/cta';
import Nav from '../../componenents/nav';
import Promo from '../../componenents/promo/promo';

import './styles.css';
import Footer from '../../componenents/footer';
import WebCont from '../../componenents/section/webCont';
export default function Website() {
  return (
    <div className="App bg-[#111827]">
      <Promo />
      <Nav />

      <Cta />
      <WebCont />

      <Footer />
    </div>
  );
}
