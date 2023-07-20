const filterReducer = (state = '', action) => {
    switch (action.type) {
      case 'FILTER':
        const { filterText } = action.payload;
        return filterText;
  
      default:
        return state;
    }
  };
  

  export const filterAnecdotes = (filterText) => ({
    type: 'FILTER',
    payload: { filterText }
  });
  
  export default filterReducer;
  