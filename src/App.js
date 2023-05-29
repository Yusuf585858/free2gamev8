import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AllGames from './pages/AllGames/AllGames';
import DetailView from './pages/DetailView/DetailView';
import RecentlyAdded from './pages/RecentlyAdded/RecentlyAdded';
import SideMenu from './components/SideMenu/SideMenu';
/* import Signin from './pages/Signin'; */
import { AuthContextProvider } from './context/AuthContext';
/* import Accountpage from './pages/account';
import Protected from './components/Protected'; */
function App() {


  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<> <Navbar /> <SideMenu /> <Home /> </>} />
            <Route path="/detailview/:id" element={<> <Navbar /> <SideMenu /> <DetailView /> </>} />
            <Route path="/allgames" element={<> <Navbar /> <SideMenu /> <AllGames /> </>} />
            <Route path="recentlyadded/detailview/:id" element={<> <Navbar /> <SideMenu /> <DetailView /> </>} />
            <Route path="/recentlyadded" element={<> <Navbar /> <SideMenu /> <RecentlyAdded /> </>} />
            <Route path="/allgames/detailview/:id" element={<> <Navbar /> <SideMenu /> <DetailView /> </>} />
            {/*  <Route path="/signin" element={<Signin />} /> */}
            {/* <Route path="/account" element={
              <Protected>
                <Accountpage />
              </Protected>} /> */}
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
};

export default App;
