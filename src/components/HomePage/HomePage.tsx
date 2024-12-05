import React, { FC, useState } from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

type HomePageProps = {
  age?: number;
};
export const HomePage: FC<HomePageProps> = ({ age = 18 }) => {
  const [diseable, setDisable] = useState(false);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("day");
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");
  const [formInputName, setFormInputName] = useState("");

  const navigate = useNavigate();

  let brojac = 0;

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const onClick = () => {
    console.log("Vjezba ");
    setDisable(true);
  };
  const countUp = () => {
    setCount(count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  const toggleTheme = () => {
    setTheme(theme === "day" ? "night" : "day");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleBrojac = () => {
    brojac++;
    if (brojac >= 5) {
      console.log("Kliknuli ste više od 5 puta!");
    }
  };

  const handleForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormInputName(inputName);
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="homepage">
      <div className="homepage__content">
        <p>1.vježba</p>
        <h1>Dobrodošli na radionicu</h1>
      </div>
      <div className="homepage__content">
        <p>2.vježba</p>
        <button
          className="homepage__content__button"
          onClick={onClick}
          disabled={diseable}
        >
          Vjezba
        </button>
      </div>
      <div className="homepage__content">
        <p>3.vježba</p>
        <h2>
          Danas je {currentDate} i trenutno je {currentTime}
        </h2>
      </div>
      <div className="homepage__content">
        <p>4.vježba</p>
        {age <= 18 ? <h3>Niste punoljetni</h3> : <h2>Punoljetni ste</h2>}
      </div>
      <div className="homepage__content">
        <p>5.vježba</p>
        <div>
          <button onClick={countDown} disabled={count <= 0}>
            -
          </button>
          <button onClick={countUp} disabled={count >= 10}>
            +
          </button>
        </div>
        <p>{count}</p>
      </div>
      <div className={`homepage__content homepage--${theme}`}>
        <p>6.vježba</p>
        <div>
          <button onClick={toggleTheme}>
            Promijeni u {theme === "day" ? "night" : "day"}
          </button>
        </div>
      </div>
      <div className="homepage__content">
        <p>7.vježba</p>
        <input
          type="text"
          placeholder="Unesite svoje ime"
          onChange={handleInputChange}
        ></input>
        <p>Dobrodošli {name}</p>
      </div>
      <div className="homepage__content">
        <p>8.vježba</p>
        <button onClick={handleBrojac}>Klikni me!</button>
      </div>
      <div className="homepage__content">
        <p>9.vježba</p>
        <form onSubmit={handleForm}>
          <label htmlFor="name">Ime:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleFormInputChange}
          />
          <button type="submit">Pošalji</button>
          <p>Pozdrav {formInputName}</p>
        </form>
      </div>
      <div className="homepage__content">
        <p>10.vježba</p>
        <img
          src="https://particle.scitech.org.au/wp-content/uploads/2022/12/GettyImages-1203853320-2048x1116.jpg"
          alt="slika"
          className="homepage__content__img"
        />
      </div>
      <p>12.vježba</p>
      <div>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};
