
const initState = [   
  {
    id: 1,
    name: "Learn Yoga",
    completed: false,
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
    default:
      return state;
  }
}

export default todoListReducer;