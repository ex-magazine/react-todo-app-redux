import {createSelector} from 'reselect';


export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector, 
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
        
      /*if (status === 'All') {
        return todo.name.includes(searchText);
      }
      return todo.name.includes(searchText) && 
        (status === "Completed"
          ? todo.completed : !todo.completed
        ) */
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