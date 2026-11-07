import Secao from '../components/Secao'
import Cartao from '../components/Cartao'
import CaixaTexto from '../components/CaixaTexto'

function Sugestao(props) {
  return (
    <Secao titulo="O que você quer ver no CineIF?">
      <Cartao tamanho="caixa">
        <CaixaTexto id="sugestao" rotulo="Conte o que você quer ver no CineIF:" botao="Enviar sugestão" aoEnviar={props.aoEnviar}
          placeholder="Escreva aqui sua sugestão de filme ou série..." avisoOk="Sugestão registrada. Ela fica só nesta página, até você recarregar." />
      </Cartao>
    </Secao>
  )
}

export default Sugestao
