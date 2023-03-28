const MyJsx005 = () => {
  let name = 'REACT'; //변수가 선언되어있지 않으면 오류남
  return (
    <div>
      <p>{name === 'react' ? 'REACT' : null}</p>
      {/* 출력결과 <p></p>*/}
    </div>
  );
};

export default MyJsx005;
