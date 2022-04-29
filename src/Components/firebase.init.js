import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBB5YvSxeRjzIOiNLmkhnRc7itWsYIaPSk",
  authDomain: "warehouse-management-630a3.firebaseapp.com",
  projectId: "warehouse-management-630a3",
  storageBucket: "warehouse-management-630a3.appspot.com",
  messagingSenderId: "1028823118266",
  appId: "1:1028823118266:web:bc6cdff57c488e64db2d83"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;