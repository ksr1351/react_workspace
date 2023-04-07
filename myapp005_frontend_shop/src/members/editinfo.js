import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { baseUrl } from '../apiurl';

const EditInfo = () => {
  const [inputs, setInputs] = useState({
    memberPass: '',
    memberName: '',
    memberPhone: '',
  });

  const { memberPass, memberName, memberPhone } = inputs;

  const board = useSelector((state) => state.board.boardDetail);

  const handleValueChange = (e) => {
    e.preventDefault();
    let nextState = {};

    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };

  const config = { headers: { 'Content-Type': 'application/json' } };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${baseUrl}/editinfo`, inputs, config).then((response) => {
      let jwtToken = response.headers.get('Authorization');

      let jwtMemberEmail = response.data.memberEmail;

      localStorage.setItem('memberEmail', jwtMemberEmail);
    });
  };

  return (
    <div className='container'>
      <table className='container'>
        <h3>회원정보 수정</h3>
        <div className='form-group mb-1'>
          <input
            type='email'
            className='form-control'
            name='memberEmail'
            value={localStorage.getItem('memberEmail')} //기존 이메일 가져오기
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
          />
        </div>
      </table>

      <button className='btn btn-primary'>수정</button>
      <button className='btn btn-primary'>취소</button>
      <button className='btn btn-primary'>뒤로</button>
    </div>
  );
};
export default EditInfo;
