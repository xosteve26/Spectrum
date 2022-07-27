import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import SearchScreen from './Screens/SearchScreen';
import SongTitleScreen
 from './Screens/SongTitleScreen';
 import NavBar from './components/NavBar';
 import Footer from './components/Footer';
 
const App=()=> {
  return (
    <Router>
      <main>
        <NavBar />
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/search/:id' element={<SearchScreen />}></Route>
          <Route path='/song/:id' element={<SongTitleScreen />}></Route>
        </Routes>
        <Footer />
      </main>
    </Router>
    
  );
}

export default App;
