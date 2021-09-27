import React from "react";
import LoginSignup from "./pages/loginSignup";
import { ContextComponent } from "./pages/context/authContext";

function App() {
  return (
    <ContextComponent>
      <LoginSignup />
    </ContextComponent>
  );
}

export default App;
