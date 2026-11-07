import './FilmeModal.css'
import catalogo from '../dados/catalogo'
import Modal from '../components/Modal'
import Capa from '../components/Capa'
import Botao from '../components/Botao'
import Trailer from '../components/Trailer'
import Comentarios from './Comentarios'

// Pop-up com os detalhes de um filme. Quando props.filme é vazio, o Modal não desenha nada.
function FilmeModal(props) {
  const filme = props.filme;
  return (
    <Modal aberto={filme ? true : false} fechar={props.fechar}>
      {filme ? (
        <>
          <div className="filme-topo">
            <Capa arquivo={filme.poster} titulo={filme.titulo} className="filme-capa" />
            <div>
              <h2>{filme.titulo}</h2>
              <p className="filme-meta">{filme.ano}, {filme.genero}, {filme.duracao}</p>
              <p>{filme.sinopse}</p>
              <Botao tipo={props.fav ? "verde" : "contorno"} valor={filme.id} aoClicar={props.onFav}>
                {props.fav ? "♥ Nos favoritos" : "♡ Favoritar"}
              </Botao>
            </div>
          </div>
          <h3>Trailer</h3>
          {filme.trailer ? (
            <Trailer codigo={filme.trailer} titulo={"Trailer de " + filme.titulo} />
          ) : (
            <div>
              <Botao tipo="contorno" href={"https://www.youtube.com/results?search_query=" + filme.titulo + " trailer oficial"}>
                Buscar trailer no YouTube
              </Botao>
            </div>
          )}
          <p className="filme-meta">Qualidade de reprodução: {catalogo.NOMES_QUALIDADE[props.qualidade]}</p>
          <Comentarios filmeId={filme.id} lista={props.comentarios} usuario={props.usuario} aoPublicar={props.aoPublicar} />
        </>
      ) : null}
    </Modal>
  )
}

export default FilmeModal
