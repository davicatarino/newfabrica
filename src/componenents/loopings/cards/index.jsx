import React from 'react';
import Card from './card';
import Title from '../../micros/title';
import './styles.css';
const cards = [
  { title: 'Tráfego pago', content: 'Conteúdo do Card 1' },
  { title: 'Topo das pesquisas', content: 'Conteúdo do Card 2' },
  { title: 'Gestão de mídias sociais', content: 'Conteúdo do Card 3' },
];
const cards2 = [
  { title: 'Whatsapp business', content: 'Conteúdo do Card 3' },
  { title: 'Website moderno', content: 'Conteúdo do Card 3' },
  { title: 'Apps de gestão', content: 'Conteúdo do Card 3' },
];
export default function Cards() {
  return (
    <section className="w-[100%] h-[100%] flex z-1 items-center pt-[46px] sm:px-[100px] px-[20px] flex-col bec">
      <Title
        title={'360° DIGITAL'}
        description={
          'Com nossas tecnologias e profissionais especializados fazemos sua empresa decolar nas vendas digitais'
        }
      />
      <div className="w-[100%] flex max-w-7xl items-center grid-cols-4 sm:flex-row flex-col">
        <div className="gap-[32px] w-[100%] flex items-center mb-[32px] flex-col-reverse sm:flex-col px-[15px]">
          {cards2.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
          <div className="flex-1 flex items-center text-center flex-col">
            <span className="text-center text-[#ffffff] text-[40px] font-sans">
              Maior <span className="brilho">alcance</span>
            </span>
            <img
              alt="pastedImage"
              src={`${process.env.PUBLIC_URL}/assets/alcance.png`}
              className="w-[80%] h-[80%] object-contain "
            />
          </div>
        </div>
        <div className="gap-[32px] w-[100%] flex items-center mb-[32px] flex-col px-[15px]">
          <div className="flex-1 flex items-center text-center flex-col">
            <span className="text-center text-[#ffffff] text-[40px] font-sans">
              Melhor <span className="brilho">desempenho</span>
            </span>
            <img
              alt="pastedImage"
              src={`${process.env.PUBLIC_URL}/assets/desempenho.png`}
              className="w-[70%] h-[70%] object-contain "
            />
          </div>
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>
    </section>
  );
}
