import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNote } from "../store/journal";


export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
  
      onAuthStateChanged(FirebaseAuth, async (user) => {
        if (!user) return dispatch(logout());
        const {uid, email,displayName, photoURL} = user;
        dispatch(login({uid,email,displayName,photoURL}));
        dispatch(startLoadingNote())
      })
  
    }, [])

    return  status
  
}
