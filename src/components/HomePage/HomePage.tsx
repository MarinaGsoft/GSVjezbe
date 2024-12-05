import React, { FC, useEffect, useState } from "react";
import logo from "../../logo.svg";
import "./HomePage.scss";
import {Image} from '../Image';
import {RegisterPage} from '../RegisterPage';

type HomePageProps = {
  age?: string
};


export const HomePage: FC<HomePageProps> = () => {

  const [disable, setDisable]=useState(false);
  const [count, setCount]=useState(0);
  const [theme, setTheme]=useState("day");
  const [name, setName] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const [ime, setIme] = useState('');
  const [submittedName, setSubmittedName] = useState('');

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

  const setClCount=()=> {
    setClickCount(clickCount+1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Sprječava ponovno učitavanje stranice
    setSubmittedName(ime); // Postavlja unijeto ime kao poslato
  };

  const age=24;

  useEffect(() => {
    if (clickCount > 5) {
      console.log(`Korisnik je kliknuo vise od 5 puta,  ${clickCount}`);
    } else {
      console.log(`Klikovi: ${clickCount}`);
    }
  }, [clickCount]);

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
      <div className="homepage_content">
        <p>Vjezba 7</p>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Unesite ime"
      />
        <p>Dobrodosli {name}</p>
      </div>
      <div className="homepage_content">
        <p>Vjezba 8</p>
        <h1>Broj klikova: {clickCount}</h1>
      <button
        onClick={setClCount}
      >
        Klikni
      </button>
      </div>
      <div className="homepage_content">
      <p>Vježba 9</p>
      <form onSubmit={handleSubmit}>
        <label>
          Unesite vaše ime:
          <input
            type="text"
            value={ime}
            onChange={(e) => setIme(e.target.value)} // Ažuriranje unosa
            placeholder="Vaše ime"
          />
        </label>
        <button type="submit">Pošalji</button>
      </form>
      {submittedName && <p>Dobrodošli, {submittedName}!</p>}
    </div>
    <div className="homepage_content">
        <p>Vjezba 10</p>
        <h1>Slika</h1>
        <img
          src="https://media.licdn.com/dms/image/v2/C4E12AQFdVr18zUa17Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1624637761724?e=2147483647&v=beta&t=uOrqjZV7ZeSvE6euFcZVEuj-2yuec1FppjnE6IUYdzY"
          alt="Primjer slike"
          className="homepage_content_img"
        />
      </div>
      <div className="homepage_content">
        <p>Vjezba 11</p>
        <Image/>
      </div>
      <div className="homepage_content">
        <p>Vjezba 12</p>
        <button className="homepage-button">Idi na registraciju</button>
      </div>
    </div>
  );
};
