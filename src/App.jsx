import './index.css';
import Form from './Form';
import Nav from './Nav';
import Homepage from './Homepage';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="Form" element={<Form/>} />
      </Routes>
    </div>
    </>
  )
}

export default App