import './App.css';
import Graph from './Graph';
import InputDate from './InputDate';
import { useState } from 'react';

function App() {
  let [formData, setFormData] = useState({
    initialDate: "",
    finalDate: "",
    currency: ""
  })


  return (

    <div>
      <InputDate setFormData={setFormData} formData={formData} />
      <Graph formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
