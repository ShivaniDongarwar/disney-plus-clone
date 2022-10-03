import { db, provider, auth } from "../Firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { signInWithPopup, signOut,onAuthStateChanged  } from "firebase/auth";
//connect service file to the  firebase database or create a refrence with firebase database named Information
const firebaseRef = collection(db, "movies");
class dataService {
  addData = (newData) => {
    return addDoc(firebaseRef, newData);
  };
  updatedData = (id, updatedData) => {
    const dataAvailable = doc(db, "movies", id);
    return updateDoc(dataAvailable, updatedData);
  };
  deleteData = (id) => {
    const dataAvailable = doc(db, "movies", id);
    return deleteDoc(dataAvailable);
  };
  getAllData = () => {
    return getDocs(firebaseRef);
  };
  getSingleData = (id) => {
    const dataAvailable = doc(db, "movies", id);
    return getDoc(dataAvailable);
  };
  signIn = () => {
    return signInWithPopup(auth, provider);
  };
  signOut = () => {
    return signOut(auth);
  };
  onStateChange=(user)=>{
    return onAuthStateChanged (auth,user);
  }
}
export default new dataService();
