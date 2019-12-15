import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    console.log(counters);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    ++counters[index].value;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    --counters[index].value;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        {/* <NavBar totalCounters={this.state.counters.filter(counter => counter.value > 0).length} /> */}
        <main className="container">

          {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          /> */}
         
          <Movies/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
