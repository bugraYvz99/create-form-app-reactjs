import Navbar from "./components/Navbar"
import { CreateFormPage } from "./Pages/CreateFormPage"
import GetFormPage from "./Pages/GetFormPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"

function App() {
  return (
    <Router>
      <div className="h-[4000px] bg-[url('./images/background.jpg')]  bg-repeat-y">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/CreateForm" element={<CreateFormPage />} />
          <Route path="/GetForm" element={<GetFormPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
