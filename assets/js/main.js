/* =========================================================
   Ateliê Tilinda — comportamento do site
   (você normalmente não precisa mexer neste arquivo)
   ========================================================= */
(function () {
  'use strict';

  var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     1. Cabeçalho ganha fundo ao rolar
     --------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  function atualizaHeader() {
    if (!header) return;
    header.classList.toggle('is-stuck', window.scrollY > 12);
  }
  atualizaHeader();
  window.addEventListener('scroll', atualizaHeader, { passive: true });

  /* ---------------------------------------------------------
     2. Menu no celular
     --------------------------------------------------------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  function fechaMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var aberto = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!aberto));
      nav.classList.toggle('is-open', !aberto);
      document.body.classList.toggle('nav-open', !aberto);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) fechaMenu();
    });
  }

  /* ---------------------------------------------------------
     3. Fotos grandes (topo e "sobre")
        Vêm de window.TILINDA_FOTOS, definido em galeria.js.
        Sem arquivo configurado — ou se o arquivo não existir —
        a moldura com o ramo da marca aparece no lugar.
     --------------------------------------------------------- */
  var FOTOS = window.TILINDA_FOTOS || {};

  function montaFigura(id, arquivo, pasta) {
    var fig = document.getElementById(id);
    if (!fig) return;
    if (!arquivo) { fig.classList.add('is-empty'); return; }

    var img = document.createElement('img');
    img.alt = fig.dataset.alt || '';
    img.decoding = 'async';
    img.addEventListener('error', function () {
      fig.classList.add('is-empty');
      img.remove();
    }, { once: true });
    img.src = pasta + arquivo;
    fig.appendChild(img);
  }

  montaFigura('fotoHero', FOTOS.hero, 'assets/img/');
  montaFigura('fotoSobre', FOTOS.sobre, 'assets/img/sobre/');

  /* ---------------------------------------------------------
     4. Galeria do portfólio
     --------------------------------------------------------- */
  var grade = document.getElementById('galeria');
  var todas = Array.isArray(window.TILINDA_GALERIA) ? window.TILINDA_GALERIA.slice() : [];
  todas = todas.filter(function (f) { return f && f.arquivo; });

  // na página inicial a grade traz data-limite; na página do portfólio, não
  var limite = grade ? parseInt(grade.getAttribute('data-limite'), 10) : 0;
  if (!limite || limite < 1) limite = 0;

  // fotos realmente exibidas nesta página (o lightbox usa esta lista)
  var fotos = limite ? todas.slice(0, limite) : todas;

  function montaGaleria() {
    if (!grade) return;
    grade.textContent = '';

    var vazios = parseInt(grade.getAttribute('data-vazios'), 10) || 6;

    if (!fotos.length) {
      for (var i = 0; i < vazios; i++) {
        var vazio = document.createElement('figure');
        vazio.className = 'g-item is-placeholder';
        var rotulo = document.createElement('span');
        rotulo.textContent = 'Foto em breve';
        vazio.appendChild(rotulo);
        grade.appendChild(vazio);
      }
      return;
    }

    fotos.forEach(function (foto, indice) {
      var fig = document.createElement('figure');
      fig.className = 'g-item reveal';

      var img = document.createElement('img');
      img.src = 'assets/img/galeria/' + foto.arquivo;
      img.alt = foto.legenda || 'Trabalho do Ateliê Tilinda';
      img.loading = 'lazy';
      img.decoding = 'async';

      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'g-btn';
      botao.dataset.indice = String(indice);
      botao.setAttribute('aria-label', 'Ampliar: ' + (foto.legenda || 'foto do portfólio'));

      fig.appendChild(img);
      fig.appendChild(botao);

      if (foto.legenda) {
        var cap = document.createElement('figcaption');
        cap.className = 'g-cap';
        cap.textContent = foto.legenda;
        fig.appendChild(cap);
      }

      grade.appendChild(fig);
    });
  }
  montaGaleria();

  /* Evita que a última foto fique sozinha numa fileira:
     se sobrar espaço na última linha, o último quadro se
     estica para preencher, mantendo a altura da fileira.
     Funciona com qualquer quantidade de fotos. */
  function ajustaUltimaFileira() {
    if (!grade) return;
    var itens = Array.prototype.slice.call(grade.querySelectorAll('.g-item'));
    if (!itens.length) return;

    itens.forEach(function (el) {
      el.style.gridColumn = '';
      el.style.aspectRatio = '';
    });

    var cs = window.getComputedStyle(grade);
    var colunas = cs.gridTemplateColumns.split(' ').filter(Boolean);
    var cols = colunas.length;
    if (cols < 2) return;

    var colW = parseFloat(colunas[0]);
    var gap = parseFloat(cs.columnGap) || 0;
    if (!colW) return;

    function spanDe(el) {
      var w = el.getBoundingClientRect().width;
      return Math.max(1, Math.round((w + gap) / (colW + gap)));
    }

    var topoFinal = Math.round(itens[itens.length - 1].getBoundingClientRect().top);
    var ultima = itens.filter(function (el) {
      return Math.abs(Math.round(el.getBoundingClientRect().top) - topoFinal) < 2;
    });

    var usados = ultima.reduce(function (soma, el) { return soma + spanDe(el); }, 0);
    var faltam = cols - usados;
    if (faltam <= 0) return;

    var alvo = ultima[ultima.length - 1];
    var span = spanDe(alvo) + faltam;
    var largura = span * colW + (span - 1) * gap;
    var altura = colW * 1.25;          // altura de um quadro normal (4:5)
    alvo.style.gridColumn = 'span ' + span;
    alvo.style.aspectRatio = (largura / altura).toFixed(4);
  }

  ajustaUltimaFileira();

  var tempoResize;
  window.addEventListener('resize', function () {
    window.clearTimeout(tempoResize);
    tempoResize = window.setTimeout(ajustaUltimaFileira, 150);
  });

  // link "Veja mais trabalhos" — só aparece quando há o que mostrar a mais
  var linkMais = document.getElementById('galeriaMais');
  if (linkMais) {
    linkMais.hidden = !(todas.length === 0 || (limite && todas.length > limite));
  }

  /* ---------------------------------------------------------
     5. Lightbox
     --------------------------------------------------------- */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var lbClose = document.getElementById('lbClose');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var atual = 0;
  var ultimoFoco = null;

  function mostra(indice) {
    if (!fotos.length) return;
    atual = (indice + fotos.length) % fotos.length;
    var foto = fotos[atual];
    lbImg.src = 'assets/img/galeria/' + foto.arquivo;
    lbImg.alt = foto.legenda || 'Trabalho do Ateliê Tilinda';
    lbCap.textContent = foto.legenda || '';
    var varios = fotos.length > 1;
    lbPrev.hidden = !varios;
    lbNext.hidden = !varios;
  }

  function abre(indice) {
    if (!lb) return;
    ultimoFoco = document.activeElement;
    mostra(indice);
    lb.hidden = false;
    document.body.classList.add('nav-open');
    requestAnimationFrame(function () { lb.classList.add('is-open'); });
    lbClose.focus();
  }

  function fecha() {
    if (!lb || lb.hidden) return;
    lb.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    var esconde = function () {
      lb.hidden = true;
      lbImg.removeAttribute('src');
      if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
    };
    if (reduzido) esconde();
    else window.setTimeout(esconde, 220);
  }

  if (grade) {
    grade.addEventListener('click', function (e) {
      var botao = e.target.closest('.g-btn');
      if (botao) abre(Number(botao.dataset.indice));
    });
  }
  if (lb) {
    lbClose.addEventListener('click', fecha);
    lbPrev.addEventListener('click', function () { mostra(atual - 1); });
    lbNext.addEventListener('click', function () { mostra(atual + 1); });
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.classList.contains('lightbox-figure')) fecha();
    });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') fecha();
      else if (e.key === 'ArrowLeft') mostra(atual - 1);
      else if (e.key === 'ArrowRight') mostra(atual + 1);
      else if (e.key === 'Tab') {
        // mantém o foco dentro do lightbox
        var focaveis = Array.prototype.filter.call(
          lb.querySelectorAll('button'),
          function (b) { return !b.hidden; }
        );
        if (!focaveis.length) return;
        var primeiro = focaveis[0];
        var ultimo = focaveis[focaveis.length - 1];
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault(); ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault(); primeiro.focus();
        }
      }
    });
  }

  /* ---------------------------------------------------------
     6. Entrada suave dos blocos ao rolar
     --------------------------------------------------------- */
  var alvos = document.querySelectorAll('.reveal');
  if (reduzido || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(alvos, function (el) { el.classList.add('is-in'); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-in');
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(alvos, function (el) { observador.observe(el); });
  }

  /* ---------------------------------------------------------
     7. Ano no rodapé
     --------------------------------------------------------- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
