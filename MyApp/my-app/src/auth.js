import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword  } from 'firebase/auth';

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

export const signUpWithEmailAndPassword = async (email, password) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
}