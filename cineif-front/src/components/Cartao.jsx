import './Cartao.css'

// Caixa com bordas grossas, o "bloco" visual do site.
// tamanho: normal, caixa (formulários), mini (números) ou comentario.  cor: verde ou vermelho (título).
function Cartao(props) {
  const cor = !props.cor ? "verde" : props.cor;
  const tamanho = !props.tamanho ? "normal" : props.tamanho;
  return (
    <div className={tamanho === "caixa" ? "cartao form-conta" : "cartao cartao-" + tamanho}>
      {props.titulo !== undefined ? <h3 className={"cartao-titulo cor-" + cor}>{props.titulo}</h3> : null}
      {props.children}
    </div>
  )
}

export default Cartao
