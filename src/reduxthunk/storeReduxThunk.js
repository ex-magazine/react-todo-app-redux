import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSliceReduxThunk';
import todosSlice from '../components/TodoList/todosSliceReduxThunk';

const storeReduxThunk = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer,
  },
});

export default storeReduxThunk;