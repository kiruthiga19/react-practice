import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentC from './ComponentC';

export const userContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <userContext.Provider value={'kiruthiga'}>
        <ChannelContext.Provider value={'zennzeal'}>
           <ComponentC></ComponentC>
        </ChannelContext.Provider>
       
      </userContext.Provider>
      
    </div>
  );
}

export default App;
