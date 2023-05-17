import Title from '../title';
import ImgB from '../imgB';
import './styles.css';
export default function Cont1({ direction, img, title, desc }) {
  return (
    <section className="neum2">
      <div className="w-[100%] gap-5 h-full flex z-1 items-center justify-center pt-[46px] sm:px-[100px] px-[20px] flex-col  ">
        <Title
          title={'Aumente a Autoridade do Seu Negócio com um Site Profissional'}
        />

        <div
          className={`conteee mb-24 items-center justify-center flex ${direction}`}
        >
          <div className="  lg:mt-8">
            <ImgB
              img={'predio'}
              className={'left-0 top-0  sm:w-[37rem] max-w-none rounded-md'}
              className2={
                'absolute blur-3xl  right-86 w-[50%] h-[20%] sm:w-[500px] sm:h-[500px] bg-violet-700 rounded-full'
              }
            />
          </div>

          <div className="mx-auto px-8 max-w-md text-center flex-col lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-2xl  tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">{desc}</p>
            {/*   <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              fale conosco agora!
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
