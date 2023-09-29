
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFLzuFvc-DPd5Pq43CtgZCQYs9zGlaiLU",
  authDomain: "sampleapp-e84fb.firebaseapp.com",
  projectId: "sampleapp-e84fb",
  storageBucket: "sampleapp-e84fb.appspot.com",
  messagingSenderId: "302722861951",
  appId: "1:302722861951:web:6c161530696bf4039f284a"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const  auth=getAuth(app);


