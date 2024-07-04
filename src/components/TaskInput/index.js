import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions';
import './index.css';

class TaskInput extends Component {
  state = {
    task: '',
  };

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.task.trim()) {
      this.props.addTask(this.state.task);
      this.setState({ task: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="task-input">
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default connect(null, { addTask })(TaskInput);
