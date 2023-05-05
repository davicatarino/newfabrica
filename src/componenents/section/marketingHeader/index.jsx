import Balao from '../../micros/balao';
import ImgB from '../../micros/imgB';
import Title from '../../micros/title';
import './styles.css';
export default function PageHM() {
  return (
    <section className="muen">
      <div className=" flex flex-col-reverse  sm:grid sm:grid-cols-2 px-6 sm:px-20 py-24 h-full sm:h-[600px]  sm:py-12">
        <div className="grid items-center justify-center ">
          <ImgB
            img={'marketing'}
            className={'left-0 top-0 mt-10 sm:mt-0 w-[160%] sm:w-[37rem] max-w-none rounded-md'}
            className2={
              'absolute blur-3xl mt-10 w-[80%] h-[25%] sm:mt-0 sm:left-56 sm:w-[30%] sm:h-[50%] bg-violet-700 rounded-full'
            }
          />
        </div>
        <div className="sm:mx-auto max-w-7xl px-6 lg:px-8">
          <Title title={'Marketing Digital  '} />

          <Balao
            text={` Estratégias direcionadas para seu negócio. Venha desenvolver uma identidade para sua marca.
            `}
            text2={
              ' Com o objetivo de atrair novas oportunidades, criar relacionamentos e desenvolver seu negócio.'
            }
            className={'conte4 right-16 flex p-8 text-center'}
            className2={''}
          />
        </div>
      </div>
    </section>
  );
}
