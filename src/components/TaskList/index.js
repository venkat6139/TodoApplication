import React from 'react';
import { connect } from 'react-redux';
import TaskItem from '../TaskItem';
import './index.css'

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2 className="heading">Tasks</h2>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskList);
