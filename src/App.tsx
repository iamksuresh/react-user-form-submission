/**
 * Application root
 * Performance is improved by stopping, connecting to sockets api using Page Visibility API
 */
import React, { useEffect, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import AppRoutes from './components/routes/AppRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
