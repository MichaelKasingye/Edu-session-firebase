import firebase from "firebase/app";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 
import { db } from "../config/firebaseConfig";
// import { collection, addDoc, getDocs, getFirestore, getDoc, doc } from "firebase/firestore";
// // const db = getFirestore(app);

// import {db, app} from "../config/firebaseConfig"

// export  async function postData(data){
//     const docRef = await addDoc(collection(db, "todo"), data)
//     if (!docRef.id) return new Error('An error ocurred while creating atodo')
//     const projectSnap = await getDoc(doc(db, "todo", docRef.id))
//     const project = {id: projectSnap.id, ...projectSnap.data()}
//     return project
//     // console.log(data);
// }

export  async function postData(data){
    try {
        const docRef = await addDoc(collection(db, "todo"), data);
        const documentRef = await doc(db, "todo", docRef.id);
        await updateDoc(documentRef, {
            id: docRef.id
          })
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
