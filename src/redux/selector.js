import {createSelector} from 'reselect'
// selector để lấy dữ liệu từ state chung 

export const todoListSelector =(state) => state.todoList 
// thì truyênd tham số này vào 
//state ở đây là state chung 

// lấy thông tin từ filter.
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.prioriries;


// tạo ra 1 selector để tìm kiếm dữ liệu trong thằng todoListSelector dựa vào các điều kiện lấy từ global state 
export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList, status, searchText, prioriries) => {  // sắp xếp tuần tự theo  thứ tự các selector
      return todoList.filter((todo) => {
        if (status === 'All') {   // nếu là all thì đối tượng todo không cần phải có điều kiện của status 
          
          return prioriries.length  // nếu prioriries ===1 ( đây là giá logic chỉ cần độ dài khác 0 là được) 
            ? todo.name.includes(searchText) && prioriries.includes(todo.prioriry) // todo.name cần chứa thằng searchtext còn thằng prioriry 
                                                                                   //cần chứa thằng todo.prioriry thuộc mảng prioriries
            : todo.name.includes(searchText);
        }
  
        return (
          todo.name.includes(searchText) &&  // name bao gôm searchText và 
          //<= Đây chính là phần xử lý logic để tìm ra điều kiện cho thằng todo ( todo.completed) thằng todo này phải có giá trị todo.completed bằng true hoặc false 
          (status === 'Completed' ? todo.completed : !todo.completed) &&  // (và status bằng completed thì todo.completdted == true còn nếu không thì bằng false)
          (prioriries.length ? prioriries.includes(todo.prioriry) : true)
        );
      });
    }
  );