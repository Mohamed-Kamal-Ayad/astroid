import '@react-native-firebase/firestore';

import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_MESSAGING_SENDER_ID,
} from '@env';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'astroid-db753.firebaseapp.com',
  projectId: 'astroid-db753',
  storageBucket: 'astroid-db753.appspot.com',
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  databaseURL:
    'https://astroid-db753-default-rtdb.europe-west1.firebasedatabase.app/',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
