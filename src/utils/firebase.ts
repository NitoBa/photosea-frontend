import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

let cashedDB: firebase.default.firestore.Firestore;
let cashedStorage: firebase.default.storage.Storage;
let cashedFirebaseApp = null;
const firebaseConfig = {
    apiKey: "AIzaSyDREUIh23T3Uq-MdIVjzHESdTYCXIK5j1o",
    authDomain: "photosea-53125.firebaseapp.com",
    projectId: "photosea-53125",
    storageBucket: "photosea-53125.appspot.com",
    messagingSenderId: "1045541855779",
    appId: "1:1045541855779:web:7d82af6c8fc06d7c0f4796",
    measurementId: "G-83C9465HF0"
};


export function connectToFirebase() {
    if (cashedFirebaseApp) {

        return {
            db: cashedDB, storage: cashedStorage
        }

    } else {
        const firebaseApp = firebase.default.initializeApp(firebaseConfig)
        const db = firebaseApp.firestore();
        const storage = firebaseApp.storage();
        cashedFirebaseApp = firebaseApp;
        cashedStorage = storage;
        cashedDB = db;

        return {
            db, storage
        }
    }
}