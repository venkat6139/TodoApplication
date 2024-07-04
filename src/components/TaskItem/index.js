import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../../redux/actions';
import './index.css';

class TaskItem extends Component {
  state = {
    isEditing: false,
    editedTask: this.props.task.text,
  };

  handleDelete = () => {
    this.props.deleteTask(this.props.task.id);
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };

  handleSave = () => {
    this.props.editTask(this.props.task.id, this.state.editedTask);
    this.setState({ isEditing: false });
  };

  handleChange = (e) => {
    this.setState({ editedTask: e.target.value });
  };

  handleToggle = () => {
    this.props.toggleTask(this.props.task.id);
  };

  render() {
    const { task } = this.props;
    return (
      <div className={`task-item ${task.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={this.handleToggle}
          className="task-checkbox"
        />
        <span className="task-text">
          {this.state.isEditing ? (
            <input
              type="text"
              value={this.state.editedTask}
              onChange={this.handleChange}
              className="edit-input"
            />
          ) : (
            task.text
          )}
        </span>
        <div className="task-actions">
          {this.state.isEditing ? (
            <i className="fas fa-save" onClick={this.handleSave}></i>
          ) : (
            <i className="far fa-edit" onClick={this.handleEdit}></i>
          )}
          <i className="far fa-trash-alt" onClick={this.handleDelete}></i>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteTask, editTask, toggleTask })(TaskItem);
