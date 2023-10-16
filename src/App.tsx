import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Favorites from './components/Favorites';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/favorites" element={ <Favorites /> } />
      </Route>
    </Routes>
  );
}

export default App;
