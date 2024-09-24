import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [people, setPerson] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const allClickHendler = () => {
    setFiltered(people);
  };

  const manClickHendler = () => {
    const filteredManData = people.filter((item) => item.gender === "male");
    setFiltered(filteredManData);
  };

  const womanClickHendler = () => {
    const filteredWomanData = people.filter((item) => item.gender === "female");
    setFiltered(filteredWomanData);
  };

  const GetPeople = async () => {
    try {
      const { data } = await axios("https://randomuser.me/api/?results=20");
      setPerson(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (people) {
      GetPeople();
    }
  }, []);
  console.log(people);
  return (
    <>
      <div className="buttons">
        <button onClick={allClickHendler}>All</button>
        <button onClick={manClickHendler}>Man</button>
        <button onClick={womanClickHendler}>Woman</button>
      </div>
      <div className="main">
        {filtered.map((p, index) => (
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
