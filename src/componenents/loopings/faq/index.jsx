import React from 'react';
import Title from '../../micros/title';
import './styles.css';
import Faqq from './faqq';
const faqs = [
  { title: 'Tráfego pago', content: 'Conteúdo do Card 1' },
  { title: 'Topo das pesquisas', content: 'Conteúdo do Card 2' },
  { title: 'Gestão de mídias sociais', content: 'Conteúdo do Card 3' },
  { title: 'Gestão de mídias sociais', content: 'Conteúdo do Card 3' },
  { title: 'Gestão de mídias sociais', content: 'Conteúdo do Card 3' },
];
export default function Faq() {
  return (
    <section className="bg-[#111827]">
      <div className=" w-[100%] h-[100%] flex z-1 items-center py-[46px] sm:px-[100px] px-[20px] flex-col ">
        <Title
          title={'Perguntas frequentes '}
          description={
            'Com nossas tecnologias e profissionais especializados fazemos sua empresa decolar nas vendas digitais'
          }
        />
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
