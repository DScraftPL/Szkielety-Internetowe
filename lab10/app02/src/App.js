import './App.css';
import Snapshot from './Snapshot';
import HookUseState from './HookUseState';
import { useState } from "react";

function App() {
  const [name, setName] = useState("zielony")
  const changeName = () => {
    setName("czerwony")
  }
  return (
    <div className="App">
      <h1>Migawka</h1>
      <Snapshot />
      <h1>Hook useState</h1>
      <HookUseState name={name} changeName={changeName} />
    </div>
  );
}

export default App;
