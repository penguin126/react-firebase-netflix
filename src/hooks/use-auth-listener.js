import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      //   Nếu có auth user thì lưu vào localStorage => k có thì remove
      // vì 1 tài khoản chỉ được đăng nhập 1 lần
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    // clean
    return () => listener();
  }, []);

  return { user };
}
