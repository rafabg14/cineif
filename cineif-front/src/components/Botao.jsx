import './Botao.css'

// Botão e link em um só componente, com as classes da v1: btn, btn-login (contorno), btn-assistir (grande).
// tipo: verde (padrão), contorno, aba, link, icone, logo, bloco, avatar.
// aoClicar recebe o "valor" do botão, assim um mesmo botão serve para vários itens de uma lista.
function Botao(props) {
  const tipo = !props.tipo ? "verde" : props.tipo;
  let classe = "btn";
  if (tipo === "contorno") {
    classe = classe + " btn-login";
  } else if (tipo !== "verde") {
    classe = classe + " btn-" + tipo;
  }
  if (props.ativo) {
    classe = classe + " ativo";
  }
  if (props.grande) {
    classe = classe + " btn-assistir";
  }
  if (props.classe) {
    classe = classe + " " + props.classe;
  }

  function clicar() {
    if (props.aoClicar) {
      props.aoClicar(props.valor);
    }
  }

  if (props.href) {
    return <a className={classe} href={props.href} target="_blank" rel="noreferrer">{props.children}</a>;
  }
  const type = !props.type ? "button" : props.type;
  return (
    <button type={type} className={classe} onClick={clicar} aria-label={props.rotulo}
      aria-pressed={props.pressionado} aria-expanded={props.expandido}>
      {props.children}
    </button>
  )
}

export default Botao
