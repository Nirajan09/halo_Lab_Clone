import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import { Navigate, Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
