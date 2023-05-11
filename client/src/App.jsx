import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
//import IntroTest from "./pages/Intro-Test.jsx";
//import Test from "./pages/Test.jsx"
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App;