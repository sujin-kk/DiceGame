import Board from './Board';
import Button from './Button';
import { useState } from 'react';
import logo from './assets/logo.png';
import './App.css';

function App() {

  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  function random(n) {
    return Math.ceil(Math.random() * n);
  }
  
  const hnadleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);

    setMyHistory([...myHistory, nextMyNum]); // 배열 : 참조형 type, 새로운 배열을 만들어서 변경해야 함
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button className="App-button" color="blue" onClick={hnadleRollClick}>던지기</Button>
          <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
        </div>
        
      <div className="App-boards">

        <div className="App-board">
          <Board name="나" color="blue" gameHistory={myHistory} />
        </div>

        <div className="App-board">
          <Board name="상대" color="red" gameHistory={otherHistory}/>
        </div>

      </div>
     </div>
    </div>
  );
}

export default App;