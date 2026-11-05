# Site — Ateliê Tilinda

Site estático (HTML + CSS + JavaScript puro). Não tem build, não tem dependência,
não precisa instalar nada. Para ver no computador, basta abrir o `index.html` no navegador.

## Estrutura

```
index.html                  página inicial
portfolio.html              galeria completa ("Veja mais trabalhos")
cuidados.html               como lavar e conservar o figurino
assets/
  css/style.css             todo o visual
  js/galeria.js             <- ARQUIVO QUE VOCÊ EDITA para trocar as fotos
  js/main.js                comportamento (menu, lightbox, animações)
  img/
    logo-tilinda.png        logo preta (cabeçalho)
    logo-tilinda-branco.png logo branca (rodapé)
    ramo.png / ramo-branco.png   ramo da marca, usado como detalhe
    favicon.png             ícone da aba do navegador
    apple-touch-icon.png    ícone ao salvar na tela do celular
    og-image.png            imagem que aparece ao compartilhar no WhatsApp
    hero.jpg                foto grande da primeira dobra
    galeria/                as 33 fotos do portfólio
    sobre/paula.jpg         foto da Paula
```

Tudo o que você precisa trocar está em **um único arquivo**: `assets/js/galeria.js`.
Ele tem duas partes — as duas fotos grandes do site e a lista do portfólio.

## Atualizar o portfólio (uma vez por ano)

1. Cubra os rostos das crianças antes de tudo (o selo redondo da marca,
   como nas fotos atuais, funciona bem).
2. Salve as fotos em `assets/img/galeria/`.
   - Formato: `.jpg`
   - Tamanho recomendado: lado maior com cerca de 1600 px
   - Nomes sem acento e sem espaço (ex.: `figurino-ballet-01.jpg`)
3. Abra `assets/js/galeria.js` no Bloco de Notas e acrescente uma linha por foto:

```js
{ arquivo: "figurino-ballet-01.jpg", legenda: "Figurino de ballet — espetáculo de encerramento", colecao: "2026" },
```

4. Salve o arquivo e atualize a página.

### As duas páginas da galeria

A **página inicial** mostra só as **6 primeiras** fotos da lista, numa grade
limpa de 3 por 2. Havendo mais
que isso, aparece o botão *"Veja mais trabalhos ↗"*, que leva à página
`portfolio.html` — e essa mostra **todas**.

Então coloque no começo da lista as fotos que você quer como vitrine.

Para mudar quantas aparecem na página inicial, edite o número em `index.html`:

```html
<div class="galeria galeria-home" id="galeria" data-limite="6" data-vazios="6" ...>
```

> Não precisa se preocupar com a conta: se sobrar espaço na última fileira,
> a última foto se estica sozinha para preencher, em vez de ficar num
> cantinho. Vale para qualquer quantidade, nas duas páginas.

Enquanto a lista estiver vazia, o site mostra seis quadros de *"foto em breve"*.
Eles somem sozinhos assim que a primeira foto real for cadastrada.

O campo `colecao` ainda não aparece na tela — ele existe para que, no futuro,
o portfólio possa ser separado em abas por ano ou por espetáculo sem precisar
recadastrar nada.

## As duas fotos grandes

| Onde aparece | Salve o arquivo em | Proporção ideal | Situação |
|---|---|---|---|
| Topo, ao lado do título | `assets/img/` | retrato, 3:4 | já definida |
| Seção "Sobre o ateliê" | `assets/img/sobre/` | retrato, 3:4 | já definida |

Os nomes dos arquivos ficam no topo de `assets/js/galeria.js`:

```js
window.TILINDA_FOTOS = {
  hero:  "hero.jpg",
  sobre: "paula.jpg"
};
```

A foto do topo hoje é uma cópia da `figurino-14.jpg` (o figurino laranja no
palco). A da seção "Sobre" é o retrato em preto e branco da Paula, vindo de
`Tilinda Material/foto mãe/foto_pb_cintura.jpg`. Para trocar qualquer uma,
salve a nova imagem na pasta indicada acima e mude o nome aqui.

