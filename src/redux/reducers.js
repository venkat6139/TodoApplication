import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks, { id: Date.now(), text: action.payload, completed: false }];
      saveToLocalStorage(newTasks);
      return {
        ...state,
        tasks: newTasks,
      };
    case DELETE_TASK:
      const remainingTasks = state.tasks.filter(task => task.id !== action.payload);
      saveToLocalStorage(remainingTasks);
      return {
        ...state,
        tasks: remainingTasks,
      };
    case EDIT_TASK:
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
      );
      saveToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };
    case TOGGLE_TASK:
      const toggledTasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      saveToLocalStorage(toggledTasks);
      return {
        ...state,
        tasks: toggledTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
