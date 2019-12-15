import React, { Component } from 'react';

export class Counter extends Component {
    render() { 

        return (
          <div>
            <div className="row">
              <div className="col-1">
                <span className={this.getBadgeClasses()}>
                  {this.formatCount()}
                </span>
              </div>
              <div className="col">
                <button
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn primary btn-secondary btn-sm"
                >
                  +
                </button>
                <button
                  onClick={() => this.props.onDecrement(this.props.counter)}
                  className="btn primary btn-secondary btn-sm m-2"
                >
                  -
                </button>
                <button
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                  className="btn primary btn-danger btn-sm m-2"
                >
                  Delete
                </button>
              </div>
            </div>
            {/* <h4>Counter {this.props.counter.id}</h4> */}
          </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;