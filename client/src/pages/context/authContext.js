import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
const AuthContext = createContext();

const ContextComponent = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  const history =useHistory();

  const logout =()=>{
      auth.signOut().then(()=>{
          setUser(null);
          history.push("/");
      });
  }

  return <AuthContext.Provider value={{user,logout}}>{children}</AuthContext.Provider>;
};

export { ContextComponent };
export default AuthContext