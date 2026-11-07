import './Campo.css'

// Rótulo + campo de texto. Com "linhas" vira uma caixa de texto grande (textarea).
// aoMudar recebe o texto digitado, então dá para passar direto o setNome, setEmail...
function Campo(props) {
  function mudar(e) {
    props.aoMudar(e.target.value);
  }
  const tipo = !props.tipo ? "text" : props.tipo;
  const classeRotulo = props.escondeRotulo ? "so-leitor" : "campo-rotulo";
  return (
    <div className="campo">
      <label htmlFor={props.id} className={classeRotulo}>{props.rotulo}</label>
      {props.linhas ? (
        <textarea id={props.id} className="campo-entrada" rows={props.linhas} maxLength={props.maximo}
          value={props.valor} onChange={mudar} placeholder={props.placeholder} required={props.obrigatorio} />
      ) : (
        <input id={props.id} className="campo-entrada" type={tipo} maxLength={props.maximo} minLength={props.minimo}
          value={props.valor} onChange={mudar} placeholder={props.placeholder} required={props.obrigatorio} />
      )}
    </div>
  )
}

export default Campo
