

const initialState = {
  todos: [
    {
      value: "Walk the iguana",
      completed: false
    },
    {
      value: "Feed the bearded dragon",
      completed: false
    }
  ]
};

function reducer(state = initialState, action) {
  switch(action.type) {
    default:
    return state;
  }
}

export default reducer;