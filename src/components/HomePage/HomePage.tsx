import React, { FC, useState } from "react";
import logo from "../../logo.svg";
import "./HomePage.scss";

type AgeCheckerProps = {
  age: number;
};
export const HomePage: FC<AgeCheckerProps> = ({ age }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);

  const dateSet = new Date().toLocaleDateString();
  const timeSet = new Date().toLocaleTimeString();
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
    if (count >= 10) {
      setIsDisabled(true);
    }
    else{
      setIsDisabled2(false);
    }
  }
  function decreaseCount() {
    setCount(count - 1);
    if (count <=0) {
      setIsDisabled2(true);
    }
    else{
      setIsDisabled(false);
    }

  }

  function handleOnclick() {
    console.log("Gumb je kliknut");
    setIsDisabled(true);
  }

  //git add .
  //git commit -m ""
  //git stash
  //git pull
  

  return (
    <div className="homepage-div">
      <div className="welcome-div">
        <p>Vježba 1</p>
        <h1>Dobrodošli na radionicu!</h1>
      </div>
      <div className="welcome-div">
        <p>Vježba 2</p>
        <button
          disabled={isDisabled}
          className="firstButton"
          onClick={handleOnclick}
        >
          Klikni
        </button>
      </div>
      <div className="welcome-div">
        <p>Vježba 3</p>
        <h3>
          Trenutno je {timeSet} sati, a danasnji datum je {dateSet}.
        </h3>
      </div>
      <div className="welcome-div">
        <p>Vježba 4</p>
        {age >= 18 ? (
          <h3>Osoba je punoljetna</h3>
        ) : (
          <h3>OSoba nije punoljetna</h3>
        )}

        <h3></h3>
      </div>
      <div className="welcome-div">
        <p>Vježba 5</p>
        <div className="butons">
        <button className="increase" onClick={increaseCount} disabled={isDisabled}>
          +
        </button>
        <button className="decrease" onClick={decreaseCount} disabled={isDisabled2}>
          -
        </button>
        </div>
        <h3>Brojac: {count}</h3>
      </div>
      <div className="welcome-div">
        <p>Vježba 6</p>
        <div className="tema">

        <button className="teamChange" onClick={increaseCount} disabled={isDisabled}>
          Promijeni pozadinu
        </button>
        </div>
      </div>
    </div>
  );
};
