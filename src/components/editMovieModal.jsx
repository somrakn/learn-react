import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class EditMovieModal extends Component {
  componentWillMount() {
    this.setState({title: this.props.movie.title})
  }
  handleChange = (event) => {
    this.setState({title: event.target.value});
  }
  onSubmit = (event) => {
    this.props.onSubmit(event, this.title.value);
  }
  render() {
    const {onClose, showModal} = this.props;
    return (
      <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formMovie">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={(ref) => this.title = ref} onChange={this.handleChange} value={this.state.title} type="text"  placeholder="Enter Title" required/>
            </Form.Group>
            <div style={{ textAlign: "right" }}>
              <Button variant="secondary" className="m-2" onClick={onClose}>
                Close
              </Button>
              <Button type="submit">
                Save changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default EditMovieModal;
