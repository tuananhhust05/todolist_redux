import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useDispatch,useSelector} from 'react-redux' // import dispatch để sử dụng 
import {addTodo} from '../../redux/action' // import addTodo => Create -action
import {v4 as uuidv4} from 'uuid' // thư viện để tạo id 
import{todosRemainingSelector} from '../../redux/selector' // lấy hàm lấy dữ liêu từ kho chung 
import {useState} from 'react'  // import useState phải để trong các ngoặc

export default function TodoList() {

  // state của thằng tên công việc
  const [todoName,setTodoName]=useState('');
  //state của mức độ quan trọng priority 
  const[prioriry,setPrioriry]=useState('Medium')
  
  //lấy ra dữ liệu todolist  từ state chung sau khi được lọc bởi các dữ liệu search 
  const todoList =useSelector(todosRemainingSelector);
  

  // cài đặt phím up dữ liệu 
  // click vào bắn ra 1 action; thông tin  action có thể tùy biến dựa vào nội dung đầu vào , hàm được viết sẵn 
  const dispatch = useDispatch();// lôi thằng dispatch ra 
  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        prioriry: prioriry,
        completed: false,
      })
    );
    setTodoName('');
    setPrioriry('Medium');  // set dữ liệu về mặc định
  };
  
  // cập nhật state dựa vào thẻ input 
  const handleInputChange =(e)=>{
    setTodoName(e.target.value) // e là đối tượng xảy ra sự kiện thay đổi 
  }

  // câp nhật priority 
  const handlePriorityChange=(value)=>{
    setPrioriry(value);
  }
  
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
         {/*Cách truyền prop, bên todoComponent nhận ra các thông tin truyền vào thông qua tên prop*/}
        {todoList.map(todo=> 
           
            <Todo 
               key={todo.id} 
               id={todo.id}
               name={todo.name} 
               prioriry={todo.prioriry} 
               completed={todo.completed}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact> {/*Thẻ input để chọn việc cần làm hiện tại*/}
          <Input value={todoName} onChange={handleInputChange}/>       {/*Thẻ input để nhập dữ liệu*/}
        
          <Select defaultValue="Medium" value={prioriry} onChange={handlePriorityChange}>  {/*Thẻ select để lựa chọn độ quan trọng thẻ này để mặc định default */}
            <Select.Option value='High' label='High'>{/*Các sự lựa chon*/}
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleAddButtonClick}type='primary'>  {/*Cài dispatch ở đây viết 1 eventHandle*/}
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
