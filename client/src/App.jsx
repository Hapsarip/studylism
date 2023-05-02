import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
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