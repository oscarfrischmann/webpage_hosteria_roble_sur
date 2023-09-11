const adress = document.querySelector('.footer__adress--index');
adress.innerHTML = "Glaciar Río Túnel 210 <br>El Calafate <br>Santa Cruz <br>República\nArgentina";

const footerNavs = document.querySelectorAll('.ul-nav li a');
console.log(footerNavs)


footerNavs.forEach((e, i) => {
    const footerNavTexts = ['Nosotros', 'La Hostería', 'Contacto', 'Ubicación', 'Fotos'];
    e.textContent = footerNavTexts[i]
})
