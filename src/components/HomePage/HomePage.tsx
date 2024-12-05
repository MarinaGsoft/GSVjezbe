import React, { FC, useEffect, useState } from "react";
import "./HomePage.scss";
import { ImageGallery } from "../ImageGallery";
import { useNavigate } from "react-router-dom";

type HomePageProps = {
  age?: number;
};
export const HomePage: FC<HomePageProps> = ({ age = 18 }) => {
  const navigate = useNavigate();
  const [diseable, setDisable] = useState(false);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("day");
  const [ime, postaviIme] = useState("");
  const [brojac, setBrojac] = useState(0);

  const [name, setName] = useState("");
  const [postavljenoIme, setPostavljenoIme] = useState("");
  console.log(postavljenoIme);

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    postaviIme(e.target.value);
  };
  const brojac1 = () => {
    setBrojac(brojac + 1);
  };
  const handleSetName = () => {
    console.log("name:", name);
    setPostavljenoIme(name);
  };

  useEffect(() => {
    if (brojac >= 5) {
      console.log("Brojac je veći ili jednak 5");
    }
  }, [brojac]);
  return (
    <div className="homepage">
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>1.vježba</p>
          <p>
            Zadatak:
            <br />
            Prikaz poruke dobrodošlice Kreiraj osnovnu komponentu HomePage.tsx
            koja prikazuje poruku: <br />
            "Dobrodošli na radionicu React s TypeScriptom!" <br />
            Ova poruka treba biti smještena u naslovu (h1).
          </p>
        </div>

        <h1>Dobrodošli na radionicu</h1>
      </div>
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>2.vježba</p>
          <p>
            Zadatak: <br />
            Dodavanje gumba Ispod teksta poruke dodaj gumb (button) koji je u
            početku omogućen.
            <br />
            Gumb neka bude crvene boje,a text bijele <br />
            Širina može biti fit-content Na klik gumba ispiši u konzolu ”Gumb je
            kliknut” te onemogući daljnje klikanje
          </p>
        </div>
        <button
          className="homepage__content__button"
          onClick={onClick}
          disabled={diseable}
        >
          Vjezba
        </button>
      </div>
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>3.vježba</p>

          <p>
            Prikaz trenutnog datuma Napravi konstantu koja čuva trenutni datum i
            trenutno vrijeme koristeći funkciju new Date().(odvojene konstante
            za datum i vrijeme) <br />
            Prikaži datum u h2 elementu u formatu:
            <br />
            "Današnji datum je varijabla, i trenutno je varijabla2"
          </p>
        </div>
        <h2>
          Danas je {currentDate} i trenutno je {currentTime}
        </h2>
      </div>
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>4.vježba</p>
          <p>
            Napravite konstantu koja prima age kao prop. Ako je korisnik stariji
            od 18 godina, ispišite "Punoljetni ste", a ako nije, ispišite "Niste
            punoljetni”.
          </p>
        </div>
        {age <= 18 ? <h3>Niste punoljetni</h3> : <h2>Punoljetni ste</h2>}
      </div>
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>5.vježba</p>
          <p>
            Napravi brojač koji ima: Brojač (count) u stanju. <br />
            Dva gumba: jedan za povećavanje, drugi za smanjivanje brojača.
            <br /> Gumb – je onemogućen ako je broj manji ili jednak 0 <br />{" "}
            Gumb + je onemogućen ako je broj veći od 10
          </p>
        </div>
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
        <div className="homepage__content__text">
          <p>6.vježba</p>
          <p>
            Dodavanje teme (tema dana/noći): Dodaj state za praćenje teme (dana
            ili noći) i omogući korisnicima da mijenjaju temu klikom na dugme.
          </p>
        </div>
        <div>
          <button onClick={toggleTheme}>
            Promijeni u {theme === "day" ? "night" : "day"}
          </button>
        </div>
      </div>
      <div className={"homepage__content"}>
        <div className="homepage__content__text">
          <p>7.vježba</p>
          <p>
            Dinamički unos podataka: <br />
            Dodaj input polje koje omogućuje korisniku da unese svoje ime, i
            prikaži poruku dobrodošlice.
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Unesite ime"
            onChange={handleInputChange}
            value={ime}
          />
          <p>'Dobrodošli {ime}'</p>
        </div>
      </div>
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>8.vježba</p>
          <p>
            Dinamički unos podataka:
            <br /> Kreirati useEffect() koji prati broj klikova i ispisuje
            poruku kada korisnik klikne više od 5 puta.
            <br />
            Koristi if/else petlju.
          </p>
        </div>
        <button className="homepage__content__counter" onClick={brojac1}>
          Click me
        </button>
      </div>
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>9.vježba</p>
          <p>
            Dinamički unos podataka: Napravi formu sa input poljem gdje korisnik
            može unijeti svoje ime. <br />
            Kada korisnik klikne na gumb "Pošalji", prikazati pozdravnu poruku s
            unesenim imenom.
            <br /> Koristi onChange i onSubmit događaje s odgovarajućim tipovima
            za TypeScript.
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Unesite vaše ime"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
          <button
            className="homepage__content__counter"
            onClick={handleSetName}
          >
            pošalji podatke
          </button>
        </form>
        {postavljenoIme && <p>Vaše ime je: {postavljenoIme}</p>}
      </div>
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>10.vježba</p>
          <p>
            Dohvaćanje i prikazivanje slika pomocu https://......
            <br />
            Pronađite neku sliku na Google i postavite je u poseban div:
            <br />
            -postavi scss <br />
            Širina 150px
            <br />
            Visina 150px
            <br />
            Padding 8px
            <br />
            Postavite sliku zamućenu(opacity)
          </p>
        </div>
        <img
          src="https://life-decor.com/cdn/shop/products/zidne-slike-moderne_0f0a26d2-0adb-4b8f-b67b-3908d448af3b_1500x900.jpg?v=1623407652"
          alt="slika"
          className="homepage__content__img"
        />
      </div>
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>11.vježba</p>
          <p>
            Dohvaćanje i prikazivanje slika iz API-ja
            <br /> Napravite komponentu koja dohvaća slike sa API-ja
            (JSONPlaceholder).
            <br /> Prikazujte slike u gridu. Omogućite učitavanje novih slika
            pritiskom na dugme. <br />
            API:
            <br />
            https://jsonplaceholder.typicode.com/photos?_limit=10
          </p>
        </div>
        <ImageGallery />
      </div>
      <div className="homepage__content">
        <div className="homepage__content__text">
          <p>12.vježba</p>
          <p>
            Forma <br />
            Napravite komponentu Register <br />U homepage.tsx postavi gumb te
            prilikom klikanja na dugme otvara se registerPage.
            <br />U registerPage postavi inpute:
            <br />
            Name,
            <br />
            LastName, <br />
            E-mail,
            <br /> Telephone, <br />
            Gender(checkbox), Country(Select)
            <br />
            Ispod forme postavi gumb za spremanje podataka u localStorage
          </p>
        </div>
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
