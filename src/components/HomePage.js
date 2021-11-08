import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import Movie from "./Movie";
import { useState } from "react";
import AddMovie from "./AddMovie";
import UpdateAndDelete from "./UpdateAndDelete";
import "../style.css";

const HomePage = ({ movies }) => {
  const [mName, setMName] = useState("");
  const [check, setCheck] = useState(false);
  const history = useHistory();

  const handlename = (e) => {
    setMName(e.target.value);
  };

  const handleClick = (movieId) => {
    movies.SetChosen(movieId);
  };

  const returnAfterSearch = (m, index) => {
    if (mName === "")
      return <Movie key={index} callback={handleClick} movie={m} />;
    else if (m.name.toUpperCase().includes(mName.toUpperCase()))
      return <Movie key={index} callback={handleClick} movie={m} />;
  };

  return (
    <div id="homePage" style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <div id="searchdiv">
          <br />
          <br />

          <input
            type="text"
            name="moviename"
            placeholder="Search Movie"
            onChange={handlename}
          />
          <br />
          <ul>
            {" "}
            <li key={"Top rating"}>
              <input
                type="checkbox"
                id={"Top rating"}
                name="days"
                value={"Top rating"}
                onChange={() => (check ? setCheck(false) : setCheck(true))}
              />
              <label for={"Top rating"}>Top rating</label>
            </li>
          </ul>
          <br />
          <br />
          <br />
          <br />
          <button onClick={() => history.push("/Reports")}>Reports</button>
        </div>
        <div>
          {movies
            .toprated(check)
            .map((m, index) => returnAfterSearch(m, index))}
        </div>
      </div>
      <div>
        <div id="hello">Hello {sessionStorage["userName"]}</div>
        <div id="rightDiv">
          <div>
            <AddMovie movies={movies} />
            <br />
            <br />
            <br />
            <UpdateAndDelete movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(HomePage);
