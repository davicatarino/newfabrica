import React from 'react';
import Title from '../../micros/title';
import './styles.css';
import Faqq from './faqq';
const faqs = [
  { title: 'Quem é dono das contas de anúncios?', content: 'A empresa/contratante sempre' },
  { title: 'Quem faz o anúncio?', content: 'A empresa/equipe de marketing da empresa' },
  { title: 'Quando eu pago pelo anúncio?', content: 'O valor direcionado ao orçamento da campanha é debitado quando clicarem no seu anúncio, você não gasta até verem seu anúncio' },
  { title: 'Como eu fico no topo do Google ?  ', content: 'O tráfego ele possibilita atrair o seu público ideal e mostrar para quem realmente quer ver o seu site . Com a boa veiculação de anúncio pelo gestor de tráfego, o seu anúncio dispara para o topo atraindo mais cliques é mais conversões' },
];
export default function Faq() {
  return (
    <section className="bg-black">
      <div className=" gap-5 w-[100%] h-[100%] flex z-1 items-center py-[46px] sm:px-[100px] px-[20px] flex-col ">
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
