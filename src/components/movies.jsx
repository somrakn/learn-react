import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "../components/common/like";
import Pagination from "./common/pagination";
import { paginate } from "../components/util/paginate";
import EditMovieModal from "./editMovieModal";

class Movies extends Component {
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
    const form = event.currentTarget;

      event.preventDefault();
      event.stopPropagation();
    if (form.checkValidity() === false) {
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

  renderModal = () => {
    if (!this.state.editMovie) return null;
    return <EditMovieModal
    onSubmit={this.handleSubmit}
    showModal={this.state.showModal}
    onClose={this.handleCloseModal}
    movie={this.state.editMovie}
  />;
  }
  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;
    if (count === 0) return <p> there are no movies</p>;

    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <React.Fragment>
        {
          this.renderModal()
        }
        
        <p> showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id} >
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>{" "}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => this.handleEdit(movie)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
