import React from 'react'; //지금 버전에서는 별도로 지정해줄 필요없음

/*
  리액트 17이전 버전에서는 JSX 구문이 있는 파일은 반드시 import React from 'react'문을 사용해야 한다.
  그러나 17이후 버전부터는 JSX 구문이 있어도 import React from 'react'문 생략 가능하다.
*/

//function MyJsx001(){

//} : arrow 함수로 표현하게 되면 아래와 같이 표현 가능
//const : 변수의 값을 변경 못하게 함

const MyJsx001 = () => {
  return (
    <div>
      <div>Hello</div>
      <div>React</div>
    </div>
  );
};

export default MyJsx001; //외부에 참조하려면 꼭 export 하기
