import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Jurnal from "./pages/Jurnal"
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/jurnal" element={<Jurnal />} />
      </Routes>
    </>
  )
}

export default App;