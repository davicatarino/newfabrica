import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './template/home';
import Website from './template/Website';
import Form from './template/Form';
import Trafego from './template/Tráfego';
import Marketing from './template/Marketing';
import Whatsapp from './template/Whatsapp';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/teste" element={<Home />} />
          <Route path="/teste/Trafego" element={<Trafego />} />
          <Route path="/teste/Form" element={<Form />} />
          <Route path="/teste/Website" element={<Website />} />
          <Route path="/teste/Marketing" element={<Marketing />} />
          <Route path="/teste/Whatsapp" element={<Whatsapp />} />
        </Routes>
      </Router>
    </div>
  );
}
