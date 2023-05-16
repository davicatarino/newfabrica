const people = [
  {
    name: 'Monique Maia Catarino',
    role: 'Fundadora / CEO',
    imageUrl:
    `${process.env.PUBLIC_URL}/assets/nikki.jpg`,
  },
  {
    name: 'Savana Dias',
    role: 'Administradora',
    imageUrl:
    `${process.env.PUBLIC_URL}/assets/savana.jpg`,
  },
  {
    name: 'Davi Catarino',
    role: 'Gestor de T.I / Desenvolvedor',
    imageUrl:
    `${process.env.PUBLIC_URL}/assets/davi.jpg`,
  },
  {
    name: 'André  Maia',
    role: 'Gestor de tráfego ',
    imageUrl: `${process.env.PUBLIC_URL}/assets/andre.jpg`,
  },
  // More people...
];
export default function Team() {
  return (
    <div className="bg-fuchsia-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Conheça nossos especialistas
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Uma equipe que se importa de verdade.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
