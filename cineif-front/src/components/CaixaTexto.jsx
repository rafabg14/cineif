import { useState } from 'react';
import Formulario from './Formulario';
import Campo from './Campo';
import Botao from './Botao';
import Aviso from './Aviso';

// Caixa de texto + botão + mensagem. Serve para comentários e para sugestões.
// aoEnviar(texto) deve devolver "" quando deu certo, ou o texto de um erro.
function CaixaTexto(props) {
  const [texto, setTexto] = useState("");
  const [aviso, setAviso] = useState("");
  const [tipoAviso, setTipoAviso] = useState("ok");

  function enviar() {
    if (texto === "") {
      return;
    }
    const erro = props.aoEnviar(texto);
    if (erro) {
      setTipoAviso("erro");
      setAviso(erro);
    } else {
      setTexto("");
      setTipoAviso("ok");
      setAviso(!props.avisoOk ? "" : props.avisoOk);
    }
  }

  return (
    <Formulario aoEnviar={enviar}>
      <Campo id={props.id} rotulo={props.rotulo} escondeRotulo={true} linhas="3" maximo="500"
        valor={texto} aoMudar={setTexto} placeholder={props.placeholder} />
      <Botao type="submit">{props.botao}</Botao>
      <Aviso tipo={tipoAviso} texto={aviso} />
    </Formulario>
  )
}

export default CaixaTexto
