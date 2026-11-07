import { useState } from 'react';
import './Avatar.css'

// Foto redonda do perfil. Sem foto (ou com link quebrado), mostra a inicial do nome.
function Avatar(props) {
  const [falhou, setFalhou] = useState(false);
  const tamanho = !props.tamanho ? 40 : props.tamanho;
  const estilo = { width: tamanho, height: tamanho, fontSize: tamanho / 2.2 };
  function falhar() {
    setFalhou(true);
  }
  if (props.foto && !falhou) {
    return <img className="avatar" style={estilo} src={props.foto} alt="" onError={falhar} />;
  }
  const inicial = !props.nome ? "?" : props.nome.charAt(0).toUpperCase();
  return <span className="avatar" style={estilo} aria-hidden="true">{inicial}</span>;
}

export default Avatar
