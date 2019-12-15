import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onDecrement, onReset, counters } = this.props;
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
