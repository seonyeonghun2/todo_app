import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/join' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
