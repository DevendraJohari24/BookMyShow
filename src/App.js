import React from 'react';
import DefaultHOC from './HOC/Default.HOC';
function HomePage (){
  return (
    <h1>This is Home Page</h1>
  );
}

function ContactPage (){
  return (
    <h1>This is Contact Page</h1>
  );
}

function App() {
  return (
    <>
      <DefaultHOC path='/' exact component={HomePage}></DefaultHOC>
      <DefaultHOC path='/contact' exact component={ContactPage}></DefaultHOC>

    </>
  );
}

export default App;
//switch used to wrap up Route

// Basically Switch used to Advance Routing