import { getDocs, collection, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore/lite";
import { firestoreDB } from "../firebase/firebaseConfig";

class EstudanteService {
    static listar = (firestoreDB,callback) => {
        getDocs(collection(firestoreDB,'estudante'))
        .then (
            (snapshot)=> {
                const estudantes = []
                snapshot.forEach(
                    (document)=>{
                        const id = document.id
                        const {nome,curso,ira} = document.data()
                        estudantes.push({id,nome,curso,ira})
                    }
                )
                callback(estudantes)
            }
        )
        .catch(error=>console.log(error))
    }
    static criar = (firestoreDB, callback, estudante) => {
        addDoc(collection(firestoreDB, 'estudante'), estudante)
        .then(
            (docRef)=> {
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
    }
    static recuperar = (firestoreDB, callback, id) => {
        getDoc(doc(firestoreDB, 'estudante', id))
        .then(
            (docSnap)=>{
                if(docSnap.exists()){
                    callback(docSnap.data())
                }
            }
        )
        .catch(error=>console.log(error))
    }
    static atualizar = (firestoreDB, callback, id, estudante)=>{
        updateDoc(doc(firestoreDB,'estudante',id), estudante)
        .then(
            ()=>{
                callback()
            }
        )
        .catch(error=>console.log(error))
    }
    static apagar = (firestoreDB, callback, id) => {
        deleteDoc(doc(firestoreDB,'estudante', id))
        .then(()=> {
            callback(true)
        })
        .catch(error=>console.log(error))
    }
}

export default EstudanteService;