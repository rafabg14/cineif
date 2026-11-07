import { useState } from 'react'
import './App.css'
import catalogo from './dados/catalogo'
import Secao from './components/Secao'
import Botao from './components/Botao'
import Trailer from './components/Trailer'
import Cabecalho from './partes/Cabecalho'
import Destaque from './partes/Destaque'
import Fileira from './partes/Fileira'
import Grade from './partes/Grade'
import Sugestao from './partes/Sugestao'
import FilmeModal from './partes/FilmeModal'
import ContaModal from './partes/ContaModal'
import Perfil from './partes/Perfil'
import Pagina from './partes/Pagina'
import Rodape from './partes/Rodape'

function App() {
  // O que a tela está mostrando
  const [aba, setAba] = useState("inicio");
  const [busca, setBusca] = useState("");
  const [pagina, setPagina] = useState(""); // "" = tela principal; ou sobre, ajuda, termos, privacidade, contato, perfil
  const [aberto, setAberto] = useState(null); // id do filme com o pop-up aberto
  const [contaAberta, setContaAberta] = useState(false);
  const [qualidade, setQualidade] = useState("auto");

  // Os "dados" do site. Sem banco de dados, ficam na memória da página (somem ao recarregar).
  const [usuarios, setUsuarios] = useState(catalogo.USUARIOS);
  const [usuario, setUsuario] = useState(null); // quem está logado
  const [favoritos, setFavoritos] = useState([]); // lista de { usuarioId, filmeId }
  const [comentarios, setComentarios] = useState(catalogo.COMENTARIOS);
  const [sugestoes, setSugestoes] = useState([]);

  const FILMES = catalogo.FILMES;
  const meusFavs = usuario ? favoritos.filter((f) => f.usuarioId === usuario.id).map((f) => f.filmeId) : [];

  function abrirConta() {
    setContaAberta(true);
  }
  function fecharConta() {
    setContaAberta(false);
  }
  function abrirFilme(id) {
    setAberto(id);
  }
  function fecharFilme() {
    setAberto(null);
  }
  function irPara(nova) {
    setAba(nova);
    setBusca("");
    setPagina("");
  }
  function irPagina(p) {
    setPagina(p);
    window.scrollTo(0, 0);
  }
  function abrirPerfil() {
    irPagina("perfil");
  }

  // Estas funções devolvem "" quando dá certo, ou o texto do erro
  function cadastrar(nome, email, senha) {
    if (senha.length < 6) {
      return "A senha precisa ter 6 ou mais caracteres.";
    }
    if (usuarios.filter((u) => u.email === email).length > 0) {
      return "Esse e-mail já está cadastrado.";
    }
    const novo = { id: Date.now(), nome: nome, email: email, senha: senha, bio: "", foto: "", genero: "todos" };
    setUsuarios(usuarios.concat(novo));
    setUsuario(novo);
    return "";
  }
  function entrar(email, senha) {
    const achados = usuarios.filter((u) => u.email === email && u.senha === senha);
    if (achados.length === 0) {
      return "E-mail ou senha incorretos.";
    }
    setUsuario(achados[0]);
    return "";
  }
  function sair() {
    setUsuario(null);
    setPagina("");
  }
  function salvarPerfil(nome, bio, foto, genero) {
    const atualizado = { id: usuario.id, nome: nome, email: usuario.email, senha: usuario.senha, bio: bio, foto: foto, genero: genero };
    setUsuario(atualizado);
    setUsuarios(usuarios.map((u) => (u.id === usuario.id ? atualizado : u)));
  }
  function favoritar(id) {
    if (!usuario) {
      setContaAberta(true);
      return;
    }
    if (meusFavs.includes(id)) {
      setFavoritos(favoritos.filter((f) => !(f.usuarioId === usuario.id && f.filmeId === id)));
    } else {
      setFavoritos(favoritos.concat({ usuarioId: usuario.id, filmeId: id }));
    }
  }
  function publicarComentario(filmeId, texto) {
    if (!usuario) {
      setContaAberta(true);
      return "Entre na sua conta para comentar.";
    }
    const novo = { id: Date.now(), filmeId: filmeId, autorId: usuario.id, autor: usuario.nome, texto: texto };
    setComentarios([novo].concat(comentarios));
    return "";
  }
  function registrarSugestao(texto) {
    if (!usuario) {
      setContaAberta(true);
      return "Entre na sua conta para enviar.";
    }
    setSugestoes([{ id: Date.now(), usuarioId: usuario.id, texto: texto }].concat(sugestoes));
    return "";
  }

  const termo = busca.trim().toLowerCase();
  const alta = FILMES.filter((f) => f.colecao === "alta");
  const blockbusters = FILMES.filter((f) => f.colecao === "blockbuster");
  const educativos = FILMES.filter((f) => f.colecao === "educativo");
  const paraVoce = usuario && usuario.genero !== "todos" ? FILMES.filter((f) => f.genero.includes(usuario.genero)) : [];
  const docs = FILMES.filter((f) => f.tipo === "doc");

  let conteudo;
  if (pagina === "perfil") {
    if (usuario) {
      conteudo = (
        <Perfil key={usuario.id} usuario={usuario} aoSalvar={salvarPerfil}
          totalFavoritos={meusFavs.length}
          totalComentarios={comentarios.filter((c) => c.autorId === usuario.id).length}
          totalSugestoes={sugestoes.filter((s) => s.usuarioId === usuario.id).length}
          qualidade={qualidade} setQualidade={setQualidade} />
      );
    } else {
      conteudo = (
        <Secao titulo="Meu perfil">
          <p>Entre na sua conta para ver o perfil.</p>
          <Botao aoClicar={abrirConta}>Entrar</Botao>
        </Secao>
      );
    }
  } else if (pagina) {
    conteudo = <Pagina pagina={pagina} />;
  } else if (termo) {
    const achados = FILMES.filter((f) => (f.titulo + " " + f.genero + " " + f.sinopse).toLowerCase().includes(termo));
    conteudo = <Fileira titulo={"Resultados para “" + busca.trim() + "”"} filmes={achados} vazio="Nenhum título encontrado. Tente outra palavra." favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />;
  } else if (aba === "filmes") {
    conteudo = <Fileira titulo="Filmes" filmes={FILMES.filter((f) => f.tipo === "filme")} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />;
  } else if (aba === "blockbusters") {
    conteudo = <Fileira titulo="Blockbusters" filmes={blockbusters} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />;
  } else if (aba === "educativos") {
    conteudo = <Fileira titulo="Educativos" filmes={educativos} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />;
  } else if (aba === "series") {
    conteudo = <Fileira titulo="Séries" filmes={FILMES.filter((f) => f.serie)} vazio="Nenhuma série cadastrada." favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />;
  } else if (aba === "docs") {
    conteudo = <Fileira titulo="Documentários" filmes={docs} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />;
  } else if (aba === "favoritos") {
    const vazio = usuario ? "Toque no coração de um título para guardá-lo aqui." : "Entre na sua conta para guardar seus favoritos.";
    conteudo = <Fileira titulo="Favoritos" filmes={FILMES.filter((f) => meusFavs.includes(f.id))} vazio={vazio} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />;
  } else {
    conteudo = (
      <>
        <Destaque filme={FILMES.find((f) => f.destaque)} onAbrir={abrirFilme} />
        <Fileira titulo="Em alta no CineIF" filmes={alta} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />
        {paraVoce.length > 0 ? <Fileira titulo={"Para você: " + usuario.genero} filmes={paraVoce} limite={8} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} /> : null}
        <Fileira titulo="Blockbusters" filmes={blockbusters} limite={8} destino="blockbusters" aoVerTodos={irPara} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />
        <Fileira titulo="Para aprender" filmes={educativos} limite={8} destino="educativos" aoVerTodos={irPara} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />
        <Fileira titulo="Documentários" filmes={docs} favs={meusFavs} onAbrir={abrirFilme} onFav={favoritar} />
        <Grade />
        <Secao titulo="Trailer da semana">
          <Trailer codigo="TMId7r0Tsjc" titulo="Trailer da semana" />
        </Secao>
        <Sugestao aoEnviar={registrarSugestao} />
      </>
    );
  }

  // A chave muda quando a tela muda: o React recria o <main> e a animação de entrada roda de novo
  let chave = aba;
  if (pagina) {
    chave = "p-" + pagina;
  } else if (termo) {
    chave = "busca";
  }

  return (
    <>
      <Cabecalho busca={busca} setBusca={setBusca} aba={pagina || termo ? "" : aba} irPara={irPara} usuario={usuario}
        abrirConta={abrirConta} abrirPerfil={abrirPerfil} sair={sair}
        qualidade={qualidade} setQualidade={setQualidade} />
      <main key={chave} className="pagina entrada">{conteudo}</main>
      <Rodape irPagina={irPagina} />
      <FilmeModal filme={FILMES.find((f) => f.id === aberto)} fechar={fecharFilme} fav={meusFavs.includes(aberto)}
        onFav={favoritar} usuario={usuario} qualidade={qualidade}
        comentarios={comentarios.filter((c) => c.filmeId === aberto)} aoPublicar={publicarComentario} />
      <ContaModal aberta={contaAberta} fechar={fecharConta} aoEntrar={entrar} aoCadastrar={cadastrar} />
    </>
  )
}

export default App
