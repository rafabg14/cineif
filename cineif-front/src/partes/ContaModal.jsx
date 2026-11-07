import { useState } from 'react';
import Modal from '../components/Modal'
import Formulario from '../components/Formulario'
import Campo from '../components/Campo'
import Botao from '../components/Botao'
import Aviso from '../components/Aviso'

// Pop-up de entrar e criar conta. aoEntrar e aoCadastrar devolvem "" se deu certo, ou o texto do erro.
function ContaModal(props) {
  const [modo, setModo] = useState("entrar"); // "entrar" ou "criar"
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function trocarModo() {
    setModo(modo === "entrar" ? "criar" : "entrar");
    setErro("");
  }

  function enviar() {
    const resultado = modo === "criar" ? props.aoCadastrar(nome, email, senha) : props.aoEntrar(email, senha);
    if (resultado) {
      setErro(resultado);
    } else {
      setNome("");
      setEmail("");
      setSenha("");
      setErro("");
      props.fechar();
    }
  }

  return (
    <Modal aberto={props.aberta} fechar={props.fechar} estreito={true}>
      <h2>{modo === "entrar" ? "Entrar no CineIF" : "Criar conta"}</h2>
      <Formulario aoEnviar={enviar}>
        {modo === "criar" ? (
          <Campo id="c-nome" rotulo="Nome do perfil" valor={nome} aoMudar={setNome} maximo="80" obrigatorio={true} />
        ) : null}
        <Campo id="c-email" rotulo="E-mail" tipo="email" valor={email} aoMudar={setEmail} obrigatorio={true} />
        <Campo id="c-senha" rotulo="Senha (mínimo 6 caracteres)" tipo="password" minimo="6" valor={senha} aoMudar={setSenha} obrigatorio={true} />
        <Aviso tipo="info" texto={modo === "entrar" ? "Para testar: teste@cineif.com e senha 123456." : "Projeto de estudo: a conta só existe até você recarregar a página."} />
        <Botao type="submit">{modo === "entrar" ? "Entrar" : "Criar conta"}</Botao>
        <Aviso tipo="erro" texto={erro} />
        <Botao tipo="link" aoClicar={trocarModo}>
          {modo === "entrar" ? "Ainda não tenho conta" : "Já tenho conta"}
        </Botao>
      </Formulario>
    </Modal>
  )
}

export default ContaModal
