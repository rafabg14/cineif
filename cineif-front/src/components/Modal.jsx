import './Modal.css'
import Botao from './Botao'

// Janela por cima da tela. O conteúdo vem em props.children. Fecha pelo X ou clicando fora.
function Modal(props) {
  if (!props.aberto) {
    return null;
  }
  function naoFechar(e) {
    e.stopPropagation(); // clicar dentro da caixa não fecha
  }
  const classe = props.estreito ? "modal modal-estreito" : "modal";
  return (
    <div className="fundo" onClick={props.fechar}>
      <div className={classe} role="dialog" aria-modal="true" onClick={naoFechar}>
        <div className="modal-corpo">
          <div className="modal-fechar">
            <Botao tipo="icone" aoClicar={props.fechar} rotulo="Fechar">✕</Botao>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal
