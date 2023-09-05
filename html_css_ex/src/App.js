import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <h1>나를 소개합니다.</h1>
        </header>
        <div className="page">
          <h3>안녕하세요. 저는 개발자 김유진입니다.</h3>
          <img src="myphoto.png" alt="MyPicture" width="300" height="300"/>
          <h3>이번 학기 나의 목표: 운동 꾸준히 하기</h3>
          <h3>좋아하는 것 3가지</h3>
          <ul className='no_dot'>
            <li>음악 듣기</li>
            <li>산책</li>
            <li>피아노</li>
          </ul>
        </div>
      </body>
    </div>
  );
}


export default App;