Enquanto um desses campos estiver vazio (`""`), o site mostra uma moldura
pontilhada com o ramo da marca no lugar — nada quebra e nenhum erro aparece.

## Preparar as fotos

As 33 fotos atuais vieram da pasta `fotos/editadas para o site` e foram
reduzidas para no máximo 1600 px no lado maior, com qualidade 82. Isso levou o
conjunto de **22 MB para 5 MB** — importante para o site abrir rápido no
celular.

Faça o mesmo com as fotos novas: em qualquer editor (Paint, Fotos do Windows,
Canva), redimensione para 1600 px no lado maior antes de salvar em
`assets/img/galeria/`. Evite jogar a foto original da câmera direto na pasta.

## Depois de atualizar, não vejo a mudança

O navegador guarda os arquivos antigos. Pressione **Ctrl + F5** na página para
forçar o recarregamento.

## Mudar os textos

Sim — pode editar direto no `index.html` (e no `portfolio.html`), com o Bloco de
Notas ou qualquer editor de texto. Só respeite três regras:

1. **Mexa só no que está entre as tags**, nunca nas tags em si.
   Em `<h3>Figurinos de dança</h3>`, troque apenas `Figurinos de dança`.
2. **Salve sempre em UTF-8**, senão os acentos viram símbolos estranhos.
   No Bloco de Notas: *Arquivo → Salvar como → Codificação: UTF-8*.
3. **Não apague `class="..."`, `id="..."` nem `data-...`** — é o que dá o visual
   e faz o site funcionar.

Onde fica cada texto no `index.html`:

| Trecho | Procure por |
|---|---|
| Título e frase do topo | `<section class="hero"` |
| Os 4 cartões de especialidade | `<ul class="cards">` |
| Texto sobre a Paula | `<section class="sobre"` |
| Os 4 passos do atendimento | `<ol class="passos">` |
| Chamada final e dados de contato | `<section class="contato"` |
| Rodapé | `<footer class="site-footer">` |

Se algo quebrar, é só desfazer (Ctrl+Z) ou me chamar.

### Trocar o telefone

O número aparece em vários lugares. Use *Localizar e substituir* nos dois
arquivos HTML e troque as duas formas:

- `5548988545421` (nos links do WhatsApp)
- `(48) 98854-5421` (no texto que aparece na tela)

## Publicar

Por ser um site estático, qualquer hospedagem simples serve. As gratuitas mais
fáceis são **Netlify** e **Cloudflare Pages**: basta arrastar a pasta inteira
para a área de upload do painel.

O site está publicado em **https://atelietilinda.github.io**, a partir do
repositório `atelietilinda/atelietilinda.github.io` (branch `main`, pasta raiz).

Para publicar uma alteração, salve os arquivos e rode, dentro da pasta do site:

```bash
git add -A && git commit -m "descreva a mudança" && git push
```

O GitHub leva um ou dois minutos para atualizar o site depois do envio.

O `Tilinda.zip` fica de fora do repositório, pelo `.gitignore`.

## Dados usados no site

- WhatsApp: (48) 98854-5421 — links usam `https://wa.me/5548988545421`
- Instagram: [@atelietilinda](https://www.instagram.com/atelietilinda/)
- Cor da marca: `#BD548C`
- Fontes: Cormorant Garamond (títulos) e Jost (texto), via Google Fonts

## A página de cuidados

`cuidados.html` repete, em texto, o que vai na etiqueta de lavagem de cada peça.
Os três primeiros ícones (não lavar na máquina, lavar à mão, não passar a ferro)
foram redesenhados em SVG copiando os da etiqueta, então mudam de tamanho sem
perder nitidez. Os outros dois (secar na sombra, não usar água sanitária) usam
os símbolos internacionais de conservação.

Para mudar um texto, edite direto no `cuidados.html`, seguindo as mesmas regras
da seção "Mudar os textos" acima.

As cinco regras ficam numa grade de 3 + 2. Se você acrescentar ou tirar uma
regra, avise que eu reequilibro a grade.
