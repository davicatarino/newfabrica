import Balao from '../../micros/balao';
import ImgB from '../../micros/imgB';
import Title from '../../micros/title';
import './styles.css';
export default function PageHW() {
  return (
    <section className="muen">
      <div className=" flex flex-col justify-center sm:grid sm:grid-cols-2 px-10 py-24 h-full sm:h-[600px]  sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Title title={'Gestão WhatsApp Business  '} />

          <Balao
            text={` O WhatsApp Business facilita a interação com os clientes, oferecendo ferramentas para automatizar, classificar e responder rapidamente a mensagens. `}

            className={'conte4 right-16 px-14 py-24 flex text-xs text-center'}
            className2={''}
          />
        </div>
        <div className="grid items-center justify-center ">
          <ImgB
            img={'telefone'}
            classImg={'w-[80%]'}
            className={'left-12 top-0 mt-24 sm:mt-0 w-[140%] sm:w-[37rem] max-w-none rounded-md'}
            className2={
              'absolute blur-3xl right-0 mt-20 sm:mt-0  sm:right-48 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#4da813] rounded-full'
            }
          />
        </div>
      </div>
    </section>
  );
}
