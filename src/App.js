import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Profile from './pages/profile.js';
import Listings from './pages/listings';
import Shop from './pages/shop.js';
import Messages from './pages/messages';
import Login from './pages/login';
import Auth from "./components/Login/Login"

function App() {
return (
	<Router>
	  <Navbar />
	  <Footer />
	  <Routes>
		  <Route path='/index' exact element={<Home />} />
		  <Route path='/profile' element={<Profile />} />
		  <Route path='/messages' element={<Messages />} />
		  <Route path='/shop' element={<Shop />} />
		  <Route path='/listings' element={<Listings />} />
		  <Route path='/login' element={<Auth />} />
	  </Routes>
	</Router>
);
}

export default App;

