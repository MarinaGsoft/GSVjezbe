import React, { FC, useState } from "react";
import "./HomePage.scss";

type HomePageProps = {
  age?: number;
};
export const HomePage: FC<HomePageProps> = ({ age = 18 }) => {
  const [diseable, setDisable] = useState(false);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("day");

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
    </div>
  );
};
