import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class AddWaterService {
  db = getFirestore();
  auth = getAuth();

  async addWaterEntry(userId: string|null, amount: number) {
    if (!userId) {
      console.error('User not authenticated');
      return;
    }
    try {
      const waterHistoryRef = collection(this.db, 'users', userId, 'waterHistory');
      const docRef = await addDoc(waterHistoryRef, {
        timestamp: Date.now(),
        amount: amount
      });
    }
    catch (err) {
      console.error(err);
    }
  }
  constructor() { }
}
