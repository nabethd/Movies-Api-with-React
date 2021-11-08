import "../style.css";

const movie = (props) => {
  "let movie = {id:m.id, name:m.name, genre:m.genres, schedueleDays: m.Scheduele?.Days, img:m.Image?.medium, rate:m.Rating?.average}";

  const handleCallBack = () => {
    props.callback(props.movie);
  };

  return (
    <div
      onClick={handleCallBack}
      id="movieWraper"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div id="left">
        <img src={props.movie.image?.medium} alt="" />
      </div>

      <div id="right">
        ID: {props.movie.id} <br />
        Name: {props.movie.name} <br />
        Genre:{" "}
        <ul>
          {" "}
          {props.movie.genres.map((d, index) => {
            return <li key={index}>{d}</li>;
          })}{" "}
        </ul>
        Scheduele Days:{" "}
        <ul>
          {" "}
          {props.movie.schedule.days.map((d, index) => {
            return <li key={index}>{d}</li>;
          })}{" "}
        </ul>
        <br />
        <br />
        Rate: {props.movie.rating.average} <br />
        <br />
        <br />
        <br /> <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
};

export default movie;
