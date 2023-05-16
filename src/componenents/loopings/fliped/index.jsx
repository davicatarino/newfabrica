import React from 'react';
import Flip from './flip';
import Title from '../../micros/title';
import './styles.css'
const flip = [
  {
    Ftitle: 'Quero que conheçam meu produto',
    Btitle: 'Tráfego pago',
    Ftext: ' ',
    Btext: ' Ajuda a Veicular o anúncio do seu Produto pelo Facebook,Instagram ou site do Google trazendo pessoas interessadas no seu produto. ',
  },
  {
    Ftitle: 'Quero vender mais',
    Btitle: ' Website ',
    Ftext: '',
    Btext: ' Há vantagens em fazer um Website para facilitar suas vendas, fazer tráfego para veicular esse site e atrair possíveis compradores.',
  },
];
const flip2 = [
  {
    Ftitle: 'Sem tempo de lidar com atendimento ao cliente',
    Btitle: ' WhatsApp Business',
    Ftext: '',
    Btext: 'Podemos fazer através do APP do WhatsApp Business, a automação de mensagens, onde o cliente vai te dar todas as informações necessárias sem você trocar mensagens manuais com ele. ',
  },
  {
    Ftitle: 'Não tenho loja, instagram ou página de vendas',
    Btitle: 'Fabricando Digital ',
    Ftext: ' ',
    Btext: 'Com os nossos serviços, você adquiri o seu Instagram Profissional, também gerenciamos o mesmo e a Criação de Landing Pages e Sites Autorais , mostrando o seu serviço/produto de maneira Prática e Objetiva',
  },
];

export default function Fliper() {
  return (
    <section className=" h-[100%] flex z-1 items-center pt-[46px] flex-col be">
      <Title title={'Qual a sua necessidade ?'} />
      <div className=" flex max-w-7xl items-center  grid-rows-4 gap-[5px] flex-col sm:gap-[40px] sm:flex-row ">
        <div className="  flex items-center mb-[32px]  gap-[40px] flex-col sm:flex-row ">
          {flip.map((card, index) => (
            <Flip
              key={index}
              Ftitle={card.Ftitle}
              Ftext={card.Ftext}
              Btitle={card.Btitle}
              Btext={card.Btext}
            />
          ))}
        </div>
        <div className="  flex items-center mb-[32px] gap-[40px] flex-col sm:flex-row ">
          {flip2.map((card, index) => (
            <Flip
              key={index}
              Btitle={card.Btitle}
              Btext={card.Btext}
              Ftitle={card.Ftitle}
              Ftext={card.Ftext}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
