import Title from '../title';

export default function Grafic() {
  return (
    <section className="w-[100%] gap-5 h-[100%] flex z-1 px-5  py-[46px] sm:px-52 items-center flex-col neum2 ">
      <Title title={'A importância de ter um website profissional'} />

      <div className="sm:grid flex flex-col contee mb-24 sm:grid-cols-2 w-[100%] justify-center h-[100%]  items-center ">
        <div className=" flex flex-row w-[50%] mt-[50px] sm:ml-20 grow justify-center items-end gap-4 h-96">
          <span className="bg-emerald-500   text-white  border-indigo-500 border w-[calc(100%/6)] h-[38%] "></span>
          <span className="bg-blue-400 text-white  border-indigo-500 border w-[calc(100%/6)] h-[80%]"></span>
          <span className="bg-yellow-200 text-white  border-indigo-500 border w-[calc(100%/6)] h-[93%] "></span>
          <span className="bg-rose-300 text-white  border-indigo-500 border w-[calc(100%/6)] h-[100%] "></span>
        </div>

        <ul className="grid-cols-1 list-decimal gap-8 grid h-full mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-32 lg:text-left ">
          <li className="text-xl font-normal tracking-tight ml-8 text-white sm:text-xl ">
            Empresas que possuem um site recebem, em média, 250% mais ligações
            telefônicas do que as que não possuem um (Fonte: Google).
          </li>
          <li className="text-xl font-normal tracking-tight ml-8 text-white sm:text-xl">
            Cerca de 93% dos consumidores online consideram o website de uma
            empresa uma importante ferramenta para tomar decisões para se fazer uma compra
            (Fonte: Econsultancy).
          </li>
          <li className="text-xl font-normal tracking-tight ml-8 text-white sm:text-xl">
            Empresas que possuem um site são 80% mais propensas a crescer do que
            aquelas que não possuem um (Fonte: Website Builder).
          </li>
          <li className="text-xl font-normal tracking-tight ml-8 text-white sm:text-xl">
            38% dos usuários acabam abandonando um website pelo layout e o design não serem
            atraentes (Fonte: Adobe).
          </li>
        </ul>
        <div className=" grid items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tight text-white  my-[50px] sm:-mt-[200px] sm:text-4xl ">
            Faça parte disso
          </h2>
        </div>

      </div>
    </section>
  );
}
