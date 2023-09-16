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
        </Routes>
      </Router>

    </>
  );
}

export default App;
