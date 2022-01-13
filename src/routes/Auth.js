import React, { useState } from "react";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    console.log(event.target.type);
    const {
      target: { type, value },
    } = event;

    if (type === "email") {
      setEmail(value);
    } else if (type === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    console.log("preventing default  s");
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            placeholder="email"
            required
            onChange={onChange}
            value={email}
          />
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={onChange}
          />
          <input type="button" value="submit" />
        </div>
        <div>
          <button>continue with google</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
