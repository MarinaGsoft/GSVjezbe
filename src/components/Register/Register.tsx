import React, { useState, FC } from "react";
import "./Register.scss";

const Register: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    const userData = { name, email, password };
    console.log("Podaci su spremljeni:", userData);
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  return (
    <div className="Registration">
      <h2>Registracija</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ime"
      /><br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      /><br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Lozinka"
      /><br />
      <button onClick={handleSubmit}>Spremi podatke</button>
      <br />
    </div>
  );
};

export default Register;