
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7THAzCxafmHJ4_xYfijLwb4rsop6ge7c",
    authDomain: "web-project-60a94.firebaseapp.com",
    projectId: "web-project-60a94",
    storageBucket: "web-project-60a94.appspot.com",
    messagingSenderId: "12708317589",
    appId: "1:12708317589:web:47844e9278d275f8c10e9c",
    measurementId: "G-9F6CLQ7W9X"
};
if (firebase.apps.length === 0)
    firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
const firebaseStore = firebase.firestore();
export const hotelsCollection = firebaseStore.collection("hotels");
export const restaurantsCollection = firebaseStore.collection("restaurants");
export const thingstodoCollection = firebaseStore.collection("thingstodo");
