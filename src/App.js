import React from 'react';

import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

// import router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
