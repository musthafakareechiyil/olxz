import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD4DRjOfuIS_vkYJOesu_eRdMy0U5O--R8",
    authDomain: "olxx-c2379.firebaseapp.com",
    projectId: "olxx-c2379",
    storageBucket: "olxx-c2379.appspot.com",
    messagingSenderId: "987855146782",
    appId: "1:987855146782:web:84ae06724fc65733eb430f",
    measurementId: "G-HTLXVR8CYF"
  };

export default firebase.initializeApp(firebaseConfig);
