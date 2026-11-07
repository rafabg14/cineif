import catalogo from '../dados/catalogo'
import Secao from '../components/Secao'
import Tabela from '../components/Tabela'

function Grade() {
  return (
    <Secao titulo="Grade de programação — Canal CineIF" subtitulo="Semana de 20 a 26 de julho">
      <Tabela cabecalho={["Horário", "Título", "Categoria", "Duração"]} linhas={catalogo.GRADE} />
    </Secao>
  )
}

export default Grade
