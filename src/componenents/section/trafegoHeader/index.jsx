import Balao from '../../micros/balao';
import ImgB from '../../micros/imgB';
import Title from '../../micros/title';
import Light from '../../micros/light';
import './styles.css';
export default function PageHT() {
  return (
    <section className="muen">
      <div className="   flex flex-col-reverse px6 sm:px-20 py-24  h-full sm:h-[600px] sm:grid sm:grid-cols-2 sm:py-12">
        <div className="grid items-center justify-center ">
          <ImgB
            img={'trafego'}
            className={'left-0 top-0 w-[100%] sm:w-[37rem] max-w-none rounded-md'}
            className2={
              'absolute blur-3xl  left-38 w-[90%] h-[20%] sm:w-[500px] sm:h-[500px] bg-violet-700 rounded-full'
            }
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Light title={'Você na frente da pessoa certa '} />
          <Title title={'O que é tráfego pago  '} />

          <Balao
            text={` Já se perguntou porque após uma pesquisa no google você começa a receber noticias e anuncios sobre o que voce pesquisou? Isso é o algoritmo do Google que um gestor de tráfego manipula para atrair um possivel comprador para um determinado produto `}
            text2={
              'Isso é o algoritmo do Google que um gestor de tráfego manipula para atrair um possivel comprador para um determinado produto'
            }
            className={'conte4 right-16 flex py-8 sm:py-3 text-center'}
            className2={''}
          />
        </div>
      </div>
    </section>
  );
}
