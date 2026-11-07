import './Destaque.css'
import Botao from '../components/Botao'

// O .banner da v1: foto de fundo, título, sinopse e o botão "Assistir agora".
function Destaque(props) {
  const fundo = { backgroundImage: "url(/img/" + props.filme.poster + ")" };
  return (
    <section className="banner" style={fundo}>
      <h1>{props.filme.titulo}</h1>
      <p className="sinopse">{props.filme.sinopse}</p>
      <br />
      <Botao grande={true} valor={props.filme.id} aoClicar={props.onAbrir}>▶ Assistir agora</Botao>
    </section>
  )
}

export default Destaque
