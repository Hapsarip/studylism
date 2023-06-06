import { Routes, Route } from "react-router-dom"
import Jurnal from "./pages/Jurnal.jsx"
import Landing from "./pages/Landing.jsx"
import IntroTest from "./pages/Intro-Test.jsx";
import Test from "./pages/Test.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Rekomendasi_Audio from "./pages/Rekomendasi_Audio.jsx"
import Rekomendasi_Visual from "./pages/Rekomendasi_Visual.jsx"
import Rekomendasi_Kinestetik from "./pages/Rekomendasi_Kinestetik.jsx"
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rekomendasi_audio" element={<Rekomendasi_Audio />} />
        <Route path="/rekomendasi_visual" element={<Rekomendasi_Visual />} />
        <Route path="/rekomendasi_kinestetik" element={<Rekomendasi_Kinestetik />} />
      </Routes>
    </>
  )
}

export default App;