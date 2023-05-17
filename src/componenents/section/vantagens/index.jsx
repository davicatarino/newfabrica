import Title from '../../micros/title';
export default function Vantagens() {
  return (
    <section className="flex flex-col bg-black px-10 sm:px-0">
      <div className="">
        <Title
          title={'Quais são as Vantagens?'}
          risco={'underline decoration-indigo-500'}
        />
      </div>
      <div className=" flex justify-center items-center ">
        <ul className="list-disc text-white conteee text-3xl gap-5 px-16 sm:px-24 py-10">
          <li>Perfil comercial</li>
          <li>Canal exclusivo de comunicação.</li>
          <li>Mensagem de ausência e saudação.</li>
          <li>Facilidade de exibir produtos.</li>
          <li>Análise de estatísticas.</li>
          <li>Etiquetas que organizam as conversas.</li>
          <li>Um único lugar que reúne informações precisas</li>
        </ul>
      </div>
    </section>
  );
}
