import React, { useState } from 'react';
import './App.css';

function App() {
  let posts = '전규안 맛집 리스트'
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ fontSize: '30px' }}>Blog</div>
      </div>
      <div className="list">
        <h3> {posts} </h3>
        <p>date 12</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
