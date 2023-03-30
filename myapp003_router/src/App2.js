//v6
//npm install react-router-dom --save

import { Route, Routes } from 'react-router-dom';
import About from './componenets2/About';
import Dashboard from './componenets2/Dashboard';
import Home from './componenets2/Home';
import Layout from './componenets2/Layout';
import NoMatch from './componenets2/NoMatch';
import Product from './componenets2/Product';
import Detail from './componenets2/Detail';

const App = () => {
  /* route path 의 경로로 요청하면 element가 실행됨 */
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} /> */}

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='product' element={<Product />} />
          <Route path='product/:productId' element={<Detail />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
