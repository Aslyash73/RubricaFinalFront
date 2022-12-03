import { Route, Routes } from 'react-router';
import './App.css';
import {Home} from "./pages"
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      
      <Route path="/searchMovies" element={<SearchMovies />} />
      <Route path="/listFilms" element={<FilsList />} />
      <Route path="/listFilms/:id" element={<ViewList />} /> */}
    </Routes>
  );
}

export default App;
