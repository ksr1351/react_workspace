const MyBasic001 = () => {
  let cnt = 0; //변수를 javascript로 쓸거면 꼭 중괄호 안애 넣어주기

  const handleClick = () => {
    cnt = cnt + 1;
    console.log('cnt:${cnt}');
  };

  return (
    <div>
      <p>
        <span>{cnt}</span>
        <button onClick={handleClick}>CNT UPDATE</button>
      </p>
    </div>
  );
};

export default MyBasic001;
