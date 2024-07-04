import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
});

export default store;
