import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";
// import fbase from "../fbase";

function App() {
  // const a = fbase.console.log(a);

  // console.log(authService.currentUser);
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged(authService.getAuth(), (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
      setInit(true);
    });
  }, []);

  return (
    <div>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Loading..."}
      {/* <AppRouter isLoggedIn={isLoggedIn} /> */}
    </div>
  );
}

export default App;
