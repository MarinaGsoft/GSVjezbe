import React, { FC, useContext, useEffect, useState } from "react";
import hover from "../../images/hover-08.png";
import "./HomePage.scss";
import { ImageGallery } from "../ImageGallery";
import { useNavigate } from "react-router-dom";

type HomePageProps = {
  age?: number;
};
export const HomePage: FC<HomePageProps> = ({ age = 42 }) => {
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("day");
  const [name, setName] = useState("");
  const [brojac, setBrojac] = useState(0);
  const [ime, setIme] = useState("");
  const [postavljenoIme, setPostavljenoIme] = useState("");

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const navigate = useNavigate();

  const clicked = () => {
    console.log("Clicked");
    setClick(true);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const toggleTheme = () => {
    setTheme(theme === "day" ? "night" : "day");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const brojac1 = () => {
    setBrojac(brojac + 1);
  };

  const pošaljiPodatke = () => {
    console.log("Podaci poslani:", ime);
    setPostavljenoIme(ime);
  };

  useEffect(() => {
    if (brojac >= 5) {
      console.log("Brojac je veći ili jednak 5");
    }
  }, [brojac]);

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
          disabled={click}
          onClick={clicked}
        >
          Click me
        </button>
      </div>
      <div className="homepage__content">
        <p>3.vježba</p>
        <p>
          Danas je {currentDate}, i trenutno je {currentTime}
        </p>
      </div>
      <div className="homepage__content">
        <p>4.vježba</p>
        <p>{age > 18 ? "Punoljetni ste" : "Niste punoljetni"}</p>
      </div>
      <div className="homepage__content">
        <p>5.vježba</p>
        {count}
        <div className="homepage__content__counter-container">
          <button
            className="homepage__content__counter"
            disabled={count <= 0}
            onClick={decrement}
          >
            -
          </button>
          <button
            className="homepage__content__counter"
            disabled={count >= 10}
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
      <div className="homepage__content">
        <div className={`homepage homepage--${theme}`}>
          <p>6.vježba</p>
          <button onClick={toggleTheme}>
            Promijeni u {theme === "day" ? "noć" : "dan"} temu
          </button>
        </div>
      </div>
      <div className="homepage__content">
        <p>7.vježba</p>
        <input
          type="text"
          placeholder="Unesite vaše ime"
          value={name}
          onChange={handleInputChange}
        />
        <p>{name && `Dobrodošli, ${name}!`}</p>
      </div>
      <div className="homepage__content">
        <p>8.vježba</p>
        <button className="homepage__content__counter" onClick={brojac1}>
          Click me
        </button>
      </div>
      <div className="homepage__content">
        <p>9.vježba</p>
        <input
          type="text"
          placeholder="Unesite vaše ime"
          value={ime}
          onChange={({ target: { value } }) => setIme(value)}
        />
        <button className="homepage__content__counter" onClick={pošaljiPodatke}>
          pošalji podatke
        </button>
        {postavljenoIme && <p>Vaše ime je: {postavljenoIme}</p>}
      </div>
      <div className="homepage__content">
        <p>10.vježba</p>
        <img
          src={
            "https://www.slikomania.hr/fotky6354/fotos/dekorativna-slika-na-platnu-premium-art-lion-s-strength-and-grace-XOGMDPA002E1.jpg"
          }
          className="homepage__content__img"
          alt="logo"
        />
      </div>
      <div className="homepage__content">
        <p>11.vježba</p>
        <img src={hover} className="homepage__content__img2" alt="hover" />
      </div>
      <div className="homepage__content">
        <p>12.vježba</p>
        <ImageGallery />
      </div>
      <div className="homepage__content">
        <p>13.vježba</p>
        <button
          className="homepage__content__register"
          onClick={() => navigate("/register")}
        >
          Registracija
        </button>
      </div>
    </div>
  );
};
