import React from 'react';
import Title from '../../micros/title';
import './styles.css';
import Faqq from './../../loopings/faq/faqq';
const faqs = [
  { title: 'Marketing digital', content: 'Conteúdo do Card 1' },
  { title: 'Qual o objetivo?', content: 'Conteúdo do Card 2' },
  { title: 'Qual a função?', content: 'Conteúdo do Card 3' },
];
export default function InstaMKT() {
  return (
    <section className="bg-[#111827] flex items-center justify-center">
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
