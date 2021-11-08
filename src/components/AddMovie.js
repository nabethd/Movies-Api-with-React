import { observer } from "mobx-react-lite";
import "/Volumes/GoogleDrive/My Drive/Full-Stack Labs/frontendApp/src/style.css";
import { useState } from "react";
import "../style.css";

const AddMovie = ({ movies }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const genresArray = [
    "Action",
    "Science-Fiction",
    "Drama",
    "Horror",
    "Romance",
    "Crime",
    "Thriller",
    "Adventure",
    "Mystery",
    "Supernatural",
    "Fantasy",
  ];
  const [daysChosen, setDaysChosen] = useState([]);
  const [genreChosen, setGenerChosen] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rateingarray, setRateingarray] = useState("");

  const handleGeners = (e) => {
    const d = e.target.value;
    let exsist = false;
    for (let i = 0; i < genreChosen.length; i++) {
      if (genreChosen[i] === d) {
        exsist = true;
        break;
      }
    }
    if (exsist) {
      setGenerChosen(genreChosen.filter((x) => x !== d));
    } else {
      setGenerChosen([...genreChosen, d]);
    }
  };

  const handleDays = (e) => {
    const d = e.target.value;
    let exsist = false;
    for (let i = 0; i < daysChosen.length; i++) {
      if (daysChosen[i] === d) {
        exsist = true;
        break;
      }
    }
    if (exsist) {
      setDaysChosen(daysChosen.filter((x) => x !== d));
    } else {
      setDaysChosen([...daysChosen, d]);
    }
  };

  return (
    <div id="addMovie">
      <h3> Add A Movie: </h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      Air Days:{" "}
      <ul>
        {days.map((g, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={g}
                name="days"
                value={g}
                onChange={handleDays}
              />
              <label for={g}>{g}</label>
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <br />
      Genre:{" "}
      <ul>
        {genresArray.map((g, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={g}
                name="genre"
                value={g}
                onChange={handleGeners}
              />
              <label for={g}>{g}</label>
            </li>
          );
        })}
      </ul>{" "}
      <br />
      <br />
      <br />
      <br />
      <br />
      Rate:{" "}
      <input
        type="number"
        max="10"
        min="1"
        name="rating"
        onChange={(e) => setRateingarray(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() =>
          movies.Add(name, genreChosen, daysChosen, image, rateingarray)
        }
      >
        Add
      </button>
    </div>
  );
};

export default observer(AddMovie);
