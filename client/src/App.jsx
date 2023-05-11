import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
//import IntroTest from "./pages/Intro-Test.jsx";
//import Test from "./pages/Test.jsx"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App;