function initSmoothScroll() {
  const menuGeral = document.querySelectorAll(".js-menu a[href^= '#']");
  console.log(menuGeral);

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  menuGeral.forEach((link) => {
    link.addEventListener("click", scrollToSection);
    console.log(menuGeral);
  });
}

initSmoothScroll();
