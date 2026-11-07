import './Opcao.css'

// Uma opção de escolha única (bolinha de rádio) com rótulo.
function Opcao(props) {
  function escolher() {
    props.aoEscolher(props.valor);
  }
  return (
    <label className="opcao">
      <input type="radio" name={props.nome} checked={props.marcado} onChange={escolher} />
      {props.rotulo}
    </label>
  )
}

export default Opcao
