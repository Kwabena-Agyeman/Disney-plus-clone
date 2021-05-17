import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY',
//   authDomain: 'disneyplus-clone-a33d5.firebaseapp.com',
//   projectId: 'disneyplus-clone-a33d5',
//   storageBucket: 'disneyplus-clone-a33d5.appspot.com',
//   messagingSenderId: '37918794208',
//   appId: '1:37918794208:web:dbe9842dfe1dda522a4b85',
//   measurementId: 'G-DRVLJKWRWG',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyC4IG2OzkzXvSxM6ccZY5eKUUP7YXCI8w8',
  authDomain: 'disney-plus-clone-4cb84.firebaseapp.com',
  projectId: 'disney-plus-clone-4cb84',
  storageBucket: 'disney-plus-clone-4cb84.appspot.com',
  messagingSenderId: '713285823658',
  appId: '1:713285823658:web:d66d8650d1764b921e34d3',
  measurementId: 'G-R2TJ9HKEWX',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export { auth, provider };
export default db;
