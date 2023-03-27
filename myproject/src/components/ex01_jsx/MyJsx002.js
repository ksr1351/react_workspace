import { Fragment } from 'react'; //Fragment 쓸때는 꼭 import

const MyJsx002 = () => {
  return (
    //여러문장을 작성할 때는 반드시 소괄호 안에 작성
    //<Fragment>
    //단순히 하나로 묶기 위해서는 <> 를 쓰기(F12에서는 안보임)
    <>
      <p>start</p>
      <span>!!!</span>
    </>
    //</Fragment>
  );
};

export default MyJsx002;
