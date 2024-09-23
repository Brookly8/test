import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [people, setPeople] = useState("");
  const [person, setPerson] = useState([]);

  const allClickHendler = () => {
    setPeople("all");
  };

  const manClickHendler = () => {
    setPeople("man");
  };

  const womanClickHendler = () => {
    setPeople("woman");
  };

  const GetPeople = async () => {
    try {
      const { data } = await axios("https://randomuser.me/api/?results=20");
      if (people === "man") {
        const filteredManData = data.results.filter(
          (item) => item.gender === "male"
        );
        setPerson(filteredManData);
      }

      if (people === "woman") {
        const filteredWomanData = data.results.filter(
          (item) => item.gender === "female"
        );
        setPerson(filteredWomanData);
      }

      if (people === "all") {
        setPerson(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (people) {
      GetPeople();
    }
  }, [people]);
  console.log(person);
  return (
    <>
      <div className="buttons">
        <button onClick={allClickHendler}>All</button>
        <button onClick={manClickHendler}>Man</button>
        <button onClick={womanClickHendler}>Woman</button>
      </div>
      <div className="main">
        {person.map((p, index) => (
          <div className="person" key={index}>
            <img src={p.picture.large} alt="" />
            <p className="name">
              {p.name.first} {p.name.last}
            </p>
            <p>
              {p.location.country}, {p.location.city}
            </p>
            <p>age:{p.dob.age}</p>
            <p>cell: {p.cell}</p>
            <p>Email: {p.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
