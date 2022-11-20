import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSliceReduxToolkit';
import todosSlice from '../components/TodoList/todosSliceReduxToolkit';

const storeReduxToolkit = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default storeReduxToolkit;