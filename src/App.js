import Header from './components/Header';
import Header2 from './components/Header2';
import FeatureBoxCollection from './components/FeatureBoxCollection';
import './components/Dashboard.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [selection, setSelection] = useState(0);
  return (
    <div id="page-container">
      <Header handleSelection={setSelection}/>
      <FeatureBoxCollection index={selection}/>
    </div>
  );
}

export default App;
