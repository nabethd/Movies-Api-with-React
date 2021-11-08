import { observer } from "mobx-react-lite";
import "/Volumes/GoogleDrive/My Drive/Full-Stack Labs/frontendApp/src/style.css";

const UpdateAndDelete = ({ movies }) => {
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

  let daysChosen = [];
  let genreChosen = [];
  let name = movies.Chosen.name;

  let image = movies.Chosen.image?.medium;
  let rateingarray = movies.Chosen.rating?.average;

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
      genreChosen = genreChosen.filter((x) => x !== d);
    } else {
      genreChosen.push(d);
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
      daysChosen = daysChosen.filter((x) => x !== d);
    } else {
      daysChosen.push(d);
    }
  };

  return (
    <div id="UpdateAndDelete">
      {" "}
      <h3>Update and Delete:</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div id="left">
          <img src={image} alt="" />
        </div>

        <div id="right">
          Name:{" "}
          <input
            type="text"
            placeholder={movies.Chosen.name}
            onChange={(e) => (name = e.target.value)}
          />{" "}
          <br />
          Genre:{" "}
          <ul>
            {" "}
            {genresArray.map((g, index) => {
              if (movies.Chosen.genres?.includes(g)) genreChosen.push(g);
              return (
                <li key={`${index}1`}>
                  <input
                    type="checkbox"
                    id={`${g}1`}
                    value={`${g}`}
                    name="genres"
                    defaultChecked={movies.Chosen.genres?.includes(g)}
                    onChange={handleGeners}
                  />
                  <label for={`${g}1`}>{g}</label>
                </li>
              );
            })}{" "}
          </ul>
          <br />
          <br />
          <br />
          <br />
          <br />
          Scheduele Days:{" "}
          <ul>
            {days.map((g, index) => {
              if (movies.Chosen.schedule?.days.includes(g)) daysChosen.push(g);
              return (
                <li key={`${index}1`}>
                  <input
                    type="checkbox"
                    id={`${g}1`}
                    value={`${g}`}
                    name="days"
                    defaultChecked={movies.Chosen.schedule?.days.includes(g)}
                    onChange={handleDays}
                  />
                  <label for={`${g}1`}>{g}</label>
                </li>
              );
            })}
          </ul>
          {/* <ul>
          {" "}
          {movies.Chosen.schedule?.days.map((d, index) => {
            return <li key={index}>{d}</li>;
          })}{" "}
        </ul> */}
          <br />
          <br />
          <br />
          Rate:{" "}
          <input
            type="number"
            max="10"
            min="1"
            defaultValue={movies.Chosen.rating?.average}
            onChange={(e) => {
              rateingarray = e.target.value;
            }}
          />{" "}
          <br />
          <br />
          Image:{" "}
          <input
            type="text"
            name="image"
            defaultValue={movies.Chosen.image?.medium}
            onChange={(e) => {
              image = e.target.value;
            }}
          />
          <br />
          <button
            onClick={() =>
              movies.Update(
                movies.Chosen.id,
                name,
                genreChosen,
                daysChosen,
                image,
                rateingarray
              )
            }
          >
            Update
          </button>
          <button onClick={() => movies.Delete(movies.Chosen.id)}>
            Delete
          </button>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default observer(UpdateAndDelete);
