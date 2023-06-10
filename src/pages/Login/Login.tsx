import React, { useState } from "react";
import Home from "../Home/Home";

interface User {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  const handleLogin = (username: string, password: string) => {
    const storedUser = localStorage.getItem(username);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as User;
      if (parsedUser.password === password) {
        setUser(parsedUser);
        setLoggedIn(true);
      } else {
        alert("Wrong password");
      }
    }
  };

  if (loggedIn) {
    return <Home />;
  }

  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
