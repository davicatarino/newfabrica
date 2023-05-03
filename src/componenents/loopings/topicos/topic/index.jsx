export default function Topic({ title }) {
  return (
    <div className="flex-1 flex relative rounded-full items-center justify-center self-stretch px-6  flex-col bg-fuchsia-900  hover:border hover:border-fuchsia-600 hover:shadow-md hover:shadow-violet-900 list-disc">
      <div className="font-sans text-xl font-bold leading-9 my-4 text-white">
        {title}
      </div>
    </div>
  );
}
