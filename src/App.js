function App() {
  return (
    <>
      <Header />
      <main className="main">
        <ListaCategorias />
        <ListaCuriosidades />
      </main>
    </>
  );
}

function Header() {
  const tituloApp = "Hoje Aprendi!";
  return (
    <header className="header">
      <div className="logo">
        <img src="./logo.jpeg" height="68" width="68" alt="Logo Hoje Aprendi" />
        <h1>{tituloApp}</h1>
      </div>
      <button className="btn">Compartilhe uma curiosidade</button>
    </header>
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
    categoria: "notícias",
    criadoEm: 2023,
  },
  {
    id: 3,
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
    fonte: "http://exemplo.com.br",
    categoria: "história",
    criadoEm: 2023,
  },
  {
    id: 4,
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
    fonte: "http://exemplo.com.br",
    categoria: "finanças",
    criadoEm: 2023,
  },
  {
    id: 5,
    texto:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
    fonte: "http://exemplo.com.br",
    categoria: "sociedade",
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
          <li key={cat.nome} className="categoria">
            <button className="btn btn-categoria"
            style={{backgroundColor: cat.cor}}>
              {cat.nome}
            </button>
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
          <li key={curiosidade.id} className="curiosidade">
            <p>
              {curiosidade.texto}
              <a
                className="fonte"
                href={curiosidade.fonte}
                target="_blank"
                rel="noreferrer"
              >
                (Fonte)
              </a>
            </p>
            <span
              className="tag-categoria"
              style={{
                backgroundColor: CATEGORIAS.find((cat) => cat.nome === curiosidade.categoria).cor,
              }} 
            >{curiosidade.categoria}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
