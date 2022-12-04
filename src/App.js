import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Dashboard/home';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {
      <Route path="/listaEditadarpoke" element={<listaEditadapoke />} />
      /* <Route path="/listFilms" element={<FilsList />} />
      <Route path="/listFilms/:id" element={<ViewList />} /> */}
    </Routes>
  );
}

export default App;
