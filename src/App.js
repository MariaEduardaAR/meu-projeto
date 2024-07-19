import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const User = lazy(() => import('./pages/User'));


const App = () => {
  return ( 
    <Router>
      <Layout>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="/user/:id" Component={User}/>
            <Route Component={NotFound}/>
          </Routes>
        </Suspense>
      </Layout>
    </Router>
   );
}
 
export default App;