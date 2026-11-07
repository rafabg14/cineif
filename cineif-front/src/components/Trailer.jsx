import './Trailer.css'

// Vídeo do YouTube em proporção 16:9. "codigo" é o que vem depois de v= na URL.
function Trailer(props) {
  return (
    <div className="trailer">
      <iframe src={"https://www.youtube.com/embed/" + props.codigo} title={props.titulo} allowFullScreen
        allow="encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" />
    </div>
  )
}

export default Trailer
