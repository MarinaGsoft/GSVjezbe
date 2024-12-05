import React, { FC, useState } from "react";
import "./RegisterPage.scss";

const RegisterPage: FC = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = { name, lastName, email, telephone, gender, country };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Podaci su spremljeni u local storage");
  };

  return (
    <div className="register-page">
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="tel" placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
        <div>
          <label>
            <input type="checkbox" checked={gender === "male"} onChange={() => setGender("male")} />
            Male
          </label>
          <label>
            <input type="checkbox" checked={gender === "female"} onChange={() => setGender("female")} />
            Female
          </label>
        </div>
        <select value={country} onChange={(e) => setCountry(e.target.value)} required>
          <option value="">Select Country</option>
          <option value="Croatia">Croatia</option>
          <option value="Serbia">Serbia</option>
          <option value="Bosnia">Bosnia</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default RegisterPage;