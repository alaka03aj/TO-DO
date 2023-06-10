import React, { useState } from "react";
import Home from "../Home/Home";

interface User {
  username: string;
  password: string;
}

const Signup: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSignup(username, password);
  };

  const handleSignup = (username: string, password: string) => {
    const newUser: User = { username, password };
    localStorage.setItem(username, JSON.stringify(newUser));
    setUser(newUser);
    setSignedUp(true);
  };

  if (signedUp) {
    return <Home />;
  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
