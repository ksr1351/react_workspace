import { useState } from 'react';

const MyuseState004 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-000-0000',
  });

  const handelName = (e) => {
    console.log(e.target.value);
    //setCustomer({ ...customer, name: e.target.value }); //state에 저장된 값이 비동기화식/ 비동기화로 처리됨
    console.log(customer.address);

    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handelAddress = (e) => {
    //setCustomer({ ...customer, address: e.target.value });

    //customer의 state 값을 그대로 받아오란 뜻(prevState변수에는 아무글자나 들어가도 됨)
    setCustomer((prevState) => {
      return { ...prevState, addreess: e.target.value };
    });
  };

  const handlePhone = (e) => {
    //setCustomer({ ...customer, phone: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };

  return (
    //value를 state와 연결시켜놓으면 input 창의 값을 변경할 수 없음
    //state의 값은 반드시 setter 함수를 통해서만 변경 가능하기 때문
    <div>
      <p>
        <span>이름</span>
        <input type='text' value={customer.name} onChange={handelName} />
      </p>

      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handelAddress} />
      </p>

      <p>
        <span>전화번호</span>
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyuseState004;
