import Light from '../../micros/light';
import Topicos from '../../loopings/topicos';

import './styles.css';

export default function ImgTopicsMKT() {
  const topics = [
    { title: 'As melhores descrições e hashtags ' },
    {
      title: 'Conteúdo personalizados ',
    },
    {
      title: 'Autonomia com Feed, Stories e Reels de alta qualidade',
    },
  ];
  return (
    <section className="neum">
      <div className=" w-[100%] h-[100%]  flex z-1 items-center justify-center py-[46px]  flex-col ">
        <div className="flex flex-col items-center justify-center sm:flex-row gap-20">
          <img
            src={`${process.env.PUBLIC_URL}/assets/insta.png`}
            alt=""
            className="w-[30%] sm:p-16 h-[90%]"
          />{' '}
          <div className="flex flex-col justify-center px-10 ">
            <Light title={'marketing para o seu instagram '} className={'w-[90%]'}/>
            <Topicos topics={topics} className={' w-[100%] sm:w-[130%]  sm:pr-96 ]'} />
          </div>
        </div>
      </div>
    </section>
  );
}
