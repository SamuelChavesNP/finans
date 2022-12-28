const sections = document.querySelectorAll('.js-scroll');

const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((section) => {
    const distanciaTopo = section.getBoundingClientRect().top;
    // pega a distância do topo da página até a section 
    const isSectionVisible = (distanciaTopo - windowMetade) < 0;
    if(isSectionVisible){
      section.classList.add('ativo');
    } else {
      section.classList.remove('ativo');
    }
  })
}

animaScroll();

window.addEventListener('scroll', animaScroll);