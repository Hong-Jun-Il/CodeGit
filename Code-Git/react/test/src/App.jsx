import "./App.css"
import React, { useRef, useState } from 'react';
import UserList from "./components/UserList";
import Input from "./components/Input";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "홍준일",
      email: '네이버'
    },
    {
      id: 2,
      username: "홍앙순",
      email: '구글'
    },
    {
      id: 3,
      username: "홍깡순",
      email: '카카오'
    },
  ])

  const nextId = useRef(4);

  const [input, setInput] = useState({
    id: nextId.current,
    username: '',
    email: ''
  })

  function inputChanges(e){
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  function createUserInfo(){
    setUsers([
      ...users,
      input
    ])

    setInput({
      username: '',
      email: '',
    })
    nextId.current++;
  }

  return (
    <div className="test">
      <Input create = {createUserInfo} inputChanges = {inputChanges} input = {input} />
      {users.map(user => {
        return <UserList key={user.id} userInfo={user} />
      })}
    </div>
  );
};

export default App;