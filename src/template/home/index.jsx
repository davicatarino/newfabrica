import Cards from '../../componenents/loopings/cards';
import Carousel from '../../componenents/loopings/carousel';
import Promo from '../../componenents/promo/promo';
import Fliper from '../../componenents/loopings/fliped';
import Team from '../../componenents/section/team';
import Footer from '../../componenents/footer';
import Nav from '../../componenents/nav';
import Header from '../../componenents/section/header';
import Flutuante from '../../componenents/micros/flutter';
import Alert from '../../componenents/micros/alert';
export default function Home() {
  return (
    <div className="App">
      <Promo />
      <Nav />
      <Alert />
      <Header />
      <Cards />
      <Fliper />
      <Team />
      <Carousel />
      <Footer />
      <Flutuante></Flutuante>
    </div>
  );
}
