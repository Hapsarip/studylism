import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Jurnal from "./pages/Jurnal"
import Landing from "./pages/Landing"
import IntroTest from "./pages/Intro-Test.jsx";
import Test from "./pages/Test.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import "./index.css";

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
      </Routes>
    </>
  )
}

export default App;