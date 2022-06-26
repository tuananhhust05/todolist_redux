import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux'  // khi user click vào thì cập nhật dữ liệu lên global state
import { toggleTodoStatus } from '../../redux/action';
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry, completed, id }) { //truyền dữ liệu ở ngoài component todoList 
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);// set check theo giá trị của completed 
  // Bấm vào thì tạo ra 1 action gửi đến reducer, reducer cập nhật lên global; UI todoList gọi dữ liệu xuống, 
  //thằng input component hiển thị dựa theo thông tin 
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };

  return (
    
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }} 
    > {/*config thuộc tính css dựa theo thằng checked*/}
    {/*Lắng nghe sự kiện*/}
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
