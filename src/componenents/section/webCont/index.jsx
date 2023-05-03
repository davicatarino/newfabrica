import Cont1 from '../../micros/cont';

import Grafic from '../../micros/grafic';
import './styles.css';

export default function WebCont() {
  return (
    <div className="App ">


      <Cont1
        direction={'flex-col-reverse sm:flex-row-reverse'}
        title={
          'Destaque-se da Concorrência e Conquiste a Confiança dos Clientes'
        }
        desc={
          'Um site profissional é mais do que uma simples presença online. É uma ferramenta poderosa para aumentar a autoridade do seu negócio, destacando a sua marca e transmitindo credibilidade e confiança aos seus clientes em potencial. Com a nossa equipe de especialistas em marketing digital, podemos criar um site personalizado e profissional que atenda às suas necessidades de negócios e melhore sua presença online. Não deixe sua concorrência superá-lo. Invista em um site profissional hoje e comece a conquistar a confiança dos seus clientes.'
        }
        img={'predio'}
      />
      <Grafic />

    </div>
  );
}
