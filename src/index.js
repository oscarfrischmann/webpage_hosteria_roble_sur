import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import {
	getAuth,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js';
import {
	getFirestore,
	collection,
	getDocs,
	doc,
	setDoc,
} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
	apiKey: 'AIzaSyCR2Nr0OQR4QvuiiqWOL8qiLrnyE1bZPPc',
	authDomain: 'prueba-e8593.firebaseapp.com',
	projectId: 'prueba-e8593',
	storageBucket: 'prueba-e8593.appspot.com',
	messagingSenderId: '57030392360',
	appId: '1:57030392360:web:24135666d3097888e9131d',
});

//LUXON
let dateTime = luxon.DateTime;
// Initialize Firebase
const auth = getAuth(firebaseConfig);
const db = getFirestore(firebaseConfig);

// detect auth state
onAuthStateChanged(auth, (user) => {
	if (user != null) {
		console.log('User Logged In');
		console.log(user);
	} else {
		console.log('No User Logged In');
	}
});

function submitForm(e) {
	const now = dateTime.now().setZone('America/Buenos_Aires').toISO();

	e.preventDefault();
	const name = contactForm['nombre'].value;
	const checkIn = contactForm['checkIn'].value;
	const checkOut = contactForm['checkOut'].value;
	const email = contactForm['email'].value;
	const phoneNumber = contactForm['phoneNumber'].value;
	const text = contactForm['text'].value;

	const contacto = {
		nombre: name,
		checkIn: checkIn,
		checkOut: checkOut,
		email: email,
		phoneNumber: phoneNumber,
		message: text,
	};
	(async function () {
		try {
			await setDoc(doc(db, 'contacto', now), contacto).then(
				console.log('SUCCES!!!!')
			);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
		window.location.href = '../index.html';
	})();
	return contacto;
}
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', submitForm);
console.log('merd');
