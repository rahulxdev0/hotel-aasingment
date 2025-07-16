import React from 'react';
import HomePage from './public/Home/HomePage';
import DiningPage from './public/Dining/DiningPage';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'dining':
        return <DiningPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      {/* Simple navigation for demo */}
      <nav style={{ 
        position: 'fixed', 
        top: 10, 
        right: 10, 
        zIndex: 9999, 
        background: 'rgba(0,0,0,0.8)', 
        padding: '10px', 
        borderRadius: '5px' 
      }}>
        <button 
          onClick={() => setCurrentPage('home')}
          style={{ 
            margin: '5px', 
            padding: '5px 10px', 
            background: currentPage === 'home' ? '#d4af37' : '#666',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('dining')}
          style={{ 
            margin: '5px', 
            padding: '5px 10px', 
            background: currentPage === 'dining' ? '#d4af37' : '#666',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        >
          Dining
        </button>
      </nav>
      
      {renderPage()}
    </div>
  );
};

export default App;
