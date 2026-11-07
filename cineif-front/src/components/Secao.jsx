import './Secao.css'

// props.children é tudo o que for escrito entre <Secao> e </Secao>
function Secao(props) {
  return (
    <section className="secao">
      <h2>{props.titulo}</h2>
      {props.subtitulo ? <h3 className="secao-subtitulo">{props.subtitulo}</h3> : null}
      {props.children}
    </section>
  )
}

export default Secao
