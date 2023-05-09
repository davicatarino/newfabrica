import Title from '../../micros/title';
import './styles.css';
export default function Marcas() {
  return (
    <div className=" neum flex flex-col itemse-center sm:grid sm:grid-cols-2 sm:px-20 py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Title title={'Plataformas e Apps que trabalhamos '} />
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-16 lg:max-w-none lg:grid-cols-2">
          <div className="bg-white  flex items-center content-center rounded-3xl h-16   ">
            <img
              className="col-span-2   w-[100%]  object-contain lg:col-span-1"
              src={`${process.env.PUBLIC_URL}/assets/meta.png`}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white flex items-center content-center rounded-3xl h-16   ">
            <img
              className="col-span-2 p-2 w-64 object-contain lg:col-span-1"
              src={`${process.env.PUBLIC_URL}/assets/facebook-ads.png`}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>

          <div className="bg-white flex items-center content-center rounded-3xl h-16   ">
            <img
              className="col-span-2 p-2 w-full object-contain lg:col-span-1"
              src={`${process.env.PUBLIC_URL}/assets/instagram.png`}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>

          <div className="bg-white flex items-center content-center rounded-3xl h-16  ">
            <img
              className="col-span-2 p-2 w-full object-contain lg:col-span-1"
              src={`${process.env.PUBLIC_URL}/assets/youtube.png`}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>

          <div className="bg-white flex items-center content-center rounded-3xl h-16  ">
            <img
              className="col-span-2 p-2  w-full object-contain lg:col-span-1"
              src={`${process.env.PUBLIC_URL}/assets/google.png`}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>

          <div className="bg-white flex items-center content-center rounded-3xl h-16  ">
            <img
              className="col-span-2 p-2 w-full object-contain lg:col-span-1"
              src={`${process.env.PUBLIC_URL}/assets/google-ads.png`}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white flex items-center content-center rounded-3xl h-16  ">
            <img
              className="col-span-2 p-2 w-full object-contain lg:col-span-1"
              src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white flex items-center content-center rounded-3xl h-16  ">
            <img
              className="col-span-2 p-2 w-full object-contain lg:col-span-1"
              src={`${process.env.PUBLIC_URL}/assets/linkedin-ads.png`}
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] px-5 mt-6 flex items-center  h-[100%]">
        <img
          className="rounded-lg shadow-2xl shadow-indigo-500/50"
          src={`${process.env.PUBLIC_URL}/assets/tablet.png`}
          alt=""
        />
      </div>
    </div>
  );
}
