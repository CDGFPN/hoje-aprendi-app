import { useEffect, useState } from "react";
import supabase from "./supabase";

// const curiosidadesIniciais = [
//   {
//     id: 1,
//     texto:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
//     fonte: "http://exemplo.com.br",
//     categoria: "tecnologia",
//     votoCurti: 0,
//     votoMeImpressionei: 0,
//     votoFalso: 0,
//     criadoEm: 2023,
//   },
//   {
//     id: 2,
//     texto:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
//     fonte: "http://exemplo.com.br",
//     categoria: "notícias",
//     votoCurti: 0,
//     votoMeImpressionei: 0,
//     votoFalso: 0,
//     criadoEm: 2023,
//   },
//   {
//     id: 3,
//     texto:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
//     fonte: "http://exemplo.com.br",
//     categoria: "história",
//     votoCurti: 0,
//     votoMeImpressionei: 0,
//     votoFalso: 0,
//     criadoEm: 2023,
//   },
//   {
//     id: 4,
//     texto:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
//     fonte: "http://exemplo.com.br",
//     categoria: "finanças",
//     votoCurti: 0,
//     votoMeImpressionei: 0,
//     votoFalso: 0,
//     criadoEm: 2023,
//   },
//   {
//     id: 5,
//     texto:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sint eaque laudantium.",
//     fonte: "http://exemplo.com.br",
//     categoria: "sociedade",
//     votoCurti: 0,
//     votoMeImpressionei: 0,
//     votoFalso: 0,
//     criadoEm: 2023,
//   },
// ];

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
function App() {
  const [categoriaAtual, setCategoriaAtual] = useState("todos");
  const [curiosidade, setCuriosidade] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(false);

  useEffect(
    function () {
      async function getCuriosidade() {
        setEstaCarregando(true);
        let query = supabase.from("curiosidade").select("*");

        if (categoriaAtual !== "todos")
          query = query.eq("categoria", categoriaAtual);

        const { data: curiosidade, error } = await query
          .order("votoCurti", { ascending: false })
          .limit(1000);

        if (!error) setCuriosidade(curiosidade);
        else alert("Houve um problema ao recuperar os dados");
        setEstaCarregando(false);
      }
      getCuriosidade();
    },
    [categoriaAtual]
  );

  return (
    <>
      <Header />
      <NovoFormCuriosidade setCuriosidade={setCuriosidade} />
      <main className="main">
        <ListaCategorias setCategoriaAtual={setCategoriaAtual} />
        {estaCarregando ? (
          <Carregando />
        ) : (
          <ListaCuriosidades curiosidade={curiosidade} />
        )}
      </main>
    </>
  );
}

function Carregando() {
  return <p className="mensagem">Carregando...</p>;
}

function Header() {
  const tituloApp = "Hoje Aprendi!";
  return (
    <header className="header">
      <div className="logo">
        <img src="./logo.jpeg" height="68" width="68" alt="Logo Hoje Aprendi" />
        <h1>{tituloApp}</h1>
      </div>
      <button className="btn btn-grande">Compartilhe uma curiosidade</button>
    </header>
  );
}

//validador de Url
function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NovoFormCuriosidade({ setCuriosidade }) {
  const [texto, setTexto] = useState("");
  const [fonte, setFonte] = useState("");
  const [categoria, setCategoria] = useState("");
  const tamanhoTexto = texto.length;
  console.log(texto);
  async function controleForm(e) {
    //previne recarregamento
    e.preventDefault();

    //verifica se todos os campos do fomulário são válidos para adicionar ao UI, ainda sem uso de banco de dados
    if (texto && isValidHttpUrl(fonte) && categoria && tamanhoTexto <= 200) {
      
      //upload da nova curiosidade do banco de dados
      const { data: novaCuriosidade, error } = await supabase
        .from("curiosidade")
        .insert([{texto, fonte, categoria }])
        .select()

      //atualiza a UI com a nova curiosidade e persiste  
      if(!error) setCuriosidade((curiosidade) => [novaCuriosidade[0], ...curiosidade]);
      setTexto("");
      setFonte("");
      setCategoria("");
    }
  }
  return (
    <form className="curiosidade-form" onSubmit={controleForm}>
      <input
        type="text"
        placeholder="Compartilhe uma curiosidade..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <span>{200 - tamanhoTexto}</span>
      <input
        type="text"
        placeholder="Fonte confiável"
        value={fonte}
        onChange={(e) => setFonte(e.target.value)}
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Escolha a categoria:</option>
        {CATEGORIAS.map((cat) => (
          <option key={cat.nome} value={cat.nome}>
            {cat.nome.toLocaleUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-grande">Postar</button>
    </form>
  );
}

function ListaCategorias({ setCategoriaAtual }) {
  return (
    <aside>
      <ul>
        <li className="categoria">
          <button
            className="btn btn-todas-categorias"
            onClick={() => setCategoriaAtual("todos")}
          >
            Todos
          </button>
        </li>

        {CATEGORIAS.map((cat) => (
          <li key={cat.nome} className="categoria">
            <button
              className="btn btn-categoria"
              style={{ backgroundColor: cat.cor }}
              onClick={() => setCategoriaAtual(cat.nome)}
            >
              {cat.nome}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function ListaCuriosidades({ curiosidade }) {
  if (curiosidade.length === 0) {
    return (
      <div>
        <p className="mensagem">
          Não existe nenhuma curiosidade nessa categoria :/
        </p>
        <p className="mensagem">Adicione a primeira! 😁</p>
      </div>
    );
  }
  return (
    <section>
      <ul className="lista-curiosidade">
        {curiosidade.map((curiosidade) => (
          <Curiosidades key={curiosidade.id} curiosidade={curiosidade} />
        ))}
      </ul>

      <p>
        {curiosidade.length !== 1
          ? `Existem ${curiosidade.length} curiosidades nesta categoria!`
          : `Existe ${curiosidade.length} curiosidade nesta categoria!`}
      </p>
    </section>
  );
}

function Curiosidades({ curiosidade }) {
  return (
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
          backgroundColor: CATEGORIAS.find(
            (cat) => cat.nome === curiosidade.categoria
          ).cor,
        }}
      >
        {curiosidade.categoria}
      </span>
      <div className="botao-voto">
        <button>❤️{curiosidade.votoCurti}</button>
        <button>🤯{curiosidade.votoMeImpressionei}</button>
        <button>⛔️{curiosidade.votoFalso}</button>
      </div>
    </li>
  );
}

export default App;
