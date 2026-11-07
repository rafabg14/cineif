import './Rodape.css'
import catalogo from '../dados/catalogo'
import Botao from '../components/Botao'

// O #rodape da v1: título, links separados por "|" e os créditos.
function Rodape(props) {
  return (
    <footer id="rodape">
      <img src="/logo-ifba.png" alt="Instituto Federal da Bahia" width="56" />
      <h3>CineIF</h3>
      <nav aria-label="Rodapé">
        {catalogo.LINKS_RODAPE.map((l, i) => (
          <span key={l[0]}>
            {i > 0 ? " | " : ""}
            <Botao tipo="link" valor={l[0]} aoClicar={props.irPagina}>{l[1]}</Botao>
          </span>
        ))}
      </nav>
      <p className="creditos">Projeto acadêmico de HTML, CSS e React — CineIF © 2026</p>
    </footer>
  )
}

export default Rodape
