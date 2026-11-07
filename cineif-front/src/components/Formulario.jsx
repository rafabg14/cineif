import './Formulario.css'

// Todo formulário do site passa por aqui: o preventDefault fica em um lugar só.
function Formulario(props) {
  function enviar(e) {
    e.preventDefault(); // não deixa o formulário recarregar a página
    props.aoEnviar();
  }
  return (
    <form className="formulario" onSubmit={enviar} role={props.papel}>
      {props.children}
    </form>
  )
}

export default Formulario
