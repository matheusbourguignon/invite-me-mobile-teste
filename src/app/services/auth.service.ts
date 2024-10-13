import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth(initializeApp(environment.firebaseConfig));
  private firestore = getFirestore(initializeApp(environment.firebaseConfig));

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log('Usuário autenticado:', user);
      } else {
        console.log('Usuário não autenticado');
      }
    });
  }

  async login(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async loginWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }

  getUser() {
    return this.auth.currentUser;
  }

  async getUserData() {
    const user = this.getUser();
    if (user) {
      const userDoc = await getDoc(doc(this.firestore, 'users', user.uid));
      if (userDoc.exists()) {
        return userDoc.data(); 
      }
    }
    return null;
  }

  async setUserData(cellphone: string) {
    const user = this.getUser();
    if (user) {
      const userDocRef = doc(this.firestore, 'users', user.uid);
      await setDoc(userDocRef, {
        cellphone: cellphone,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }, { merge: true });
    }
  }
}
