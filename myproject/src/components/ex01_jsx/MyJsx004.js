const MyJsx004 = () => {
  const name = 'react';
  return (
    //if문 대신에 조건 연산자 쓰기
    <div>
      {name === 'react' ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
    </div>
  );
};

export default MyJsx004;
