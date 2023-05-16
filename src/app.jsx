import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './template/home';
import Website from './template/Website';
import Form from './template/Form';
import Trafego from './template/Tráfego';
import Marketing from './template/Marketing';
import Whatsapp from './template/Whatsapp';
import Thankss from './template/Thanks';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Trafego" element={<Trafego />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Website" element={<Website />} />
          <Route path="/Marketing" element={<Marketing />} />
          <Route path="/Whatsapp" element={<Whatsapp />} />
          <Route path="/Thankss" element={<Thankss />} />
        </Routes>
      </Router>
    </div>
  );
}
