import React, { FC, useEffect, useState } from "react";
import logo from "../../logo.svg";
import background from "../../slike/background.jpeg";
import "./HomePage.scss";
import { url } from "inspector";
import { useNavigate } from "react-router-dom";

type AgeCheckerProps = {
  age: number;
};
interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
export const HomePage: FC<AgeCheckerProps> = ({ age }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(false);

  const dateSet = new Date().toLocaleDateString();
  const timeSet = new Date().toLocaleTimeString();
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [teamChange, setTeamChange] = useState("lightblue");
  const [images, setImages] = useState<Image[]>([]);
  const photos = "https://jsonplaceholder.typicode.com/photos7_limit=10";

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos7_limit=2`
      );
      const data: Image[] = await response.json();
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      console.error("Greška prilikom dohvaćanja slika:", error);
    }
  };
  console.log(photos);

  function increaseCount() {
    setCount(count + 1);
    if (count >= 10) {
      setIsDisabled(true);
    } else {
      setIsDisabled2(false);
    }
  }
  function decreaseCount() {
    setCount(count - 1);
    if (count <= 0) {
      setIsDisabled2(true);
    } else {
      setIsDisabled(false);
    }
  }

  function handleOnclick() {
    console.log("Gumb je kliknut");
    setIsDisabled(true);
  }
  function clickButton() {
    setCount(count + 1);
    if (count > 5) {
      console.log(`kliknuli ste ${count}, sto je vise od 5 puta`);
    } else {
      console.log(`kliknuli ste ${count}, sto je manje od 5 puta`);
    }
  }
  function changeBackground() {
    const newBackground = teamChange === "gray" ? "lightblue" : "gray";
    setTeamChange(newBackground);
  }

  function sendMessage() {
    const nameSaved = JSON.parse(localStorage.getItem("nameSaved") || "[]");
    nameSaved.push(name);
    localStorage.setItem("nameSaved", JSON.stringify(nameSaved));
    console.log("Ime je spaseno:", name);
  }
  const navigate=useNavigate();
  function registrationClick(){
    navigate("/register");
    
  }
  useEffect(() => {}, [name]);

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
          <button
            className="increase"
            onClick={increaseCount}
            disabled={isDisabled}
          >
            +
          </button>
          <button
            className="decrease"
            onClick={decreaseCount}
            disabled={isDisabled2}
          >
            -
          </button>
        </div>
        <h3>Brojac: {count}</h3>
      </div>
      <div className="welcome-div">
        <div className="tema" style={{ backgroundColor: teamChange }}>
          <p>Vježba 6</p>
          <button className="teamChange" onClick={changeBackground}>
            Promijeni pozadinu
          </button>
        </div>
      </div>
      <div className="welcome-div">
        <p>Vježba 7</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Unesi ime i prezime"
        />
        <p>Dobrodosli, {name}</p>
      </div>
      <div className="welcome-div">
        <p>Vježba 8</p>
        <button className="clickCount" onClick={clickButton}>
          Klikni
        </button>
      </div>
      <div className="welcome-div">
        <p>Vježba 9</p>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Unesi ime i prezime"
          />
          <button className="sendMessage" onClick={sendMessage}>
            Posalji poruku
          </button>
        </form>
      </div>
      <div className="welcome-div">
        <div
          className="imgDiv"
          style={{ backgroundImage: `url(${background})` }}
        >
          <p>Vježba 10</p>
        </div>
      </div>
      <div className="welcome-div">
        <p>Vježba 11</p>
        <div className="photoGalery">
          {images.map((image) => (
            <div
              key={image.id}
              className="imageg"
            >
              <img
                src={image.thumbnailUrl}
                alt={image.title}
              />
              <p style={{ fontSize: "12px", marginTop: "5px" }}>
                {image.title}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1); 
            fetchImages();
          }}
        >
          Učitaj još slika
        </button>
      </div>

      <div className="welcome-div">
        <p>Vježba 12</p>
        <button className="registration" onChange={registrationClick}>Registracija</button>
      </div>
    </div>
  );
};
