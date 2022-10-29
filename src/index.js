import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyCalendar from './CalendarApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const content = ReactDOM.createRoot(document.getElementById('content'));
const calendarApp = ReactDOM.createRoot(document.getElementById('calendarApp'));

// ReactDOM.render is depreciated
// style class is classname=xxx

const testFunction =()=>{
  return(
    <React.Fragment>
      <button> 大家好 </button>
      <h1> 我不好 </h1>
    </React.Fragment>
  );
}

root.render(
  // make stuff here, one element only (means one set of <elem></elem> only)
  <div>    
    <MyCalendar name="Calendar" />
    <h1>Hi</h1>
    <a href={"https://google.com"} target="blank" >test</a>
    <App name="App" />
  </div>
);

/*
content.render(
  testFunction()
);

calendarApp.render(
  <div>
  </div>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
