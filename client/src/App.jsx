import { Routes, Route } from "react-router-dom"
import Jurnal from "./pages/Jurnal.jsx"
import Landing from "./pages/Landing.jsx"
import IntroTest from "./pages/Intro-Test.jsx";
import Test from "./pages/Test.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Rekomendasi from "./pages/Rekomendasi.jsx"
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/jurnal" element={<Jurnal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/introtest" element={<IntroTest />} />
        <Route path="/test" element={<Test />} />
        <Route path="/rekomendasi" element={<Rekomendasi />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App;