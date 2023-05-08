/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['음식 추천', '강남 전집', '서초 족발집']);
  let [따봉, 따봉변경] = useState(0);

  function 제목변경() {
    var tempArray = [...글제목];//deep copy
    tempArray[0] = tempArray[0] === '음식 추천' ? '카페 추천' : '음식 추천';
    글제목변경(tempArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ fontSize: '30px' }}>Blog</div>
      </div>
      <button onClick = { 제목변경 }>버튼</button>
      <div className="list">
        <h3> {글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h3>
        <p>date 12</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h3>
        <p>date 12</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h3>
        <p>date 12</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
