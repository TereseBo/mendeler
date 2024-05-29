import './App.scss';
import Start from './pages/Start';
import Game from './pages/Game';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
     <header>
       <Link to="/">Start</Link>
       <Link to="/game">Game</Link>
     </header>
     <Routes>
       <Route path="/" element={<Start />} />
       <Route path="/game" element={ <Game />} />
       <Route path="/mendeler" element={<Start />} />
     </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
