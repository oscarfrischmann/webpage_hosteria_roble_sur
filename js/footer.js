'use strict';
console.log('JS active');
const navTexts = ['Nosotros', 'La Hostería', 'Contacto', 'Ubicación', 'Fotos'];

//* HEADER
const headerNavs = document.querySelectorAll('.header__navs-pages li a');
headerNavs.forEach((e, i) => {
	e.textContent = navTexts[i];
});

//* FOOTER
const adress = document.querySelector('.footer__adress--index');
adress.innerHTML =
	'Glaciar Río Túnel 210 <br>El Calafate <br>Santa Cruz <br>República\nArgentina';

const footerNavs = document.querySelectorAll('.ul-nav li a');

footerNavs.forEach((e, i) => {
	e.textContent = navTexts[i];
});

const phoneNum = document.querySelectorAll('.footer__contact-list--index span');
phoneNum[0].textContent = '54 0 2902 495559';
phoneNum[1].innerHTML = '<a href="wa.me/5492966723683">+54 9 2966 723683</a>';
phoneNum[2].innerHTML =
	'<a href="mailto:info@roblesur.com.ar">info@roblesur.com.ar</a>';

const mediaIcons = document.querySelectorAll('.footer__media-icons li a');
mediaIcons[0].setAttribute('href', 'https://www.facebook.com/100063781770288');
mediaIcons[1].setAttribute('href', 'https://wa.me/5492966723683');
mediaIcons[2].setAttribute('href', 'https://www.instagram.com/hosteria.roblesur/');
mediaIcons[3].setAttribute(
	'href',
	'https://www.tripadvisor.com.ar/Hotel_Review-g312851-d670899-Reviews-Roble_Sur-El_Calafate_Province_of_Santa_Cruz_Patagonia.html?m=19905'
);

function googleTranslateElementInit() {
	new google.translate.TranslateElement(
		{ pageLanguage: 'en' },
		'google-translate-element'
	);
}
