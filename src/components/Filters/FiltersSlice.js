 // chia các state ra thành 2 state 
const initState = {
    search: '',
    status: 'All',
    prioriries: [],
  };
  
  const filtersReducer = (state = initState, action) => {
    
    switch (action.type) {
      case 'filters/searchFilterChange': // thay đổi dữ liệu tìm kiếm 
        
      return {
          ...state,
          search: action.payload,
        };
  
      case 'filters/statusFilterChange':
        return {
          ...state,
          status: action.payload
        }
  
      case 'filters/prioritiesFilterChange':
        return {
          ...state,
          prioriries: action.payload
        }
      default:
        return state;
    }
    
  };
  
  export default filtersReducer;