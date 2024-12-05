import React, { FC, useState } from "react";
import "./Register.scss";

type HomePageProps = {
  age?: number;
};

export const Register: FC<HomePageProps> = ({ age = 42 }) => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");
  const [potvrdaLozinke, setPotvrdaLozinke] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      ime,
      prezime,
      email,
      lozinka,
      potvrdaLozinke,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    setIme("");
    setPrezime("");
    setEmail("");
    setLozinka("");
    setPotvrdaLozinke("");
  };

  return (
    <div className="register">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prezime"
          value={prezime}
          onChange={(e) => setPrezime(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={lozinka}
          onChange={(e) => setLozinka(e.target.value)}
        />
        <input
          type="password"
          placeholder="Potvrda lozinke"
          value={potvrdaLozinke}
          onChange={(e) => setPotvrdaLozinke(e.target.value)}
        />
        <button type="submit">Registracija</button>
      </form>
    </div>
  );
};
