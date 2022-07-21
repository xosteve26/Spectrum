import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import SearchScreen from './components/SearchScreen';
import SongTitleScreen
 from './Screens/SongTitleScreen';
 import NavBar from './components/NavBar';
 
const App=()=> {
  return (
    <Router>
      <main className='py-3'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/search/:id' element={<SearchScreen />}></Route>
          <Route path='/song/:id' element={<SongTitleScreen />}></Route>
        </Routes>
      </main>
    </Router>
    
  );
}

export default App;
