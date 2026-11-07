# CineIF 2.0 (só frontend, React)

Sem servidor e sem banco de dados. Contas, favoritos, comentários e sugestões vivem na memória da página e somem ao recarregar.

Como rodar: `npm install` e `npm run dev`.
Conta de teste: `teste@cineif.com` / `123456`.

## Pastas (em `src/`)
- `components/`: peças genéricas, reaproveitadas no site todo (Botao, Campo, Formulario, Aviso, Cartao, Secao, Modal, Tabela, Capa, Avatar, Trailer, Opcao, Pergunta, CaixaTexto).
- `partes/`: as partes do CineIF, montadas com as peças genéricas (Cabecalho, Destaque, Card, Fileira, Grade, FilmeModal, Comentarios, ContaModal, Perfil, Sugestao, Contato, Pagina, Rodape).
- `dados/`: os filmes, a grade e os textos das páginas (`catalogo.js` e `paginas.js`).
- Cada componente tem o seu `.css` ao lado, como o `Contador.css` da aula.

Capas em `public/img/` (a lista das que faltam está em `capas-para-baixar.md`; sem a imagem o card mostra um bloco verde com o título). Trailers: campo `trailer` em `src/dados/catalogo.js`.
