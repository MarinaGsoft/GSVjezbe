import React, { FC, useContext, useEffect, useState } from "react";
import hover from "../../images/hover-08.png";
import "./HomePage2.scss";
import { ImageGallery } from "../ImageGallery";
import { useNavigate } from "react-router-dom";

type HomePage2Props = {
  age?: number;
};
export const HomePage2: FC<HomePage2Props> = ({ age = 18 }) => {
  const [diseable, setDisable] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [theme, setTheme] = useState("day");

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const onClick = () => {
    console.log("Vjezba 2");
    setDisable(true);
  };
  const countUp = () => {
    setCount(count + 1);
    if (count >= 10) {
      setDisabled2(true);
    }
  };
  const countDown = () => {
    if (count <= 0) {
      setDisabled(true);
    } else {
      setCount(count - 1);
    }
  };
  const toggleTheme = () => {
    setTheme(theme === "day" ? "night" : "day");
  };
  return (
    <div className="homepage2">
      <div className="homepage2__content">
        <p>1.vježba</p>
        <h1>Dobrodošli na radionicu</h1>
      </div>
      <div className="homepage2__content">
        <p>2.vježba</p>
        <button
          className="homepage2__content__button"
          onClick={onClick}
          disabled={diseable}
        >
          Vjezba 2
        </button>
      </div>
      <div className="homepage2__content">
        <p>3.vježba</p>
        <h2>
          Danas je {currentDate} i trenutno je {currentTime}
        </h2>
      </div>
      <div className="homepage2__content">
        <p>4.vježba</p>
        {age <= 18 ? <h3>Niste punoljetni</h3> : <h2>Punoljetni ste</h2>}
      </div>
      <div className="homepage2__content">
        <p>5.vježba</p>
        <div>
          <button onClick={countDown} disabled={disabled}>
            -
          </button>
          <button onClick={countUp} disabled={disabled2}>
            +
          </button>
        </div>
        <p>{count}</p>
      </div>
      <div className="homepage2__content">
        <p>6.vježba</p>
        <div className={`homepage homepage--${theme}`}>
          <button onClick={toggleTheme}>
            Promijeni u {theme === "day" ? "night" : "day"}
          </button>
        </div>
      </div>
    </div>
  );
};
