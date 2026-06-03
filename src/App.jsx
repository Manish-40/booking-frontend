import './App.css'
import Login from './components/Login'
import MoviesDescription from './components/MoviesDescription';
import SearchMovie from './components/searchMovies'
import Seats from "./components/Seats"
import {
  Routes,
  Route
} from "react-router-dom";
function App() {
  
  return (
    <>
    <Routes>
      <Route
      path='/'
      element={<Login/>}
      />
      <Route
      path='/movies'
      element={<SearchMovie/>}/>
    <Route
      path='/moviesDescription/:moviename'
      element={<MoviesDescription/>}/>
      <Route
      path='/seat'
      element={<Seats/>}/>
    </Routes>
    </>
  )
}

export default App
