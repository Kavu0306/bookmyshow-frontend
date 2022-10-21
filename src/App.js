import "./App.css";
import { Router, Route, Routes } from "react-router";
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import AdminRegister from "./Components/AdminRegister";
import UserRegister from "./Components/UserRegister";
import Dashboard from "./Components/Dashboard";
import Movies from "./Components/Movies";
import { useNavigate, Link } from "react-router-dom";
import { MovieDetails } from "./Components/MovieDetails";
import ResponsiveAppBar from "./Components/AppBar";
import Booking from "./Components/Booking";
import AdminThings from "./Components/AdminThings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Components/usercontext";
import AddMovies from "./Components/AddMovies";
import { useState } from "react";
function App() {
  const navigate = useNavigate();
  // const [user, Setuser] = useState([]);
  // Setuser();
  return (
    <div className="app">
      <ResponsiveAppBar />
      <UserProvider>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          {/* <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <UserLogin />}
          /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/addmovies" element={<AddMovies />} />

          <Route path="/movies/:movieid" element={<MovieDetails />} />
          <Route path="/booking/:movieid" element={<Booking />} />

          <Route path="/userregister" element={<UserRegister />} />
          <Route path="/adminregister" element={<AdminRegister />} />

          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/onlyadmin" element={<AdminThings />} />
        </Routes>
      </UserProvider>

      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
