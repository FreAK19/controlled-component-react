
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_TEXT':
      return {
        ...state,
      };
    default: return state;
  }
};

export default reducer;
