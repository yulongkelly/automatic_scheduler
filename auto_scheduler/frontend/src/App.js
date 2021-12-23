import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/homepage'
import Signup from './containers/auth/signup'
import Layout from './hoc/layout';

function App() {
  return (
    <div className="App">
        <Router>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/signup' element={<Signup/>} />
            </Routes>
          </Layout>
        </Router>
    </div>
  );
}

export default App;
