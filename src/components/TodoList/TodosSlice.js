const initState = [
    { id: 1, name: 'Learn Yoga', completed: false, prioriry: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: true, prioriry: 'High' },
    { id: 3, name: 'Learn JavaScript', completed: false, prioriry: 'Low' },
  ];
  
  const todoListReducer = (state = initState, action) => {
    switch (action.type) {
      case 'todoList/addTodo':
        return [...state, action.payload];
      
      // xử lý action cập nhật trạng thái completed 
      case 'todoList/toggleTodoStatus':
        return state.map((todo) =>  // state map ra các đối tượng todo 
          todo.id === action.payload  // todo nào bằng action.payload ( dữ liệu id truyền vào)
            ? { ...todo, completed: !todo.completed }  // thì copy lại giá trị của thằng todo đó và chỉnh sửa giá trị trường completed 
            : todo // nếu không thì trả lại todo 
        );
      default:
        return state;
    }
  };
  
  export default todoListReducer;