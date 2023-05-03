import './styles.css';
export default function ImgB({ className, className2, classImg, img }) {


  return (
    <div className="rounded-3xl text-white flex flex-col h-64 w-full list-disc items-center justify-center px-8">
      <div className={`${className2}`}></div>
      <div className={`${className} relative`}>
        <img
          className={`${classImg}`}
          src={`${process.env.PUBLIC_URL}/assets/${img}.png`}
          alt=""
        />
      </div>
    </div>
  );
}
