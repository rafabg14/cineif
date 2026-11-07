import { useState } from 'react';
import './Cabecalho.css'
import catalogo from '../dados/catalogo'
import Botao from '../components/Botao'
import Campo from '../components/Campo'
import Formulario from '../components/Formulario'
import Opcao from '../components/Opcao'
import Avatar from '../components/Avatar'

// Barra do topo: logo, qualidade, busca, conta e abas.
function Cabecalho(props) {
  const [aberta, setAberta] = useState(false);

  function alternar() {
    setAberta(!aberta);
  }
  function naoFazNada() {
    // a busca filtra enquanto você digita; o Enter não precisa fazer nada
  }

  return (
    <header id="cabecalho">
      <div className="topo">
        <Botao tipo="logo" classe="logo" valor="inicio" aoClicar={props.irPara} rotulo="CineIF, início">
          <img src="/logo-ifba.png" alt="" width="36" height="42" />
          <span>Cine<span id="if-destaque">IF</span></span>
        </Botao>

        <div className="busca">
          <div className="qualidade">
            <Botao tipo="aba" aoClicar={alternar} expandido={aberta} rotulo="Qualidade de reprodução">
              {aberta ? "◂" : "▸"}
            </Botao>
            {aberta ? (
              <fieldset className="painel">
                <legend>Qualidade de reprodução</legend>
                {catalogo.QUALIDADES.map((q) => (
                  <Opcao key={q[0]} nome="qualidade" valor={q[0]} rotulo={q[1]}
                    marcado={props.qualidade === q[0]} aoEscolher={props.setQualidade} />
                ))}
              </fieldset>
            ) : null}
          </div>
          <div className="busca-campo">
            <Formulario aoEnviar={naoFazNada} papel="search">
              <Campo id="campo-busca" rotulo="Buscar" escondeRotulo={true} valor={props.busca}
                aoMudar={props.setBusca} placeholder="Filmes, séries ou documentários..." />
              <Botao type="submit">Buscar</Botao>
            </Formulario>
          </div>
        </div>

        <div className="conta-topo">
          {props.usuario ? (
            <Botao tipo="avatar" aoClicar={props.abrirPerfil} rotulo="Meu perfil">
              <Avatar key={props.usuario.foto} nome={props.usuario.nome} foto={props.usuario.foto} tamanho={42} />
            </Botao>
          ) : null}
          <Botao tipo="contorno" aoClicar={props.usuario ? props.sair : props.abrirConta}>
            {props.usuario ? "Sair" : "Entrar"}
          </Botao>
        </div>
      </div>

      <nav className="abas" aria-label="Categorias">
        {catalogo.ABAS.map((a) => (
          <Botao key={a[0]} tipo="aba" ativo={props.aba === a[0]} valor={a[0]} aoClicar={props.irPara}>{a[1]}</Botao>
        ))}
      </nav>
    </header>
  )
}

export default Cabecalho
