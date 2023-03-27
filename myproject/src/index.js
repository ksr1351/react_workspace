import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//실제 배포할 때는   <React.StrictMode> <App /> </React.StrictMode> 빼고 배포함
//component : mvc의 view를 독립적으로 구성, 재상용할 수 있도록 하나의 작업을 독립적으로 구현해놓은 단위 (react에서는 한 페이지에서 작업이 이루어지는데 구역을 나누어서 작업하게 됨)
//property : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터 (a에서 c로 넘어가려면 a-b-c 순서로 전달되어야함)
//state :컴포넌트의 상태 저장, 변경 데이터
//context : 부모 컨텍스트에서 생성해서 자녀 컨텍스트로 전달 (a에서 c로 넘어가려면 b를 거치지 않고 바로 전달 가능)
