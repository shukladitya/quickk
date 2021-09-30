import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
export const AuthContext = createContext();

const ContextComponent = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true); //1. explanation bottom
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); //2. explanation bottom
      console.log(user);
    });
  }, []);

  const history = useHistory();

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
      history.push("/");
    });
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  ); //3. explanation bottom
};

export default ContextComponent;

//everytime a new route is accessed
//firebase automatically runs onAuthStateChange and if a user is preset in the local
//storge it is passed to call back function, but it can cause problem while having protected route
//as initially user will be undefined and after the token from local db is verified by firebase
//then the use will apper, this will break the logic so every time this comopnent is accessed(i.e contextComponent)
//initiallse a loading as true(1), do not load the children if loading is true(3)
//when user is varified set loading to false(2), now load the children.
