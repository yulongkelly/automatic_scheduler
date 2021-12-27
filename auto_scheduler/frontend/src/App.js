import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/homepage'
import Signup from './containers/auth/signup'
import Login from './containers/auth/login'
import Layout from './hoc/layout';

function App() {
  return (
    <div className="App">
        <Router>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/signup' element={<Signup/>} />
              <Route exact path='/login' element={<Login/>} />
            </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
