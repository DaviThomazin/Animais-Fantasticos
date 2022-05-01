// * Navegação por Tab
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  // ! O if foi usado para verificar se os elementos selecionados existem na pagina
  // * Se for false ele nao executa o javascript
  if (tabMenu.length && tabContent.length) {
    // ! Estrutura de loop para adicionar/remover uma classe
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
initTabNav();

// * Accordion List
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo"; // ? Para nao repetir tanto essa string, coloquei ela numa variavel

  // ! O if foi usado para verificar se os elementos selecionados existem na pagina

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      // ? Seleciona o item clicado
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

// * Scroll Suave
function initScrollSmooth() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      // ? Selecionei a href do item clicado
      const href = event.currentTarget.getAttribute("href");
      // ? Conectei o href com a section correspondente ao ID
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth", // ? Deixa o slide suave
        block: "start", // ? Leva o scroll até o inicio do elemento
      });

      // ? Forma alternativa
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth",
      // });
    }
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSmooth();

// * Scroll animado
function animacaoInit() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    sections[0].classList.add("ativo");

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
      });
    }

    window.addEventListener("scroll", animaScroll);
  }
}
animacaoInit();
