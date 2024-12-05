import React, { useState } from 'react';
import './RegisterPage.scss';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [gender, setGender] = useState(false);  // Checkbox
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      name,
      lastname,
      email,
      telephone,
      gender,
      country,
    };

    // Spremanje podataka u localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Podaci su spremljeni!');
  };

  return (
    <div className="register-page">
      <h1>Registracija</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Ime:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Prezime:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Telefon:
          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </label>
        <label>
          Spol:
          <input
            type="checkbox"
            checked={gender}
            onChange={() => setGender(!gender)}
          />
        </label>
        <label>
          Zemlja:
          <select value={country} onChange={(e) => setCountry(e.target.value)} required>
            <option value="">Odaberite zemlju</option>
            <option value="Hrvatska">Hrvatska</option>
            <option value="Sjedinjene Američke Države">Sjedinjene Američke Države</option>
            <option value="Njemačka">Njemačka</option>
          </select>
        </label>
        <button type="submit">Spremi</button>
      </form>
    </div>
  );
};
