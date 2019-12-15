import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";


class App extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 6,
    showModal: false,
    editMovie: null
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleEdit = movie => {
    this.setState({ showModal: true, editMovie: movie });
  };

  handleSubmit = (event, title) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity() === false) {
      return;
    }

    const index = this.state.movies.indexOf(this.state.editMovie);
    let movies = [...this.state.movies];
    movies[index] = {...movies[index]};
    movies[index].title = title;

    this.setState({movies, editMovie: null, showModal: false});
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, editMovie: null});
  };

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Movies
            onSubmit={this.handleSubmit}
            showModal={this.state.showModal}
            onCloseModal={this.handleCloseModal}
            movies={this.state.movies}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
            editMovie={this.state.editMovie}
            onPageChange={this.handlePageChange}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
