import { useState } from 'react';

const MyuseState005 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-000-0000',
  });

  const handelChange = (e) => {
    //setCustomer({ ...customer, [e.target.id]: e.target.value });

    //e.target으로 부터 id, value를 추출한다.
    const { id, value } = e.target;
    setCustomer({
      ...customer, //기존의 customer 객체를 복사한 뒤
      [id]: value, //id키를 가진 값을 value로 설정
    });

    // setCustomer((prevState) => {
    //   return { ...prevState, [id]: value };
    // });
  };

  return (
    //value를 state와 연결시켜놓으면 input 창의 값을 변경할 수 없음
    //state의 값은 반드시 setter 함수를 통해서만 변경 가능하기 때문
    <div>
      <p>
        <span>이름</span>
        <input
          type='text'
          value={customer.name}
          id='name'
          onChange={handelChange}
        />
      </p>

      <p>
        <span>주소</span>
        <input
          type='text'
          value={customer.address}
          id='address'
          onChange={handelChange}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type='text'
          value={customer.phone}
          id='phone'
          onChange={handelChange}
        />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyuseState005;
