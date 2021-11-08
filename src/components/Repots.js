import { observer } from "mobx-react-lite";

import Movie from "./Movie";
import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter";
import { useHistory } from "react-router";

const Repots = ({ movies }) => {
  const history = useHistory();

  return (
    <div id="homePage" style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <div id="searchdiv">
          <br />
          <button onClick={() => history.push("/HomePage")}>Home Page</button>
        </div>
        <div>
          {movies.Allmovies.map((m, index) => {
            return <Movie key={index} callback={(x) => x} movie={m} />;
          })}
        </div>
      </div>
      <div>
        <div id="hello">Hello {sessionStorage["userName"]}</div>
        <div id="rightDiv">
          <div>
            <Filter movies={movies} />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default observer(Repots);
