import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAEbx9k_Lz5eqQ4BtKNWD8_JxEGG97a0IA",
  authDomain: "yonazu-intern.firebaseapp.com",
  databaseURL: "https://yonazu-intern-default-rtdb.firebaseio.com",
  projectId: "yonazu-intern",
  storageBucket: "yonazu-intern.appspot.com",
  messagingSenderId: "6346044122",
  appId: "1:6346044122:web:c80006537dc454eb412be3"
};



firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({name,text})=>{
  messagesRef.push({name,text});
}