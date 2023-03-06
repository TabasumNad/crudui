import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Users from './Users';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route , Routes,Navigate} from "react-router-dom";
import NotFound from './NotFound';
import Create_users from './Create_user'
import EditUsers from './EditUser'
import Profile from'./Profile'
import ProfileEdit from './ProfileEdit';


function App(props) {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    <Routes>
   

          <Route  path="/" element={<Users /> } />
          <Route  path="/about" element={<About /> } />
          <Route  path="/contact" element={<Contact /> } />
          <Route path="/users/Create_user" element={<Create_users />}/>
          <Route path="/users/edit_user/:id" element={<EditUsers />}/>
          <Route path="/users/profile/:id" element={<Profile />}/>
          <Route path="/users/profile/edit" element={<ProfileEdit/>}/>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
   
    </Routes>
    </div>
    </Router>
  );
}

export default App;
