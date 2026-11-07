import './Pergunta.css'

// Pergunta que abre e fecha sozinha (tag details). A resposta é o props.children.
function Pergunta(props) {
  return (
    <details className="pergunta">
      <summary>{props.pergunta}</summary>
      <p>{props.children}</p>
    </details>
  )
}

export default Pergunta
