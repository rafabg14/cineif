import './Comentarios.css'
import CaixaTexto from '../components/CaixaTexto'
import Cartao from '../components/Cartao'

// Comentários de um filme: a caixa para escrever e a lista dos que já existem.
function Comentarios(props) {
  function enviar(texto) {
    return props.aoPublicar(props.filmeId, texto);
  }
  return (
    <section className="comentarios">
      <h3>Comentários</h3>
      <CaixaTexto id="novo-comentario" rotulo="Seu comentário" botao="Comentar" aoEnviar={enviar}
        placeholder={props.usuario ? "O que você achou?" : "Entre na sua conta para comentar"} />
      {props.lista.length === 0 ? (
        <p className="comentarios-vazio">Seja a primeira pessoa a comentar.</p>
      ) : (
        <ul className="comentarios-lista">
          {props.lista.map((c) => (
            <li key={c.id}>
              <Cartao titulo={c.autor} tamanho="comentario">{c.texto}</Cartao>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Comentarios
