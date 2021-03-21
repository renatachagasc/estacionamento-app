import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC4kma_-t4kItUFZxoesb135qI8g9IDGwE",
    authDomain: "estacionamento-app-172af.firebaseapp.com",
    projectId: "estacionamento-app-172af",
    storageBucket: "estacionamento-app-172af.appspot.com",
    messagingSenderId: "465836343701",
    appId: "1:465836343701:web:8b054a77446f1713fb369c",
    measurementId: "G-GKLQSJNW4V"
};


let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()