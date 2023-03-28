import { useState } from 'react';

const MyuseState003 = () => {
  const [names, setNames] = useState(['고수', '여진구', '송중기']); //배열값
  const [input, setInput] = useState('');

  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    //console.log(document.getElementById('fname').value);
    //setNames([document.getElementById('fname').value, ...names]);
    //useState값이 dict면 setNames 값도 dict / 배열값이어야함
    //document.getElementById('fname').value = ''; //값 초기화 시키기

    setNames([...names, input]); //이 순서대로 하면 기존 배열 값이 변하지 않음
    setInput(''); //초기화
  };

  return (
    //value={input} 은 input 창을 초기화시켜줌
    <div>
      <input type='text' id='fname' onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {/* {names.map((value, index) => { //이 구문을 반복해서 {value}를 return , 반복문을 map을 이용해서 돌려줌
        return <p key={index}>{value}</p>; //고유값을 위해 key값을 넣어줌
        //하나의 값을 리턴해줄 경우 중괄호를 생략할 수 있다.
      })} */}

      {names.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

export default MyuseState003;
