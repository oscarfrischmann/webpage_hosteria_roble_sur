console.log('JS active')

const navTexts = ['Nosotros', 'La Hostería', 'Contacto', 'Ubicación', 'Fotos'];

//* HEADER
const headerNavs = document.querySelectorAll('.header__navs-pages li a');
headerNavs.forEach((e, i) => {
    e.textContent = navTexts[i];
})


//* FOOTER
const adress = document.querySelector('.footer__adress--index');
adress.innerHTML = "Glaciar Río Túnel 210 <br>El Calafate <br>Santa Cruz <br>República\nArgentina";

const footerNavs = document.querySelectorAll('.ul-nav li a');

footerNavs.forEach((e, i) => {
    e.textContent = navTexts[i];
})
