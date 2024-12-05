import React, { FC, useState, useEffect } from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import slika1 from "../../assets/slika1.jpg";

type AgeProps = {
  age: number;
}

const AgeCheck: FC<AgeProps> = ({ age }) => {
  return (
    <p>{age >= 18 ? "Punoljetni ste" : "Niste punoljetni"}</p>
  );
};

const ImageGrid: FC = () => {
  const [images, setImages] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=3&_page=${page}`);
    const data = await response.json();
    setImages((prevImages) => [...prevImages, ...data]);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div>
      <div className="image-grid">
        {images.map((image) => (
          <img key={image.id} src={image.thumbnailUrl} alt={image.title} />
        ))}
      </div>
      <button onClick={() => setPage(page + 1)}>Učitaj više slika</button>
    </div>
  );
};

export const HomePage: FC = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const [count, setCount] = useState(0);
  const [isDayTheme, setIsDayTheme] = useState(true);
  const [ime, postaviIme] = useState(""); 
  const [clickCount, setClickCount] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [formIme, setFormIme] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("Gumb je kliknut");
    setIsButtonEnabled(false);
  };

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const toggleTheme = () => {
    setIsDayTheme(!isDayTheme);
  };

  useEffect(() => {
    if (clickCount > 5) {
      console.log("Korisnik je kliknuo više od 5 puta");
    } else {
      console.log("Korisnik je kliknuo 5 puta ili manje");
    }
  }, [clickCount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    postaviIme(e.target.value);
  };

  const handleInputChangeForForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormIme(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setGreeting(`Dobrodošli, ${formIme}!`);
  };

  return (
    <div className={`homepage ${isDayTheme ? 'day-theme' : 'night-theme'}`}>
        <div className="homepage_content">
            <p>1.Vježba</p>
            <h1>Dobrodošli</h1>
        </div>
        <div className="homepage_content">
           <p>2.Vježba</p>
           <button onClick={handleButtonClick} disabled={!isButtonEnabled}>
             Klikni me
           </button>
       </div>
       <div className="homepage_content">
          <p>3.Vježba</p>
          <h2>Danas je {currentDate} i trenutno je {currentTime}.</h2>
      </div>
      <div className="homepage_content">
          <p>4.Vježba</p>
          <AgeCheck age={2} />
      </div>
      <div className="homepage_content">
            <p>5.Vježba</p>
            <div>
              <button onClick={handleIncrement} disabled={count >= 10}>+</button>
              <button onClick={handleDecrement} disabled={count <= 0}>-</button>
            </div>
            <p>Count: {count}</p>
        </div>
        <div className="homepage_content">
           <p>6.Vježba</p>
           <button onClick={toggleTheme}>
             Promijeni temu
           </button>
       </div>
        <div className="homepage_content">
        <p>7.Vježba</p>
        <input 
        type="text"
        placeholder="Unesite ime"
        value={ime}
        onChange={handleInputChange}
        />
        {ime && <p>Dobrodošli, {ime}!</p>}
      </div>
      <div className="homepage_content">
          <p>8.Vježba</p>
          <button onClick={() => setClickCount(clickCount + 1)}>Klikni me</button>
    </div>
    <div className="homepage_content">
      <p>9.Vježba</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Unesite ime" 
          value={formIme} 
          onChange={handleInputChangeForForm} 
        />
        <button type="submit">Pošalji</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
    <div className="homepage_content">
     <p>10.Vježba</p>
     <img src="https://www.popwebdesign.net/popart_blog/wp-content/uploads/2019/05/ledeno-jezero-Tim-Stief-Unsplash.jpg" 
     className="image-style"
      />
     
 </div>
 <div className="homepage_content">
    <p>11.Vježba</p>
    </div>
    <div className="homepage_content">
   <p>12.Vježba</p>
   <ImageGrid />
   </div>
   <div className="homepage_content">
   <p>13.Vježba</p>
   <button onClick={() => navigate("/register")}>Register</button>
   </div>
    </div>
  );
};