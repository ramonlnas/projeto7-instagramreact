import react from "react";

function Post(props) {
  const [like, setLike] = react.useState(false)
  const [salva,setSalva] = react.useState(false)
  const [count, setCount] = react.useState(props.pessoasCurtida)
  function likePost () {
   if (like === false){
    setLike(true)
    setCount((Number(count) + 0.001).toFixed(3))

   }else{
    setLike(false)
    setCount((Number(count) - 0.001).toFixed(3))
   }
  }
  function salvaPost () {
    if(salva === false){
      setSalva(true)
    }else{
      setSalva(false)
    }
  }
  

  return (
    
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.usuarioFoto} />
          {props.usuarioTexto}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img class={(like === false ? "" : "colorido") } onClick={likePost} name={(like === false ? "heart-outline" : "heart")} src={props.imagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon class={(like === false ? "" : "colorido") } onClick={likePost} name={(like === false ? "heart-outline" : "heart")} ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={salvaPost} name={salva === false ? "bookmark-outline" : "bookmark"}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.pagCurtida} />
          <div class="texto">
            Curtido por 
             <strong> {props.usuarioCurtida}</strong> e{" "}
            <strong> outras {count} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  
  const arrayPost = [      <Post
    usuarioFoto="assets/img/meowed.svg"
    usuarioTexto="meowed"
    imagem="assets/img/gato-telefone.svg"
    pagCurtida = "assets/img/respondeai.svg"
    usuarioCurtida = "respondeai"
    pessoasCurtida = {101.523}


  />,
  <Post
    usuarioFoto="assets/img/barked.svg"
    usuarioTexto="barked"
    imagem="assets/img/dog.svg"
    pagCurtida="assets/img/adorable_animals.svg"
    usuarioCurtida="adorable_animals"
    pessoasCurtida={99.159}
  />
]
  return (
    <ul>
      {arrayPost.map((p) => <li>{p}</li>)}
    </ul>
  );
}
