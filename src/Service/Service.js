import { db } from "../Firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
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
}
export default new dataService();