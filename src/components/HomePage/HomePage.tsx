import React, { FC, useState } from "react";
import "./HomePage.scss";

type HomePageProps = {
  age?: number;
};

export const HomePage: FC<HomePageProps> = ({ age = 24 }) => {
  const [disable, setDisable] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [theme, setTheme] = useState("day");

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
          Danas je {currentDate} i trenutno je {currentTime}
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

      <div className="homepage-content">
        <p>6. vježba</p>
        <button onClick={toggleTheme} className="theme">
          Promjeni u {theme === "day" ? "night" : "day"}
        </button>
        <p>{theme}</p>
      </div>
    </div>
  );
};