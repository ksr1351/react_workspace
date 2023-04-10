import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../apiurl';
//import { useNavigate } from 'react-router-dom';

const EditInfo = () => {
  //const navigator = useNavigate(); //navigator => 클라이언트의 page만 이동됨

  const [members, setMembers] = useState({
    memberEmail: '',
    memberPass: '',
    memberName: '',
    memberPhone: '',
  });

  const { memberEmail, memberPass, memberName, memberPhone } = members;

  //회원정보 인증값 받아오기
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('Authorization'),
    },
  };

  //get방식으로 가져오기와서 넘겨주기
  const info = async () => {
    return await axios
      .get(`${baseUrl}/member/editinfo/${localStorage.memberEmail}`, config)
      .then((response) => setMembers({ ...response.data, memberPass: '' })); //...response.data, memberPass: '' : 수정 시 기존의 난수값 비밀번호 보이지 않게(난수값이 들어가긴 함)
  };

  //info를 실행해서 db에서 데이터 가져와서 useEffect에 넣어주기
  useEffect(() => {
    console.log(info());
    info(); //결과값 받기
  }, []);

  //비밀번호 재확인
  const [passwordCheck, setPasswordCheck] = useState('');

  const passChange = (e) => {
    e.preventDefault();
    if (memberPass !== e.target.value) setPasswordCheck('비밀번호 불일치');
    else setPasswordCheck('비밀번호 일치');
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    setMembers({ ...members, [e.target.name]: e.target.value }); //중괄호가 없으면 배열로 인식하게 됨 / data가 객체이기 때문에 중괄호를 넣어줘야함
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!memberPass) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    await axios.post(`${baseUrl}/member/update`, members, config);
    localStorage.setItem('memberName', memberName); //로컬스토리지에 memberName 넣어주기(회원정보수정 내 이름 변경시 LOGOUT 옆에 이름 바뀌게)
    //navigator('/');  //navigator => 클라이언트의 page만 이동됨(수정버튼 눌렀을 때 바로 바뀌지 않고 refresh했을 때 바뀜)
    window.location.replace('/'); //변경된 값을 바로 가져올 때 사용함
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <div className='container'>
          <h1>회원정보 수정</h1>
          <div className='form-group mb-1'>
            <input
              type='email'
              className='form-control'
              name='memberEmail'
              placeholder='이메일'
              value={localStorage.memberEmail} //기존의 이메일 보여주기
              readOnly
            />
          </div>
          <div className='form-group mb-1'>
            <input
              type='password'
              className='form-control'
              name='memberPass'
              placeholder='비밀번호'
              value={memberPass}
              onChange={handleValueChange}
            />
          </div>

          <div className='form-group mb-1'>
            <input
              type='password'
              className='form-control'
              name='memberPass2'
              placeholder='비밀번호 확인'
              onChange={passChange}
            />
            <span>{passwordCheck}</span>
          </div>

          <div className='form-group mb-1'>
            <input
              type='text'
              className='form-control'
              name='memberName'
              placeholder='이름'
              value={memberName}
              onChange={handleValueChange}
            />
          </div>

          <div className='form-group mb-1'>
            <input
              type='text'
              className='form-control'
              name='memberPhone'
              placeholder='연락처'
              value={memberPhone}
              onChange={handleValueChange}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            회원정보 수정
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditInfo;
