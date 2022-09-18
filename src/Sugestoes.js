import Sidebarzinha from "./Sidebarzinha";

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sugestoes() {
  

  const arraySugestoes = [          <Sugestao imagem = "assets/img/bad.vibes.memes.svg" nome = "bad.vibes.memes" razao = "Segue você" />,
  <Sugestao imagem = "assets/img/chibirdart.svg" nome = "chibirdart" razao = "Segue você" />,
  <Sugestao imagem = "assets/img/razoesparaacreditar.svg" nome = "razoesparaacreditar" razao = "Novo no Instagram" />,
  <Sugestao imagem = "assets/img/adorable_animals.svg" nome = "adorable_animals" razao = "Segue você" />,
  <Sugestao imagem = "assets/img/smallcutecats.svg" nome = "smallcutecats" razao = "Segue você" />
]
  return (
    <>
      <div class="sidebar">
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {arraySugestoes.map((s) => <div>{s}</div>)}
          <Sidebarzinha/>
        </div>
      </div>
      
    </>
  );
}
