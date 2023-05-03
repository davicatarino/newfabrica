import Nav from '../../componenents/nav';
import Footer from '../../componenents/footer';
import Promo from '../../componenents/promo/promo';

import PageHW from '../../componenents/section/whatsappHeader';
import ImgTopics from '../../componenents/section/imgTopics';
import Vantagens from '../../componenents/section/vantagens';

export default function Whatsapp() {
  return (
    <div className="App  ">
      <Promo />
      <Nav />
      <PageHW />
      <Vantagens />
      <ImgTopics />
      <Footer />
    </div>
  );
}
