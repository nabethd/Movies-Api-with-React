import { makeObservable, observable, action } from "mobx";

class Movies {
  Allmovies = [];
  Chosen = {};

  constructor() {
    makeObservable(this, {
      Chosen: observable,

      Allmovies: observable,
      Delete: action,
      loadMovies: action,
      Update: action,
      Add: action,
      SetChosen: action,
    });
  }

  SetChosen(id) {
    this.Chosen = id;
  }

  Delete(id) {
    this.Allmovies.splice(id - 1, 1);
    this.Chosen = {};
    console.log(this.Allmovies);
  }

  Update(id, name, genres, daysarr, image, rating) {
    const newMovie = {
      id: id,
      rating: { average: rating },
      genres: genres,
      schedule: { days: daysarr },
      image: { medium: image },
      name: name,
    };

    this.Allmovies.splice(id - 1, 1, newMovie);
    this.Chosen = newMovie;
    console.log(this.Allmovies);
  }

  Add(name, genres, daysarr, image, rating) {
    let newid = 1;
    for (let i = 0; i < this.Allmovies.length; i++) {
      if (this.Allmovies[i].id !== newid) break;
      newid++;
    }
    const newMovie = {
      id: newid,
      rating: { average: rating },
      genres: genres,
      schedule: { days: daysarr },
      image: { medium: image },
      name: name,
    };
    this.Allmovies.splice(newid - 1, 0, newMovie);
    console.log(this.Allmovies);
  }

  setTopR(val) {
    this.topR = val;
  }

  loadMovies(data) {
    this.Allmovies = data;
  }

  toprated(check) {
    if (check) {
      return this.Allmovies.filter((x) => x.rating.average > 8);
    } else {
      return this.Allmovies;
    }
  }
}

export default Movies;
