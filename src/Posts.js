function Post(props) {
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
        <img src={props.imagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.pagCurtida} />
          <div class="texto">
            Curtido por 
             <strong> {props.usuarioCurtida}</strong> e
            <strong> outras {props.pessoasCurtida} pessoas</strong>
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
    pessoasCurtida = "101523"


  />,
  <Post
    usuarioFoto="assets/img/barked.svg"
    usuarioTexto="barked"
    imagem="assets/img/dog.svg"
    pagCurtida="assets/img/adorable_animals.svg"
    usuarioCurtida="adorable_animals"
    pessoasCurtida="200541"
  />
]
  return (
    <ul>
      {arrayPost.map((p) => <li>{p}</li>)}
    </ul>
  );
}
