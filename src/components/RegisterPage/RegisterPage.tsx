import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.scss";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      lastName,
      email,
      telephone,
      gender,
      country,
      accepted,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Podaci su spremljeni u localStorage!");

  
    navigate("/home");
  };

  return (
    <div className="register-page">
      <h1>Registracija</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prezime"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefon"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Odaberi državu</option>
          <option value="HR">Hrvatska</option>
          <option value="RS">Srbija</option>
          <option value="BA">Bosna i Hercegovina</option>
        </select>
        <div>
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            Muško
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            Žensko
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            Prihvaćam uvjete
          </label>
        </div>
        <button type="submit" disabled={!accepted}>
          Spremi podatke
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
