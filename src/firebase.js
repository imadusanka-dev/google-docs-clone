import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDklQBFN878At2E5LzWLUqIqRbiira7rQA",
  authDomain: "docs-clone-19689.firebaseapp.com",
  projectId: "docs-clone-19689",
  storageBucket: "docs-clone-19689.appspot.com",
  messagingSenderId: "649216784777",
  appId: "1:649216784777:web:7846f45e91ed8cdcb90958",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
