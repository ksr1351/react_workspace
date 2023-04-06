import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../apiurl';

const JoinAdd = () => {
  const navigator = useNavigate(); //페이지 이동

  //useState : 컴포넌트에서 상태 관리
  const [members, setmembers] = useState({
    memberEmail: '',
    memberPass: '',
    memberName: '',
    memberPhone: '',
  });

  const config = { headers: { 'Content-Type': 'application/json' } };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${baseUrl}/member/signup`, members, config)
      .then((response) => {
        setmembers({
          memberEmail: '',
          memberPass: '',
          memberName: '',
          memberPhone: '',
        });
      })
      .then((response) => {
        navigator('/');
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  //입력폼에서 발생하는 이벤트 처리 함수(입력 폼값이 변경될 때마다 이 함수 실행해서 상태 업데이트)
  const handleValueChange = (e) => {
    //radio 버튼에서는 e.preventDefault()를 하면 더블클릭을 해줘야 한다.
    //e.preventDefault();
    setmembers({ ...members, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='container'>
          <h1>회원가입</h1>
          <div className='form-group mb-1'>
            <input
              type='email'
              className='form-control'
              name='memberEmail'
              placeholder='이메일'
              onChange={handleValueChange}
            />
          </div>
          <div className='form-group mb-1'>
            <input
              type='password'
              className='form-control'
              name='memberPass'
              placeholder='비밀번호'
              onChange={handleValueChange}
            />
          </div>
          <div className='form-group mb-1'>
            <input
              type='text'
              className='form-control'
              name='memberName'
              placeholder='이름'
              onChange={handleValueChange}
            />
          </div>

          <div className='form-group mb-1'>
            <input
              type='text'
              className='form-control'
              name='memberPhone'
              placeholder='연락처'
              onChange={handleValueChange}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            가입 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinAdd;
