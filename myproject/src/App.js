import logo from './logo.svg';
import './App.css';
import MyJsx001 from './components/ex01_jsx/MyJsx001';
import MyJsx002 from './components/ex01_jsx/MyJsx002';
///////컴포넌트명                            파일명
import MyJsx003 from './components/ex01_jsx/MyJsx003';
import MyJsx004 from './components/ex01_jsx/MyJsx004';
import MyJsx005 from './components/ex01_jsx/MyJsx005';
import MyBasic001 from './components/ex02_useState/MyBasic001';
import MyuseState002 from './components/ex02_useState/MyuseState002';
import MyuseState003 from './components/ex02_useState/MyuseState003';
import MyuseState004 from './components/ex02_useState/MyuseState004';
import MyuseState005 from './components/ex02_useState/MyuseState005';
import MyuseState006 from './components/ex02_useState/MyuseState006';
import MyuseState007 from './components/ex02_useState/MyuseState007';
import MyuseRef001 from './components/ex03_useRef/MyuseRef001';
import MyuseRef002 from './components/ex03_useRef/MyuseRef002';
import MyuseEffect001 from './components/ex04_useEffect/MyuseEffect001';

function App() {
  return (
    <div className='App'>
      {/* <MyJsx001 /> */}
      {/* <MyJsx002 /> */}
      {/* <MyJsx003 /> */}
      {/* <MyJsx004 /> */}
      {/* <MyJsx005 /> */}
      {/* <MyBasic001 /> */}
      {/* <MyuseState002 /> */}
      {/* <MyuseState003 /> */}
      {/* <MyuseState004 /> */}
      {/* <MyuseState005 /> */}
      {/* <MyuseState006 /> */}
      {/* <MyuseState007 /> */}
      {/* <MyuseRef001 /> */}
      {/* <MyuseRef002 /> */}
      <MyuseEffect001 />
    </div>
  );
}

export default App;

//App.js 는 html처럼 보이지만 jsx이다.
//function App()에서 App()은 클래스처럼 쓴다.
//반드시 카멜표기법 이용해야한다. (className)
//App.js에서 한 작업을 html에서 해도 적용되지 않음
//바벨 -> 버전 관리 자동 적용
//단순히 하나의 작업으로 관리할 경우 <> </> 로 적용 가능 == <Fragment></Fragment>
//jsx에서는 if,for문 사용 불가
//return 이후에는 jsx를 사용하기 때문에 if, for문 사용불가 (jsx문법 사용해야됨)
//return 이전에는 jsp 사용가능
