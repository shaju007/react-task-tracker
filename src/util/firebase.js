//import firebase from 'firebase/app';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyACW_hbKAtbV7uiVOhbbVPv0fYGxr6uYWI',
  authDomain: 'react-task-tracker-4d93f.firebaseapp.com',
  databaseURL:
    'https://react-task-tracker-4d93f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-task-tracker-4d93f',
  storageBucket: 'react-task-tracker-4d93f.appspot.com',
  messagingSenderId: '967108248939',
  appId: '1:967108248939:web:87138ad45d07daa1c0f82e',
  measurementId: 'G-4HGTEJSQ54',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
//export default firebase;
