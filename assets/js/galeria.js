/* =========================================================
   GALERIA DO PORTFÓLIO. Este é o único arquivo que você
   precisa editar para atualizar as fotos do site.

   COMO ADICIONAR UMA FOTO
   1. Salve a imagem (já com o rosto coberto) dentro de
      assets/img/galeria/
   2. Acrescente uma linha na lista abaixo, no mesmo formato
      das outras. Não esqueça da vírgula no final.

   CAMPOS
   arquivo  → nome exato do arquivo, com a extensão
   legenda  → texto curto que aparece ao passar o mouse e
              dentro da foto ampliada
   colecao  → ano ou espetáculo (usado no futuro para separar
              o portfólio em abas; pode deixar igual em todas)

   ONDE AS FOTOS APARECEM
   A página inicial mostra apenas as 6 primeiras da lista e,
   havendo mais, exibe o botão "Veja mais trabalhos", que leva
   à página portfolio.html, e essa mostra todas.
   Ou seja: ponha na frente da lista as fotos que você quer
   como vitrine da página inicial.

   DICA: se a lista ficar vazia, o site volta a mostrar
   quadros de "foto em breve" no lugar, sem quebrar nada.
   ========================================================= */


/* ---------------------------------------------------------
   AS DUAS FOTOS GRANDES DO SITE

   hero  → foto que aparece ao lado do título, logo no topo.
           Arquivo salvo em assets/img/
   sobre → foto da Paula na seção "Sobre o ateliê".
           Arquivo salvo em assets/img/sobre/

   Deixe entre aspas o nome do arquivo. Enquanto estiver
   vazio (""), o site mostra a moldura com o ramo da marca.
   --------------------------------------------------------- */

window.TILINDA_FOTOS = {
  hero:  "hero.jpg",
  sobre: "paula.jpg"
};


window.TILINDA_GALERIA = [

  /* ---- as 6 primeiras aparecem na página inicial ---- */
  { arquivo: "figurino-01.jpg", legenda: "Figurino laranja e amarelo com arco, em cena", colecao: "2025" },
  { arquivo: "figurino-02.jpg", legenda: "Trio de tutus lilás com corpete bordado", colecao: "2025" },
  { arquivo: "figurino-03.jpg", legenda: "Figurino amarelo e roxo com saia estruturada em arcos", colecao: "2025" },
  { arquivo: "figurino-04.jpg", legenda: "Collant rosa com brilho e tutu branco", colecao: "2025" },
  { arquivo: "figurino-05.jpg", legenda: "Figurino vermelho com tutu branco e acabamento vermelho", colecao: "2025" },
  { arquivo: "figurino-06.jpg", legenda: "Grupo em cena com tutus coloridos", colecao: "2025" },

  /* ---- daqui em diante, só na página portfolio.html ---- */
  { arquivo: "figurino-07.jpg", legenda: "Dupla de tutus lilás e branco no palco", colecao: "2025" },
  { arquivo: "figurino-08.jpg", legenda: "Vestido vermelho e branco com gola marinheira", colecao: "2025" },
  { arquivo: "figurino-09.jpg", legenda: "Macacão bicolor preto e vermelho, de manga longa", colecao: "2025" },
  { arquivo: "figurino-10.jpg", legenda: "Tutu dourado com brilho, na sala de aula", colecao: "2025" },
  { arquivo: "figurino-11.jpg", legenda: "Conjunto de tutus verdes para número com sombrinhas", colecao: "2025" },
  { arquivo: "figurino-12.jpg", legenda: "Corpete branco e dourado com mangas bufantes", colecao: "2025" },
  { arquivo: "figurino-13.jpg", legenda: "Tutu arco-íris com body pink, em cena", colecao: "2025" },
  { arquivo: "figurino-14.jpg", legenda: "Figurino laranja com tutu e laço, no palco", colecao: "2025" },
  { arquivo: "figurino-15.jpg", legenda: "Tutu lilás claro sob a luz do palco", colecao: "2025" },
  { arquivo: "figurino-16.jpg", legenda: "Body lilás com tutu branco de tule", colecao: "2025" },
  { arquivo: "figurino-17.jpg", legenda: "Trio de casaquinhos arco-íris com tutus coloridos", colecao: "2025" },
  { arquivo: "figurino-18.jpg", legenda: "Figurino listrado amarelo e preto com tutu", colecao: "2025" },
  { arquivo: "figurino-19.jpg", legenda: "Collant amarelo com brilho e tutu de tule amarelo", colecao: "2025" },
  { arquivo: "figurino-20.jpg", legenda: "Dupla de vestidos longos rosé com brilho", colecao: "2025" },
  { arquivo: "figurino-21.jpg", legenda: "Conjunto dourado metalizado de duas peças", colecao: "2025" },
  { arquivo: "figurino-22.jpg", legenda: "Body preto e rosa com tutu lilás", colecao: "2025" },
  { arquivo: "figurino-23.jpg", legenda: "Corpete dourado com saia preta e barra dourada", colecao: "2025" },
  { arquivo: "figurino-24.jpg", legenda: "Figurino temático amarelo e preto com saia estruturada", colecao: "2025" },
  { arquivo: "figurino-25.jpg", legenda: "Figurino cor de bronze com babados e tule", colecao: "2025" },
  { arquivo: "figurino-26.jpg", legenda: "Tutu lilás com corpete perolado e mangas bufantes", colecao: "2025" },
  { arquivo: "figurino-27.jpg", legenda: "Figurino rosa e amarelo com cartola", colecao: "2025" },
  { arquivo: "figurino-28.jpg", legenda: "Top e saia pink com brilho", colecao: "2025" },
  { arquivo: "figurino-29.jpg", legenda: "Grupo de tutus amarelos e vermelhos nos bastidores", colecao: "2025" },
  { arquivo: "figurino-30.jpg", legenda: "Figurino com saia estampada de coração e cartas", colecao: "2025" },
  { arquivo: "figurino-31.jpg", legenda: "Dupla de vestidos azul-claro com saia de tule", colecao: "2025" },
  { arquivo: "figurino-32.jpg", legenda: "Grupo no palco com tutus brancos sob luz azul", colecao: "2025" },
  { arquivo: "figurino-33.jpg", legenda: "Grupo no palco com tutus lilás e brancos", colecao: "2025" },

];
