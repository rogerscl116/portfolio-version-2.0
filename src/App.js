import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import Header from './components/Header';


function App() {

  return (
    <div>
      <Nav />
      <Header>
       {/* <main>
        <About></About>     
      </main> */}
      </Header>
    </div>
  );
}

export default App;