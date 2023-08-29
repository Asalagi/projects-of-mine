import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Register from './register';
import Success from './success';
import RegisteredHorses from './horses';
import HorseInfo from './horse-info-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/horses" element={<RegisteredHorses/>} />
        <Route path="/horses/:id" element={<HorseInfo/>} />
      </Routes>
    </Router>
  );
}

export default App;
