import './Card.css'
import Botao from '../components/Botao'
import Capa from '../components/Capa'

// Um filme na fileira: o card abre o pop-up e o coração favorita.
function Card(props) {
  const rotulo = props.fav ? "Remover " + props.filme.titulo + " dos favoritos" : "Favoritar " + props.filme.titulo;
  return (
    <li className="card">
      <Botao tipo="bloco" valor={props.filme.id} aoClicar={props.onAbrir}>
        <Capa arquivo={props.filme.poster} titulo={props.filme.titulo} className="card-capa" />
        <h4>{props.filme.titulo}</h4>
      </Botao>
      <div className="card-coracao">
        <Botao tipo="icone" ativo={props.fav} pressionado={props.fav} valor={props.filme.id} aoClicar={props.onFav} rotulo={rotulo}>
          {props.fav ? "♥" : "♡"}
        </Botao>
      </div>
    </li>
  )
}

export default Card
