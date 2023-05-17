import './styles.css';

export default function Compr() {
  return (
    <section className="bg-black w-full h-full flex flex-col px-6  sm:px-20 py-24 gap-16">
      <div className="flex flex-row">
        <div className="w-[100%] flex items-center flex-col pb-[1px] justify-end ">
          <span className="text-center text-[#ffffff] text-[50px] font-sans">
            O{' '}
            <span className="brilho underline decoration-indigo-500">
              Tráfego Pago
            </span>{' '}
            busca mudar a vida da sua empresa com seu diferencial.
          </span>
        </div>
      </div>

      <div className=" flex flex-col sm:flex-row justify-center gap-16">
        <ul className="contee  rounded-3xl text-white flex flex-col h-full w-full sm:h-64 sm:w-[45%] list-disc items-center justify-center py-4 px-6 h-4">
          <div className="flex flex-row items-baseline">
            <h2 className="list-none text-3xl mb-4">Impulsionamento</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="pink"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <li className="text-xl">
            Atrai qualquer pessoa, que pouco se interessa pelo seu conteúdo.
          </li>
          <li className="text-xl">
            Te da um público alvo que não interage ou compra seus produtos.
          </li>
        </ul>
        <ul className="conteee rounded-3xl text-white flex flex-col h-full w-full sm:h-64 sm:w-[45%] list-disc items-center justify-center py-4 px-6">
          <div className="flex flex-row items-baseline ">
            <h2 className="list-none text-3xl mb-4">Tráfego pago</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="pink"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <li className="text-xl">
            Mostra resultados de crescimento REAL para o seu negócio.
          </li>
          <li className="text-xl">
            Mexe com o fluxo de pessoas direto da Fonte.
          </li>
          <li className="text-xl">
            Encontramos o seu cliente Ideal, para atrairmos seu público alvo.
          </li>
        </ul>
      </div>
    </section>
  );
}
