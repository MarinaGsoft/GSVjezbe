import React, { FC, useState } from "react";
import logo from "../../logo.svg";
import "./HomePage.scss";

type HomePageProps = {
  age?: string
};


export const HomePage: FC<HomePageProps> = () => {

  const [disable, setDisable]=useState(false);
  const [count, setCount]=useState(0);
  const [theme, setTheme]=useState("day");

  const currentDate=new Date().toLocaleDateString();
  const currentTime=new Date().toLocaleTimeString();
  
  const onClick=()=> {
    console.log("Vjezba 2");
    setDisable(true);
  }

  const countUp=()=> {
    setCount(count+1);
    if (count>=10) {
      setDisable(false);
    }
  };

  const countDown=()=> {
    if (count<=0) {
      setDisable(false);
    }
    setCount(count-1);    
  };

  const toggleTheme =()=> {
    setTheme(theme==="day" ? "night" : "day");
  };

  const age=24;

  return (
    <div className="homepage">
      <div className="homepage_content">
        <p>Vjezba 1</p>
        <h1>Dobrodosli na radionicu</h1>
      </div>
      <div className="homepage_content">
        <p>Vjezba 2</p>
        <button className="homepage_content_button" 
        onClick={onClick}
        disabled={disable}>Vjezba 2</button>
      </div>
      <div className="homepage_content">
        <p>Vjezba 3</p>
        <h2>Danas je {currentDate} i trenutno je {currentTime}</h2>
      </div>
      <div className="homepage_content">
        <p>Vjezba 4</p>
        <h2>{age>18 ? "Punoljetni ste" : "Niste punoljetni"}</h2>
      </div> 
      <div className="homepage_content">
        <p>Vjezba 5</p>
        <div>
        <button className="homepage_content_button" onClick={countDown} disabled={count<=0}>-</button>
        <button className="homepage_content_button" onClick={countUp} disabled={count>=10}>+</button>
        </div>
        {count}
      </div>
      <div className="homepage_content">
        <p>Vjezba 6</p>
        <div className="homepage_content--${(theme)}"> 
        <button className="homepage_content_button" onClick={toggleTheme}>Promjeni u {theme ==="day" ? "night" : "day"}</button> 
        </div>
      </div> 
    </div>
  );
};
