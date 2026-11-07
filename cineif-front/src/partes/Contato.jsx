import { useState } from 'react';
import Cartao from '../components/Cartao'
import Formulario from '../components/Formulario'
import Campo from '../components/Campo'
import Botao from '../components/Botao'
import Aviso from '../components/Aviso'

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [aviso, setAviso] = useState("");

  function enviar() {
    setNome("");
    setEmail("");
    setMensagem("");
    setAviso("Mensagem registrada. Como o site não tem servidor, ela não sai desta página.");
  }

  return (
    <Cartao tamanho="caixa">
      <Formulario aoEnviar={enviar}>
        <Campo id="ct-nome" rotulo="Nome" valor={nome} aoMudar={setNome} maximo="80" obrigatorio={true} />
        <Campo id="ct-email" rotulo="E-mail" tipo="email" valor={email} aoMudar={setEmail} obrigatorio={true} />
        <Campo id="ct-msg" rotulo="Mensagem" linhas="4" maximo="1000" valor={mensagem} aoMudar={setMensagem} obrigatorio={true} />
        <Botao type="submit">Enviar mensagem</Botao>
        <Aviso tipo="ok" texto={aviso} />
      </Formulario>
    </Cartao>
  )
}

export default Contato
