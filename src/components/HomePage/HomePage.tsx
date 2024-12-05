import React, { FC, useState, useEffect } from "react";
import "./HomePage.scss";
import { Navigate, useNavigate } from "react-router-dom";

interface HomePageProps {
  age: number;
}

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const HomePage: FC<HomePageProps> = ({ age }) => {

  const navigate= useNavigate()
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [isDay, setIsDay] = useState(true);
  const [name, setName] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [clicks, setClicks] = useState(0); 
  const [clickMessage, setClickMessage] = useState(""); 
  const [formName, setFormName] = useState("");
  const [greetingMessage, setGreetingMessage] = useState(""); 
  const [photos, setPhotos] = useState<Photo[]>([]); 

  const handleClick = () => {
    console.log("Gumb je kliknut");
    setDisabled(true);
  };

  const trenutniDatum = new Date().toLocaleDateString();
  const trenutnoVrijeme = new Date().toLocaleTimeString();

  const isPunoljetan = age >= 18 ? "Punoljetni ste" : "Niste punoljetni";

  const countUp = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const countDown = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const toggleTheme = () => {
    setIsDay(!isDay);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setMessage(`Dobrodošli, ${e.target.value}!`);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGreetingMessage(`Pozdrav, ${formName}!`);
  };

  useEffect(() => {
    if (clicks > 5) {
      setClickMessage("Kliknuli ste više od 5 puta!");
    } else {
      setClickMessage("");
    }
  }, [clicks]);


  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

 
  const loadNewPhotos = () => {
    fetchPhotos();
  };

 
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__content">
        <p>1.vjezba</p>
        <h1>Dobrodošli na radionicu</h1>
      </div>

      <div className="homepage__content">
        <p>2.vjezba</p>
        <h1>
          <button
            className="homepage2__content__button"
            onClick={handleClick}
            disabled={disabled}
          >
            Klikni me
          </button>
        </h1>
      </div>

      <div className="homepage__content">
        <p>3.vjezba</p>
        <p>Danas je datum: {trenutniDatum}</p>
        <p>Trenutno je: {trenutnoVrijeme}</p>
      </div>

      <div className="homepage__content">
        <p>4.vjezba</p>
        <p>{isPunoljetan}</p>
      </div>

      <div className="homepage__content">
        <p>5.vjezba</p>
        <div>
          <h2>Brojač: {count}</h2>
          <button onClick={countDown} disabled={count <= 0}>
            -
          </button>
          <button onClick={countUp} disabled={count >= 10}>
            +
          </button>
        </div>
      </div>

      <div className="homepage__content">
        <p>6.vjezba</p>
        <div className={`theme-box ${isDay ? "day" : "night"}`}>
          <button className="theme-button" onClick={toggleTheme}>
            Promijeni temu: {isDay ? "Dan" : "Noć"}
          </button>
        </div>
      </div>

      <div className="homepage__content">
        <p>7.vjezba</p>
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Unesite vaše ime"
            className="name-input"
          />
          <p>{message}</p>
        </div>
      </div>

      <div className="homepage__content">
        <p>8.vjezba</p>
        <div>
          <button onClick={() => setClicks(clicks + 1)}>
            Kliknite me ({clicks} puta)
          </button>
          <p>{clickMessage}</p>
        </div>
      </div>

      <div className="homepage__content">
        <p>9.vjezba</p>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={formName}
              onChange={handleFormChange}
              placeholder="Unesite vaše ime"
              className="name-input"
            />
            <button type="submit">Pošaljite</button>
          </form>
          <p>{greetingMessage}</p>
        </div>
      </div>

      <div className="homepage__content">
        <p>10.vjezba</p>
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUuJMB7bsteuMt2IMJl-XzAMnCMI_lr6_GA&s"
            alt="slika"
            className="image"
          />
        </div>
      </div>


      <div className="homepage__content">
        
        <p>12.vjezba</p>
        <div>
          <button onClick={loadNewPhotos}>Učitaj  slike</button>
          <div className="photo-grid">
            {photos.map((photo) => (
              <div key={photo.id} className="photo-item">
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className="photo-thumbnail"
                />
                <p>{photo.title}</p>
              </div>
              
            ))}

            
            <div className="homepage__content">
        <p>13.vjezba</p>
        <div>
          <button onClick={() => navigate("/registerpage")}>
            Registriraj se
          </button>
        </div>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
