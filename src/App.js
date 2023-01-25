import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Otp from "./Components/OTP/Otp";
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/Signup/SignUp";
import Update from "./Components/UpdateProfile/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update" element={<Update />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
