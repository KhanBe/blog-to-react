# blog-to-react
learn react

#### 데이터 바인딩
- 데이터를 받아서 HTML에 값을 넣어주는 행위

### State
- ```import  {useState} from ‘react’;``` 추가
- ```let [글제목, 글제목변경] = useState('음식 추천’);``` 이런식으로 ustState문법을 써넣어준다.
- ```let [a, b] ```  a는 state 데이터, b는 state데이터 변경 함수가 된다.
- 모든 타입의 데이터가 들어간다.
- state에 데이터를 저장해 놓는 이유 : 웹이 app처럼 동작하게 만들기 위해서이다.
- restructuring 문법 > ```let [a, b] = [10, 100]``` 
- state는 새로고침을 하지 않아도 HTML에서 자동으로 재랜더링에 되어서 쓰임이 좋다.

#### 배열 형태의 state 변경
```
function 제목변경() {
    var tempArray = [...글제목];//deep copy
    글제목[0] = '카페 추천';
    글제목변경(tempArray);
  }
```
- deep copy를 이용해서 (reference data type특징 덕분에) 변경해줘야한다.

### 이벤트 리스너
- ```onClick = { 함수() }``` 형태 또는 ```onClick = { ()=>{ 실행할 내용 } }``` 형태이다.
