import { useState, useEffect, useContext } from "react";
import { getAuth } from "firebase/auth";
import { getInfo } from "../context/authContext/services";
import { AuthContext } from "../context/authContext/AuthContext";
import FirebaseContext from "../context/firebaseContext/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    const authentication = getAuth();
    const listener = authentication.onAuthStateChanged((authUser) => {
      if (authUser) {
        // we have a user...therefore we can store the user in localstorage
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
        getInfo(dispatch, authUser.email);
      } else {
        // we don't have an authUser, therefore clear the localstorage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
