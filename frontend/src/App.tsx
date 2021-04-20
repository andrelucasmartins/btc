import React, { useContext, createContext, useState } from 'react'

import './App.css'
import 'fontsource-roboto'

import Pages from './components/Pages/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
