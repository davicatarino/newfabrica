import React from 'react';
import Card from './card';
import Title from '../../micros/title';
import './styles.css';
const cards = [
  { title: 'Tráfego pago', content: 'Tráfego pago é um modelo de publicidade online em que um anunciante paga para que seus anúncios apareçam em plataformas de anúncios na internet, como o Google Ads, Facebook Ads, LinkedIn Ads, entre outras. O tráfego pago é uma forma eficaz de aumentar a visibilidade de uma empresa ou produto na internet, pois permite que os anúncios sejam exibidos para um grande número de pessoas em pouco tempo.' },
  { title: 'Equipe de Marketing Digital', content: 'O Marketing Digital permite a análise de métricas e resultados em tempo real, o que possibilita a identificação de oportunidades e a melhoria contínua das estratégias de marketing.' },
  { title: 'Gestão de mídias sociais', content: 'Gestão de mídias sociais é o processo de gerenciar a presença de uma marca ou empresa nas redes sociais, com o objetivo de construir relacionamentos com os seguidores, aumentar o engajamento, promover a marca e direcionar o tráfego para o site da empresa.' },
];
const cards2 = [
  { title: 'Whatsapp business', content: 'O WhatsApp Business é uma ferramenta importante para as empresas que desejam melhorar a comunicação com os clientes, oferecer um atendimento ao cliente mais eficiente, personalizar as mensagens de marketing e aumentar as vendas.' },
  { title: 'Website moderno', content: 'Um website moderno é fundamental para a imagem e sucesso de uma empresa na era digital. Ele ajuda a melhorar a experiência do usuário, aumentar a credibilidade, melhorar o posicionamento nos motores de busca, facilitar a integração com outras plataformas, aumentar a conversão e melhorar a segurança.' },
  { title: 'Apps de gestão', content: 'Um aplicativo de gestão pode ser usado para gerenciar diversas áreas de uma empresa, como finanças, vendas, estoque, recursos humanos, entre outras.' },
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
              src={`${process.env.PUBLIC_URL}/assets/computador.png`}
              className="w-1920 h-1080 "
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
              src={`${process.env.PUBLIC_URL}/assets/nave.png`}
              className="w-1920 h-1080 "
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
