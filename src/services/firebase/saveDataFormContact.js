import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebase.config'

export const saveDataFormContact = async (data) => {
  const docRef = collection(db, "contacts")
  await addDoc(docRef, data)
}
