import {createSelector} from 'reselect';


export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector, 
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => {    
      return todo.name.includes(searchText);
    });
  }
);

/*
export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => {
  console.log(state.todoList);
  const result = Array.isArray(state.todoList.todoList);
  console.log("state.todoList" + result);
  const searchText = searchTextSelector(state);

  const todosRemaining = state.todoList.find(
    (todo) => {
      return todo.name.includes(state.filters.search);
    }
  );
  return todosRemaining;
}

*/