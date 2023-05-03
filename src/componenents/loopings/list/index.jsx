import Listt from './listt';
const lits = [
  { title: 'Tráfego pago' },
  { title: 'Topo das pesquisas' },
  { title: 'Gestão de mídias sociais' },
  { title: 'Gestão de mídias sociais' },
  { title: 'Gestão de mídias sociais' },
];

export default function List({ title }) {
  return (
    <div className="w-[100%] flex max-w-7xl items-center grid-cols-4 sm:flex-row flex-col conteee ">
      <div className="gap-[32px] w-[100%] flex  my-[32px] flex-col-reverse sm:flex-col px-[15px] ">
        {lits.map((card, index) => (
          <Listt key={index} title={card.title} />
        ))}
      </div>
    </div>
  );
}
