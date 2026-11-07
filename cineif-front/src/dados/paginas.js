const PAGINAS = {
  sobre: {
    titulo: "Sobre nós",
    paragrafos: [
      "O CineIF é um projeto acadêmico da turma 3º B TI do IFBA Campus Santo Amaro. Ele simula uma plataforma de streaming com filmes e documentários que falam de superação, ciência e sociedade.",
      "Nenhum vídeo é hospedado aqui. Os trailers vêm do YouTube e as capas pertencem aos seus respectivos detentores.",
    ],
  },
  termos: {
    titulo: "Termos de uso",
    paragrafos: [
      "Este site é um trabalho escolar, sem fins comerciais. Ao criar uma conta de teste, você concorda em não escrever comentários ofensivos ou ilegais.",
    ],
  },
  privacidade: {
    titulo: "Privacidade",
    paragrafos: [
      "O CineIF funciona só no seu navegador. Contas, favoritos, comentários e sugestões ficam na memória da página e desaparecem quando você a recarrega.",
      "Nada é enviado a um servidor e nenhum dado é guardado fora do seu computador.",
    ],
  },
};

const FAQ = [
  ["Como favorito um título?", "Entre na sua conta e toque no coração do card ou na janela do filme. Os favoritos ficam na aba Favoritos."],
  ["Como comento um filme?", "Abra o filme, escreva no campo de comentários e toque em Comentar. É preciso estar logado."],
  ["Por que meus dados somem quando recarrego a página?", "O site não tem servidor nem banco de dados. Tudo fica na memória da página e some ao recarregar."],
  ["Como entro com a conta de teste?", "Use o e-mail teste@cineif.com e a senha 123456."],
  ["O que é a qualidade de reprodução?", "É a seta ao lado da busca. A sua escolha aparece na janela do filme."],
];

const TECNOLOGIAS = [
  ["React", "Monta as telas e guarda o estado com useState"],
  ["Vite", "Roda e empacota o projeto"],
  ["CSS", "O visual inspirado no Duolingo"],
  ["YouTube", "Fornece os trailers"],
];

const paginas = { PAGINAS, FAQ, TECNOLOGIAS };

export default paginas;
