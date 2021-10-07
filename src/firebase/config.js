import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfhqJQ-R_jZUXpF10u3YVygAYw1Tb7CAk",
    authDomain: "livechat-6258c.firebaseapp.com",
    projectId: "livechat-6258c",
    storageBucket: "livechat-6258c.appspot.com",
    messagingSenderId: "1057232666748",
    appId: "1:1057232666748:web:a472354755d1958b2909f9"
}

//init firebase

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }