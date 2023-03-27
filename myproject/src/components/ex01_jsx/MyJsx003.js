import './MyJsx003.css';

const MyJsx003 = () => {
  const numX = 3;
  const numY = 5;

  return (
    //jsx안에 javascript를 쓸때는 중괄호 안에 써야함
    <>
      <div>{`${numX} + ${numY} = ${numX + numY}`}</div>
      <div className='line'>Line Test</div>
    </>
  );
};

export default MyJsx003;
