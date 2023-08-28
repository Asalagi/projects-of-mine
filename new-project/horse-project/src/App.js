import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Register from './register';
import Success from './success';
import RegisteredHorses from './horses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/horses" element={<RegisteredHorses/>} />
      </Routes>
    </Router>
  );
}

export default App;
