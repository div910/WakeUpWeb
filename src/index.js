// import React from 'react';
import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Options from './Options';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

// export default Navbar;

function Options() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="options">
      <button onClick={toggleMenu}>Options</button>
      {isOpen && (
        <ul>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      )}
    </div>
  );
}

// export default Options;

function App() {
  return (
    <div className="app">
      <Navbar />
      <Options />
      {/* add other components here */}
    </div>
  );
}

export default App;



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


