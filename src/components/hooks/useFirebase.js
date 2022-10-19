import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        // setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscibed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);

        });
        return () => unsubscibed;
    }, []);
    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});;
        }).catch((error) => {
            // An error happened.
            setError("");
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        setUser,
        signInUsingGoogle,
        handleLogOut,
        error,
        setError,
        isLoading
    }
}
export default useFirebase;