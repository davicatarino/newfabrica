import Nav from '../../componenents/nav';
import Footer from '../../componenents/footer';
import Promo from '../../componenents/promo/promo';
import PageHM from '../../componenents/section/marketingHeader';
import FaqMKT from '../../componenents/section/imgTopicMKT';
import InstaMKT from '../../componenents/section/instaMKT';
import Flutuante from '../../componenents/micros/flutter';
import ScrollTop from '../../componenents/micros/scrollTop';
export default function Marketing() {
  return (
    <div className="App  ">
      <Promo />
      <Nav />
      <PageHM />
      <InstaMKT/>
      <FaqMKT />
      <Footer />
      <Flutuante />
      <ScrollTop/>
    </div>
  );
}
