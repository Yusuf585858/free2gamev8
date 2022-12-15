import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AllGames from './pages/AllGames/AllGames';
import DetailView from './pages/DetailView/DetailView';
import RecentlyAdded from './pages/RecentlyAdded/RecentlyAdded';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  let myEm = [
    "🕹",
    "👾🕹👾",
    "👾👾🌝",
    "👾🔍👾👾",
    "👾👾🔎👾👾",
    "🙀",
    "🥵", 
    "S-E-N-D___N-U-D-E-S//👻namlid.089", 
    "🫢", 
    "👀", 
    "🤖"
  ];
let urlAnimate = ()=>{
  window.location.hash=
  myEm[Math.floor((Date.now()/ 800) % myEm.length)];
  setTimeout(urlAnimate, 70)
}
urlAnimate()


  
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<> <Navbar /> <SideMenu /> <Home /> </>} />
          <Route path="/detailview/:id" element={<> <Navbar /> <SideMenu /> <DetailView /> </>} />
          <Route path="/allgames" element={<> <Navbar /> <SideMenu /> <AllGames /> </>} />
          <Route path="recentlyadded/detailview/:id" element={<> <Navbar /> <SideMenu /> <DetailView /> </>} />
          <Route path="/recentlyadded" element={<> <Navbar /> <SideMenu /> <RecentlyAdded /> </>} />
          <Route path="/allgames/detailview/:id" element={<> <Navbar /> <SideMenu /> <DetailView /> </>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
