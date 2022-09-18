import React from "react";


function UsuarioProps(props) {
  const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")
  const [nome, setNome] = React.useState("Catana")

  function inserirFoto(){
    const fotoPrompt = prompt("Digite a nova URL da imagem")
    setFoto(fotoPrompt)
    console.log(fotoPrompt)
  }
  function inserirNome () {
    const nomePrompt = prompt("Digite o novo nome de usuário")
    setNome(nomePrompt)
  }
  return (
    <div class="usuario">
      <img  onClick = {inserirFoto} src={foto} />
      <div class="texto">
        <strong>{props.usuario}</strong>
        <span>
          {nome}
          <ion-icon onClick = {inserirNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
export default function Usuario() {
  return (
    <UsuarioProps  usuario = "Catana Comics"  />
  )
}
