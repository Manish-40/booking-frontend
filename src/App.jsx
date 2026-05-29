import './App.css'
import Login from './components/Login'
import SearchMovie from './components/searchMovies'
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
    </Routes>
    </>
  )
}

export default App
