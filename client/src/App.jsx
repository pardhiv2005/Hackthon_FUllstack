// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Weather from "./pages/Weather";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/weather" element={<Weather />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Weather from "./pages/Weather";
import Landing from "./pages/Landing";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
