import Title from './../../micros/title';
import Topicos from './../../loopings/topicos';

import './styles.css';

export default function ImgTopics() {
  const topics = [
    { title: 'Identificamos o foco do seu negócio ' },
    { title: 'Organizamos e montamos seu conteúdo ' },
    {
      title:
        'Otimizamos o fluxo de ferramentas para agilidade no atendimento aos seus clientes ',
    },
    {
      title:
        'Utilizamos de forma eficaz os recursos estratégicos para vendas do App',
    },
  ];
  return (
    <section className="neum">
      <div className=" w-[100%] h-[100%]  flex z-1 items-center py-[46px] sm:px-[100px] px-[20px] flex-col ">
        <Title title={'Como funciona nosso trabalho de gestão? '} />
        <div className="flex flex-col sm:flex-row gap-20">
          <div className="flex items-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/wpp.png`}
              alt=""
              className="w-[190%] h-[90%]"
            />
          </div>
          <Topicos topics={topics} />
        </div>
      </div>
    </section>
  );
}
