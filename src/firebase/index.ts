import { initializeApp, FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCkJI5rGp8uczyOz5w0R-WPoLaNEzm0hRI",
  authDomain: "monboore.firebaseapp.com",
  projectId: "monboore",
  storageBucket: "monboore.appspot.com",
  messagingSenderId: "486162701660",
  appId: "1:486162701660:web:f392522bb89751e9577599",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
