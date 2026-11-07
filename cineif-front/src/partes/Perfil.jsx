import { useState } from 'react';
import './Perfil.css'
import catalogo from '../dados/catalogo'
import Secao from '../components/Secao'
import Cartao from '../components/Cartao'
import Avatar from '../components/Avatar'
import Formulario from '../components/Formulario'
import Campo from '../components/Campo'
import Selecao from '../components/Selecao'
import Botao from '../components/Botao'
import Aviso from '../components/Aviso'

// A seção "Minha conta" da v1: engrenagem girando e o formulário de preferências.
function Perfil(props) {
  const u = props.usuario;
  const [nome, setNome] = useState(u.nome);
  const [bio, setBio] = useState(u.bio);
  const [foto, setFoto] = useState(u.foto);
  const [genero, setGenero] = useState(u.genero);
  const [aviso, setAviso] = useState("");

  function salvar() {
    props.aoSalvar(nome, bio, foto, genero);
    setAviso("Preferências salvas.");
  }

  return (
    <Secao titulo="Minha conta">
      <div className="engrenagem">⚙</div>
      <Cartao tamanho="caixa">
        <div className="perfil-topo">
          <Avatar key={foto} nome={nome} foto={foto} tamanho={110} />
          <p className="perfil-dica">Cole abaixo o link de uma imagem da internet para usar como foto.</p>
        </div>
        <p className="perfil-email">E-mail: {u.email}</p>
        <div className="perfil-numeros">
          <Cartao tamanho="mini" titulo={props.totalFavoritos}>favoritos</Cartao>
          <Cartao tamanho="mini" titulo={props.totalComentarios}>comentários</Cartao>
          <Cartao tamanho="mini" titulo={props.totalSugestoes}>sugestões</Cartao>
        </div>
        <Formulario aoEnviar={salvar}>
          <Campo id="p-nome" rotulo="Nome do perfil:" valor={nome} aoMudar={setNome} maximo="80" obrigatorio={true} />
          <Campo id="p-foto" rotulo="Link da foto (opcional):" tipo="url" valor={foto} aoMudar={setFoto} placeholder="https://" />
          <Campo id="p-bio" rotulo="Sobre você:" linhas="3" maximo="200" valor={bio} aoMudar={setBio} placeholder="Ex.: Fã de documentários e de cinema nacional" />
          <Selecao id="genero" rotulo="Filtrar por gênero:" valor={genero} aoMudar={setGenero} opcoes={catalogo.GENEROS} />
          <Selecao id="qualidade" rotulo="Qualidade de reprodução:" valor={props.qualidade} aoMudar={props.setQualidade} opcoes={catalogo.QUALIDADES} />
          <Botao type="submit" classe="btn-salvar">Salvar preferências</Botao>
          <Aviso tipo="ok" texto={aviso} />
        </Formulario>
      </Cartao>
    </Secao>
  )
}

export default Perfil
