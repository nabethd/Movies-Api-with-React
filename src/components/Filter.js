import { observer } from "mobx-react-lite";
import "/Volumes/GoogleDrive/My Drive/Full-Stack Labs/frontendApp/src/style.css";
import { useEffect, useState } from "react";
import Movie from "./Movie";
const Filter = ({ movies }) => {
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
  const [defdays, setDefdays] = useState(false);
  const [defgenres, setDefgenres] = useState(false);

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
    console.log(genreChosen);
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
      setDefdays(false);
    } else {
      setDaysChosen([...daysChosen, d]);
      setDefdays(true);
    }
  };

  const filter = () => {};
  const returnAfterSearch = (m, index) => {
    let genfil = false;
    let dayfil = false;
    if (genreChosen.length == 0) genfil = true;
    if (daysChosen.length == 0) dayfil = true;

    if (genfil && dayfil) return;
    if (genfil) {
      for (let i = 0; i < daysChosen.length; i++) {
        let d = daysChosen[i];
        if (m.schedule?.days.includes(d)) {
          return <Movie key={index} callback={(x) => {}} movie={m} />;
        }
      }
    }
    if (dayfil) {
      for (let i = 0; i < genreChosen.length; i++) {
        let g = genreChosen[i];
        if (m.genres.includes(g)) {
          return <Movie key={index} callback={(x) => {}} movie={m} />;
        }
      }
    }

    if (!dayfil && !genfil)
      for (let i = 0; i < genreChosen.length; i++) {
        let g = genreChosen[i];
        if (m.genres.includes(g)) {
          for (let i = 0; i < daysChosen.length; i++) {
            let d = daysChosen[i];
            if (m.schedule?.days.includes(d)) {
              return <Movie key={index} callback={(x) => {}} movie={m} />;
            }
          }
        }
      }

    //   return <Movie key={index} callback={handleClick} movie={m} />;
  };

  return (
    <div>
      <div id="filterdiv">
        <h3> Filter: </h3>
        Air Days:{" "}
        <ul>
          {days.map((g, index) => {
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`${g}2`}
                  name="days"
                  // checked={defdays}
                  value={`${g}`}
                  onChange={handleDays}
                />
                <label for={`${g}2`}>{g}</label>
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
                  id={`${g}2`}
                  // checked={defgenres}
                  name="genre"
                  value={`${g}`}
                  onChange={handleGeners}
                />
                <label for={`${g}2`}>{g}</label>
              </li>
            );
          })}
        </ul>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            setDaysChosen([]);
            setGenerChosen([]);
            setDefdays(false);
          }}
        >
          Reset
        </button>
      </div>
      {movies.Allmovies.map((m, index) => returnAfterSearch(m, index))}
    </div>
  );
};

export default observer(Filter);
