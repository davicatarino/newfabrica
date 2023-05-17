import React from 'react';
import Title from '../../micros/title';
import './styles.css';
import Faqq from './../../loopings/faq/faqq';
const faqs = [
  { title: 'Marketing digital', content: 'Marketing digital é um conjunto de estratégias de marketing que utilizam canais digitais, como redes sociais, mecanismos de busca, e-mail marketing, publicidade online, entre outros, para promover produtos, serviços ou marcas e estabelecer um relacionamento com o público-alvo.' },
  { title: 'Qual o objetivo?', content: 'O objetivo do marketing digital é alcançar e engajar consumidores em potencial, criar e fortalecer a presença online de uma marca e, consequentemente, aumentar as vendas e a fidelização dos clientes. Para isso, é necessário desenvolver campanhas criativas, planejar ações de comunicação e criar conteúdo relevante para atrair a atenção e o interesse do público.' },
  { title: 'Qual a função?', content: 'O gestor de marketing digital é responsável por planejar, implementar e monitorar as estratégias de marketing digital de uma empresa ou organização. Suas funções inclui a definição de estratégia de marketing digital; O gestor de marketing digital deve definir as estratégias e objetivos de marketing digital da empresa, identificar o público-alvo e escolher os canais mais adequados para atingir esses objetivos.' },
];
export default function InstaMKT() {
  return (
    <section className="bg-black flex items-center justify-center">
      <div className=" w-full sm:w-[60%] h-[100%] flex z-1  py-[46px] sm:px-[100px] px-10 flex-col ">
        <div className="flex  flex-row ">
          <Title
            title={'Porque você precisa '}
            className={'underline decoration-indigo-500'}
          />
         <img
              src={`${process.env.PUBLIC_URL}/assets/target.png`}
              alt=""
              className="mt-20 sm:mt-0 w-[24%] sm:w-[15%] h-[20%]"
            />
        </div>
        <div className="w-[100%] flex max-w-7xl items-center grid-cols-4 sm:flex-row flex-col conteee ">
          <div className="gap-[32px] w-[100%] flex  my-[32px] flex-col-reverse sm:flex-col px-[15px] ">
            {faqs.map((card, index) => (
              <Faqq key={index} title={card.title} content={card.content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
