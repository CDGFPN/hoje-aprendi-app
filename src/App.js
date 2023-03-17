function App() {
  return <Header />;
}

function Header() {
  const tituloApp = "Hoje Aprendi!";

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="./logo.jpeg"
            height="68"
            width="68"
            alt="Logo Hoje Aprendi"
          />
          <h1>{tituloApp}</h1>
        </div>
        <button className="btn">Compartilhe uma curiosidade</button>
      </header>
      <main className="main">
        <ListaCategorias />
        <ListaCuriosidades />
      </main>
    </>
  );
}

const curiosidadesIniciais = [
  {
    id: 1,
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
    fonte: "http://exemplo.com.br",
    categoria: "tecnologia",
    criadoEm: 2023,
  },
  {
    id: 2,
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
    fonte: "http://exemplo.com.br",
    categoria: "tecnologia",
    criadoEm: 2023,
  },
  {
    id: 3,
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
    fonte: "http://exemplo.com.br",
    categoria: "tecnologia",
    criadoEm: 2023,
  },
  {
    id: 4,
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
    fonte: "http://exemplo.com.br",
    categoria: "tecnologia",
    criadoEm: 2023,
  },
  {
    id: 5,
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
    fonte: "http://exemplo.com.br",
    categoria: "tecnologia",
    criadoEm: 2023,
  },
];

const CATEGORIAS = [
  { nome: "tecnologia", cor: "#3b82f6" },
  { nome: "ciência", cor: "#16a34a" },
  { nome: "finanças", cor: "#ef4444" },
  { nome: "sociedade", cor: "#eab308" },
  { nome: "entretenimento", cor: "#db2777" },
  { nome: "saúde", cor: "#14b8a6" },
  { nome: "história", cor: "#f97316" },
  { nome: "notícias", cor: "#8b5cf6" },
];

function ListaCategorias() {
  return (
    <aside>
      <ul>
        {CATEGORIAS.map((cat) => (
          <li className="categoria">
            <button className="btn">{cat.nome}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ListaCuriosidades() {
  return (
    <section>
      <ul className="lista-curiosidade">
        {curiosidadesIniciais.map((curiosidade) => (
          <li className="curiosidade">
            <p>
              {curiosidade.texto}
              <a className="fonte" href={curiosidade.fonte} target="_blank">
                (Fonte)
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
