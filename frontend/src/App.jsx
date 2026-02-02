import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom';
import Main from "./components/Main.jsx"
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
     <Router>
      <Toaster position="top-center" />
       <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Main />} />
        <Route path="*" element={<Navigate to="/login" />} />
       </Routes>
     </Router>
  );
}

export default App
