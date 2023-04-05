import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function HelloComponent() {
return <p className="paragraph">Hello Component! this is me Ali!</p>;
}
ReactDOM.render(
  <>

  <HelloComponent />
  <React.StrictMode>
  <App />
  </React.StrictMode>
  </>,
  
  document.getElementById("root"));
  reportWebVitals();