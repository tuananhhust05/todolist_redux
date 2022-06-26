// function create action 
export const addTodo = (data) => {
    return {
      type: 'todoList/addTodo',
      payload: data,
    };
  };

  // craetor action; linh hoạt tạo ra dữ liệu dựa vào sự thay đổi của id 
  //action để chỉnh sửa global state về todo.completed 
  export const toggleTodoStatus = (todoId) => {  
    return {
      type: 'todoList/toggleTodoStatus',
      payload: todoId,
    };
  };
  
  export const searchFilterChange = (text) => {
    return {
      type: 'filters/searchFilterChange',
      payload: text,
    };
  };
  
  export const statusFilterChange = (status) => {
    return {
      type: 'filters/statusFilterChange',
      payload: status,
    };
  };
  
  export const priorityFilterChange = (prioriries) => {
    return {
      type: 'filters/prioritiesFilterChange',
      payload: prioriries,
    };
  };