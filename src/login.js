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

// Initialize Firebase
const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseConfig);

// SIGN IN GOOGLE
const signInButton = document.getElementById('googleLogIn');
signInButton.addEventListener('click', () => {
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			console.log(result);
			const userID = { userID: user.uid };
			(async function () {
				try {
					await setDoc(doc(db, 'Users', user.displayName), userID).then(
						console.log('User ID added')
					);
				} catch (e) {
					console.error('User ID NOT added: ', e);
				}
			})();
			// IdP data available using getAdditionalUserInfo(result)
			// ...
			console.log(getMensajes(db));
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.customData.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
});

//sign out
const signOutButton = document.getElementById('googleLogOut');
signOutButton.addEventListener('click', () => {
	signOut(auth)
		.then(() => {
			console.log('Signed Out succesfully');
			console.log(getMensajes(db));
		})
		.catch((error) => {
			console.log('We couldn´t sign you Out', error);
		});
});

// detect auth state
onAuthStateChanged(auth, (user) => {
	if (user != null) {
		console.log('User Logged In');
		console.log(user);
	} else {
		console.log('No User Logged In');
	}
});

//GET INFO
const msgContainer = document.getElementById('messages');

async function getMensajes(db) {
	try {
		const mensajes = collection(db, 'contacto');
		const mensajesSnapshot = await getDocs(mensajes);
		const cityList = mensajesSnapshot.docs.map((doc) => doc.data());
		console.log(cityList);
		cityList.forEach((msg) => {
			let newMsgDiv = document.createElement('div');
			newMsgDiv.className = 'msgContainer';

			const name = document.createElement('span');
			name.textContent = `${msg.nombre}`;

			const email = document.createElement('span');
			email.textContent = ` ${msg.email}`;

			const checkIn = document.createElement('span');
			checkIn.textContent = ` Check In:   ${msg.checkIn}`;

			const checkOut = document.createElement('span');
			checkOut.textContent = ` Check Out:   ${msg.checkOut}`;

			const phoneNumber = document.createElement('span');
			phoneNumber.textContent = ` ${msg.phoneNumber}`;

			const text = document.createElement('span');
			text.textContent = ` ${msg.message}`;

			msgContainer.appendChild(newMsgDiv);
			newMsgDiv.appendChild(name);
			newMsgDiv.appendChild(email);
			newMsgDiv.appendChild(checkIn);
			newMsgDiv.appendChild(checkOut);
			newMsgDiv.appendChild(phoneNumber);
			newMsgDiv.appendChild(text);
		});
		return cityList;
	} catch (e) {
		console.error('Error getting documents', e);
	}
}
// console.log(getMensajes(db));
const getData = document.getElementById('getData');

getData.addEventListener('click', () => {
	getMensajes(db);
});

console.log('merd');
