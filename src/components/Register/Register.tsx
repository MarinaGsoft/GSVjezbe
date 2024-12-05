import React, { FC, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Register.scss";
type UserProfile = {
  email?: string;
  password?: string;
  gender?: string;
  country?: string;
};
export const Registration: FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const [displayName, setDisplayName] = useState("");

  const navigate = useNavigate();
  function savePodaci() {
    const profilData = { email, password, gender, country };
    setUserProfile(profilData);
    const savedProfile = JSON.parse(
      localStorage.getItem("userProfiles") || "[]"
    );
    const updatedDataProfile = [...savedProfile, profilData];
    localStorage.setItem("userProfiles", JSON.stringify(updatedDataProfile));

    console.log("Podaci su spaseni");
    navigate("/login");
  }
  useEffect(() => {}, [userProfile]);

 /* const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //await updateProfile(userCredential.user,{displayName});

      navigate("/login");
      console.log("User registrated  successufully");
    } catch (error) {
      console.log("Error registration user", error);
    }
  };*/
  /*<form onSubmit={savePodaci} className="registrationForm">
        <label>Name and LastName</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label>
          Gender
          <br />
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </label>
        </label>

        <br />
        <label>
          Country:
          <br />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select your country</option>
            <option value="US">United States</option>
            <option value="BiH">Bosnia and Herzegovina</option>
          </select>
        </label>
        <br />
        <br />
        <button type="submit">Save</button>
      </form>*/

  return (
    <div className="registration-page">
      <h1>Registration</h1>
      <form onSubmit={savePodaci} className="registrationForm">
        <label>Name and LastName</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label>
          Gender
          <br />
          <label>
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </label>
        </label>

        <br />
        <label>
          Country:
          <br />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select your country</option>
            <option value="US">United States</option>
            <option value="BiH">Bosnia and Herzegovina</option>
          </select>
        </label>
        <br />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};