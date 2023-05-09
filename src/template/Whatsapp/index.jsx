import Nav from '../../componenents/nav';
import Footer from '../../componenents/footer';
import Promo from '../../componenents/promo/promo';
import Flutuante from '../../componenents/micros/flutter';
import PageHW from '../../componenents/section/whatsappHeader';
import ImgTopics from '../../componenents/section/imgTopics';
import Vantagens from '../../componenents/section/vantagens';
import ScrollTop from '../../componenents/micros/scrollTop';
export default function Whatsapp() {
  return (
    <div className="App  ">
      <Promo />
      <Nav />
      <PageHW />
      <Vantagens />
      <ImgTopics />
      <Footer />
      <Flutuante/>
      <ScrollTop/>
    </div>
  );
}
