
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAKgguTGNiZxI2d_olkXESrMpTry5gfr_s",
    authDomain: "softuni-react-redux.firebaseapp.com",
    databaseURL: "https://softuni-react-redux.firebaseio.com",
    projectId: "softuni-react-redux",
    storageBucket: "softuni-react-redux.appspot.com",
    messagingSenderId: "791940308801",
    appId: "1:791940308801:web:9de1d20951359f080c0bc0"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase