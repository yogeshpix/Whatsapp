// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyCbP4xDPuiZCCXoF_q7TmlEhMbDE7ANJtk',
  authDomain: 'whatsapp-clone-latest.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-latest.firebaseio.com',
  projectId: 'whatsapp-clone-latest',
  storageBucket: 'whatsapp-clone-latest.appspot.com',
  messagingSenderId: '837748409680',
  appId: '1:837748409680:web:d54763c7104e7a0ae7d855',
  measurementId: 'G-GS85XWB03E',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
