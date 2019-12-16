import React, { Component } from "react";

import Like from "../components/common/like";
import Pagination from "./common/pagination";
import { paginate } from "../components/util/paginate";
import EditMovieModal from "./editMovieModal";

class Movies extends Component {
  renderModal = () => {
    if (!this.props.editMovie) return null;
    return (
      <EditMovieModal
        onSubmit={this.props.onSubmit}
        showModal={this.props.showModal}
        onClose={this.props.onCloseModal}
        movie={this.props.editMovie}
      />
    );
  };
  render() {
    const { length: count } = this.props.movies;
    const { pageSize, currentPage, movies: allMovies, onEdit, onDelete, onLike, onPageChange } = this.props;
    if (count === 0) return <p> there are no movies</p>;

    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <React.Fragment>
        {this.renderModal()}

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
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => onLike(movie)}
                  />
                </td>
                <td>
                <button
                    type="button"
                    className="btn btn-primary btn-sm m-2"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => onEdit(movie)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={count}
          pageSize={pageSize}
          onPageChange={onPageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
