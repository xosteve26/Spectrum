import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import SearchScreen from './Screens/SearchScreen';
import SongTitleScreen
 from './Screens/SongTitleScreen';
 import NavBar from './components/NavBar';
 import Footer from './components/Footer';
import UserDashboardScreen from './Screens/UserDashboardScreen';
import UserProfileScreen from './Screens/UserProfileScreen';
 
const App=()=> {
  return (
    <Router>
      <main>
        <NavBar />
        <Routes>
          <Route path='/' element={<Header/>}></Route>
          <Route path='/search/:id' element={<SearchScreen />}></Route>
          <Route path='/song/:id' element={<SongTitleScreen />}></Route>
          <Route path='/dashboard' element={<UserDashboardScreen />}></Route>
          <Route path='/profile' element={<UserProfileScreen />}></Route>
        </Routes>
        <Footer />
      </main>
    </Router>
    
  );
}

export default App;
