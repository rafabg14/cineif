import './Aviso.css'

// Mensagem curta: tipo "ok" (verde), "erro" (vermelho) ou "info" (cinza). Sem texto, não aparece.
function Aviso(props) {
  if (!props.texto) {
    return null;
  }
  return <p className={"aviso aviso-" + props.tipo} role="status">{props.texto}</p>;
}

export default Aviso
