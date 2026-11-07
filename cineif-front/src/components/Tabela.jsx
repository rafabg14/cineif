import './Tabela.css'

// Tabela genérica: cabecalho é uma lista de títulos e linhas é uma lista de listas.
function Tabela(props) {
  return (
    <div className="grade-rolagem">
      <table className="grade">
        <thead>
          <tr>
            {props.cabecalho.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.linhas.map((linha, i) => (
            <tr key={i}>
              {linha.map((celula, j) => (
                <td key={j}>{celula}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tabela
