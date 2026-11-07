import './Fileira.css'
import Card from './Card'
import Secao from '../components/Secao'
import Botao from '../components/Botao'

// Uma seção com vários cards. Serve para todas as abas e para os resultados da busca.
// Com "limite", mostra só os primeiros e oferece o botão "Ver todos", que leva à aba "destino".
function Fileira(props) {
  const vazio = !props.vazio ? "Nada por aqui ainda." : props.vazio;
  const cortar = props.limite && props.filmes.length > props.limite;
  const mostrados = cortar ? props.filmes.slice(0, props.limite) : props.filmes;
  return (
    <Secao titulo={props.titulo}>
      {props.filmes.length === 0 ? (
        <p className="fileira-vazia">{vazio}</p>
      ) : (
        <ul className="fileira">
          {mostrados.map((f) => (
            <Card key={f.id} filme={f} fav={props.favs.includes(f.id)} onAbrir={props.onAbrir} onFav={props.onFav} />
          ))}
        </ul>
      )}
      {cortar && props.aoVerTodos ? (
        <div className="fileira-ver-todos">
          <Botao tipo="aba" valor={props.destino} aoClicar={props.aoVerTodos}>Ver todos os {props.filmes.length} ▸</Botao>
        </div>
      ) : null}
    </Secao>
  )
}

export default Fileira
