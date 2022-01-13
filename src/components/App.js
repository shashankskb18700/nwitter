import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";
// import fbase from "../fbase";

function App() {
  // const a = fbase.console.log(a);

  // console.log(firebase);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
