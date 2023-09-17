import logo from './logo.svg';
import './App.css';
import VideoList from './component/VideoList ';
import Navbar from './component/Navbar';
import WrapComp from './component/WrapComp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UploadPage from './Pages/UploadPage';
import TrandingPage from './Pages/TrandingPage';
import FavPage from './Pages/FavPage';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      {/* <VideoList/> */}

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<WrapComp />} />
          <Route path="/Treanding" element={<TrandingPage/>} />
          <Route path="/fav" element={<FavPage/>} />
          <Route path="/Upload" element={<UploadPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
