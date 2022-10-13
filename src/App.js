import './App.css';
import { Routes, Route } from "react-router-dom";
import CommandList from './pages/CommandList';
import MatchList from './pages/MatchList';
import MatchDetails from './pages/MatchDetails'

function App() {
  return (
   <Routes>
    <Route path="/" element={<CommandList />} />
    <Route path="/matchlist" element={<MatchList />} />
    <Route path="/matchdetails" element={<MatchDetails />} />
   </Routes>
  );
}

export default App;
