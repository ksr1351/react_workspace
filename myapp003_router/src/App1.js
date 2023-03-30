//v6
//npm install react-router-dom --save

import { Route, Routes } from 'react-router-dom';
import About from './componenets1/About';
import Dashboard from './componenets1/Dashboard';
import Home from './componenets1/Home';
import Layout from './componenets1/Layout';
import NoMatch from './componenets1/NoMatch';

const App = () => {
  /* route path 의 경로로 요청하면 element가 실행됨 */
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} /> */}
        /*상위에 있는 path와 path가 같다면 index로 주기*/
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
