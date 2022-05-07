
import { createRoutesFromChildren } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import './crud.scss';


function App() {
  return (
    <div className="App">
      <div className='top'>
      <Form><button>push me</button></Form>
     
      </div>

    </div>
  );
}

export default App;
