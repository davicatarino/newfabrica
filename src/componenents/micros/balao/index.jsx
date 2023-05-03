import './styles.css';
export default function Balao({ text, text2, rounded, className, classText }) {
  return (
    <div
      className={`${rounded} ${className}  text-white flex flex-col  list-disc items-center justify-center px-8`}
    >
      <div className=" w-full h-[70%]   ">
        <div className={`text-2xl  ${classText}`}>{text}</div>
        <br></br>
        <div className={`text-2xl ${classText}`}>{text2}</div>
      </div>
    </div>
  );
}
