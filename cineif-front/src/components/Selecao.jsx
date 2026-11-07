import './Selecao.css'

// Rótulo + lista de escolha (o <select> da v1). opcoes é uma lista de pares [valor, texto].
function Selecao(props) {
  function mudar(e) {
    props.aoMudar(e.target.value);
  }
  return (
    <div className="campo">
      <label htmlFor={props.id} className="campo-rotulo">{props.rotulo}</label>
      <select id={props.id} className="selecao" value={props.valor} onChange={mudar}>
        {props.opcoes.map((o) => (
          <option key={o[0]} value={o[0]}>{o[1]}</option>
        ))}
      </select>
    </div>
  )
}

export default Selecao
