
const initState = [   
  {
    id: 1,
    name: "Learn Yoga",
    completed: true,
    priority: 'Medium',
  },
  {
    id: 2,
    name: "Learn Redux",
    completed: false,
    priority: 'High',
  },
  {
    id: 3,
    name: "Learn Javascript",
    completed: false,
    priority: 'Medium',
  },
];


const todoListReducer = (state = initState, action) => {
  // console.log(state, action);
  switch(action.type) {
    case 'todoList/addTodo':
      return [ ...state, action.payload];   
    case 'todoList/toggleTodoStatus':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );   
    default:
      return state;
  }
}

export default todoListReducer;