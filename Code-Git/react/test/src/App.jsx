import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');

  function reset() {
    setText('');
  }

  function change(e){
    setText(e.target.value);
  }

  return (
    <div className="sec">
      <div>입력하세요</div>
      <input type="text" onChange={change} value = {text} />
      <button onClick={reset}>초기화</button>
      <div>{text}</div>
    </div>
  );
}

export default App;