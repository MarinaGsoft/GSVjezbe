import React, { FC, useState, useEffect } from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import Images from "../images/Images";

type HomePageProps = {
  age?: number;
};

export const HomePage: FC<HomePageProps> = ({ age = 24 }) => {
  const [disable, setDisable] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [theme, setTheme] = useState("day");
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [ispis, setIspis] = useState('');

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName2(event.target.value);
  };

  const handleButtonClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    if (clickCount === 5) {
      console.log("Korisnik je kliknuo gumb 5 puta!");
    }
  }, [clickCount]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIspis(`Dobrodošli, ${name2}!`);
  };

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const onClick = () => {
    console.log("vježba 2");
    setDisable(true);
  };

  const countup = () => {
    console.log("vježba 5");
    setCount(count + 1);
    if (count >= 10) {
      setDisabled(true);
    }
  };

  const countdown = () => {
    console.log("vježba 5");
    setCount(count - 1);
    if (count <= 0) {
      setDisabled(true);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "day" ? "night" : "day");
  };

  return (
    <div className={`homepage theme--${theme}`}>
      <div className="homepage-content">
        <p>1. vježba</p>
        <h1>Dobrodošli na radionicu.</h1>
      </div>

      <div className="homepage-content">
        <p>2. vježba</p>
        <button className="gumb" onClick={onClick} disabled={disable}>
          Dodaj gumb
        </button>
      </div>

      <div className="homepage-content">
        <p>3. vježba</p>
        <h2>
          Danas je {currentDate} i trenutno je {currentTime}.
        </h2>
      </div>

      <div className="homepage-content">
        <p>4. vježba</p>
        <h2>{age >= 18 ? "Punoljetni ste" : "Niste punoljetni"}</h2>
      </div>

      <div className="homepage-content">
        <p>5. vježba</p>
        <button onClick={countup} disabled={disabled}>
          +
        </button>
        <button onClick={countdown} disabled={disabled}>
          -
        </button>
        <p>{count}</p>
      </div>

      <div className={`homepage-content theme--${theme}`}>
        <p>6. vježba</p>
        <button onClick={toggleTheme} className="theme">
          Promeni u {theme === "day" ? "night" : "day"}
        </button>
        <p>{theme}</p>
      </div>

      <div className="homepage-content">
        <p>7. vježba</p>
        <input type="text" placeholder="Unesi ime" value={name} onChange={handleChange} />
        <p>{name && `Dobrodošli: ${name}`}</p>
      </div>

      <div className="homepage-content">
        <p>8. vježba</p>
        <button onClick={handleButtonClick}>Klikni me!</button>
        <p>Broj klikova: {clickCount}</p>
      </div>

      <div className="homepage-content">
        <p>9. vježba</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Unesi ime" value={name2} onChange={handleChange2} />
          <button type="submit">Pošalji!</button>
        </form>
        {ispis && <p>{ispis}</p>}
      </div>

      <div className="homepage-content">
        <p>10. vježba</p>
        <img src="https://darko.topalski.com/wp-content/uploads/2021/02/Umetnicka-slika-Pejzaz-Ulje-na-platnu-po-porudzbini-umetnik-Darko-Topalski-scaled.jpg" alt="Slika" />
      </div>

      <div className="homepage-content">
        <p>11. vježba</p>
        <Images/>
      </div>

      <div className="homepage-content">
        <p>12. vježba</p>
        <button onClick={() => navigate('/register')}>
        Registracija
      </button>
      </div>
      
    </div>
  );
};