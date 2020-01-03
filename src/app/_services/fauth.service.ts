import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
//firestore and firebase
import { auth } from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
// rxjs and observables
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { FUser } from "../_models";

@Injectable({
  providedIn: "root"
})
export class FAuthService {
  user$: Observable<FUser>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<FUser>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  // Email & Password Signup

  emailSignup(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("User returned is:", user.uid);
        return this.setUserDoc(user);
      });
  }

  private setUserDoc(user) {
    const userRef: AngularFirestoreDocument<FUser> = this.afs.doc(
      `users/${user.uid}`
    );
    const data = {
      displayName: user.displayName || null,
      uid: user.uid,
      email: user.email || null,
      photoURL: "https://goog.gl/Fz9nrQ"
    };

    return userRef.set(data);
  }

  updateUser(user: FUser, data: any) {
    return this.afs.doc(`users/${user.uid}`).update(data);
  }

  private handleError(error) {
    console.error(error);
  }
}
