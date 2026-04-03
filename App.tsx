import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButtons';

const Home = lazy(() => import('./pages/Home'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;