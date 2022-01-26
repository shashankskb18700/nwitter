import { FirebaseError } from "firebase/app";
import React, { useState } from "react";
import { authService } from "../fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    // console.log(event.target.type);
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      let data;
      let auth = authService.getAuth();
      // const auth = getAuth(firebaseApp);
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggle = () => {
    setNewAccount((prev) => !prev);
  };

  const onSocailClick = async (event) => {
    let auth = authService.getAuth();
    let provider;
    if (event.target.name === "google") {
      provider = new authService.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(auth, provider);

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            onChange={onChange}
            value={email}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={onChange}
          />
          <input
            type="submit"
            value={newAccount ? "create account" : "login"}
          />
          {error}
        </div>

        <span onClick={toggle}>
          {newAccount ? "sign in" : "create account"}
        </span>

        <div>
          <button onClick={onSocailClick} name="google">
            continue with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
