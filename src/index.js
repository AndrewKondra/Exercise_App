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
      <p className='backg' style={{ height: '100vh' }}>
        <App />
        {/* style={{ 
         backgroundImage: `url(${background})`,
         backgroundPosition: "center",
         backgroundSize: "cover",
         // backgroundSize: "contain",
         resizeMode: 'repeat',
         // resizeMode: 'stretch',
         // backgroundRepeat: "repeat-y",
         width: "100vw",
         height: "100vh",
        }}> */}
      </p>
    </div>
  </React.StrictMode>
);


