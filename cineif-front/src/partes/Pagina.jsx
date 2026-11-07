import './Pagina.css'
import paginas from '../dados/paginas'
import Secao from '../components/Secao'
import Pergunta from '../components/Pergunta'
import Tabela from '../components/Tabela'
import Contato from './Contato'

// Páginas do rodapé: os textos ficam em dados/paginas.js, aqui só se decide como mostrar.
function Pagina(props) {
  if (props.pagina === "ajuda") {
    return (
      <Secao titulo="Central de ajuda">
        {paginas.FAQ.map((f) => (
          <Pergunta key={f[0]} pergunta={f[0]}>{f[1]}</Pergunta>
        ))}
      </Secao>
    );
  }
  if (props.pagina === "contato") {
    return (
      <Secao titulo="Contato">
        <Contato />
      </Secao>
    );
  }
  const dados = paginas.PAGINAS[props.pagina];
  return (
    <Secao titulo={dados.titulo}>
      {dados.paragrafos.map((p) => (
        <p key={p} className="pagina-texto">{p}</p>
      ))}
      {props.pagina === "sobre" ? <Tabela cabecalho={["Tecnologia", "Para que serve"]} linhas={paginas.TECNOLOGIAS} /> : null}
    </Secao>
  )
}

export default Pagina
