function App() {
  return (
    <Header />
  );
}

function Header(){
  const tituloApp = "Hoje Aprendi!"

  return(
    <>
    <header className="header">
      <div className="logo">
        <img src="./logo.jpeg" height="68" width="68" alt="Logo Hoje Aprendi" />
        <h1>{tituloApp}</h1>
      </div>
      <button className="btn">Compartilhe uma curiosidade</button>
    </header>
    <main className="main">
      <ListaCategorias />
    </main>
    </>
  )
}

const CATEGORIAS = [
  {nome: 'tecnologia', cor: '#3b82f6'},
  {nome: 'ciência', cor: '#16a34a'},
  {nome: 'finanças', cor: '#ef4444'},
  {nome: 'sociedade', cor: '#eab308'},
  {nome: 'entretenimento', cor: '#db2777'},
  {nome: 'saúde', cor: '#14b8a6'},
  {nome: 'história', cor: '#f97316'},
  {nome: 'notícias', cor: '#8b5cf6'}
]

function ListaCategorias(){
  return(
    <aside>
      <ul>
      {CATEGORIAS.map((cat) => (
        <li>
          {cat.nome}
        </li>
      ))}
      </ul>
    </aside>
  )
}

export default App;
