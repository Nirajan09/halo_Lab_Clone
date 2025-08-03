import HomePage from "./features/home/HomePage"
import { Navigate, Route, Routes } from "react-router-dom"
import ContactPage from "./features/contact/ContactPage"
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
