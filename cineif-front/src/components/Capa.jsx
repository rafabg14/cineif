import { useState } from 'react';
import './Capa.css'

// Mostra a imagem de public/img. Se o arquivo não existir, mostra um bloco verde com o título.
function Capa(props) {
  const [falhou, setFalhou] = useState(false);
  const classe = !props.className ? "" : props.className;
  function falhar() {
    setFalhou(true);
  }
  if (falhou) {
    return <div className={"capa-vazia " + classe} role="img" aria-label={"Capa de " + props.titulo}>{props.titulo}</div>;
  }
  return <img className={"capa " + classe} src={"/img/" + props.arquivo} alt={"Capa de " + props.titulo} onError={falhar} />;
}

export default Capa
