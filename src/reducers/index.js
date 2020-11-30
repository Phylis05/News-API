const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SOURCES":
      return {
        ...state,
        sources: [],
        isLoading: true,
      };
    case "GET_SOURCES_SUCCESS":
      return {
        ...state,
        sources: action.list,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
