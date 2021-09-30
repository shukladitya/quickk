import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../pages/context/authContext";

const ProtectedRoute = ({ component: Component, ...otherProps }) => {
  const { user} = useContext(AuthContext);
  console.log(user);
  return (
    <Route
      {...otherProps}
      render={(...props) => {
        return user ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;
