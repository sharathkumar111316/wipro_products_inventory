import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import SignIn from './data/SignIn';
import SignUp from './data/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route exact path="/home" Component={Home} />
          <Route exact path="/signin" Component={SignIn} />
          <Route exact path="/signup" Component={SignUp} />
        </Routes>
      </Router>
      <Footer></Footer>


    </>
  );
}

export default App;
