import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
// import background from "./activities2.png";
// import UserInput from './UserInput';
// import ActTable from './actTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1 className='backg' style={{ height: '100vh' }}>
        <App />
      </h1>
    </div>
  </React.StrictMode>
);


