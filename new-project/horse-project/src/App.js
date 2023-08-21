import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Register from './register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
