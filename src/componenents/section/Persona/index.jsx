import Balao from '../../micros/balao';
import Light from '../../micros/light';
import './styles.css';
export default function Persona() {
  return (
    <div className="neum hidden   sm:flex flex-col items-center justify-center sm:px-20 py-24 h-full gap-16 sm:py-12">
      <div className="flex flex-row ml-20 items-center justify-center rounded-full w-[40%] bg-[#450d50]">
        <img
          className="w-[10rem]"
          src={`${process.env.PUBLIC_URL}/assets/logopng.png`}
          alt=""
        />

        <div className="flex flex-col items-center">
          <h2 className="text-4xl  text-white">André maia</h2>
          <Light title={'Gestor de tráfego'} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  text-white h-full w-full  items-center justify-center sm:px-8">
        <div className="flex z-[1] left-64 bottom-16 relative  item-start">
          <img
            className="w-[35%]  "
            src={`${process.env.PUBLIC_URL}/assets/ASPAS.png`}
            alt=""
          />
        </div>
        <div className="flex  items-center justify-center ">
          <Balao
            text={
              'Uma boa gestão faz um bom anúncio, e um bom anúncio faz um negócio de sucesso.'
            }
            rounded={'rounded-full sm:rounded-l-full'}
            className={'relative sm:w-[500px]   left-0 h-52 conte5 '}
            classText={'justify-center flex items-center sm:ml-24'}
          />

          <div className="flex lg:right-90 mr-64 absolute">
            <img
              className=" rounded-full z-[999]  flex mr-2   w-[40%] h-[50%]"
              src={`${process.env.PUBLIC_URL}/assets/perfil.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/selo.png`}
          alt=""
          className="w-[10%] h-[50%]"
        />
        <div className="text-3xl flex items-center text-yellow-300">
          Profissional com
          <br />
          certificado google asds
        </div>
      </div>
    </div>
  );
}
