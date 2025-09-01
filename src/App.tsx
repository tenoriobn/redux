import { Route, BrowserRouter as Router, Routes, } from "react-router"
import HomePage from "./screens/HomePage"
import Products from "./screens/Products"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
