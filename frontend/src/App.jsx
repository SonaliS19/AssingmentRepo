import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import About from "./components/About";
import Home from "./components/Home";
import Lists from "./components/Lists";
import Login from "./components/Login";
import Search from "./components/Search";
import Signup from "./components/Signup";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link
              to="/"
              className="text-2xl font-semibold text-white hover:text-gray-300"
            >
              HTTP Codes
            </Link>
            <ul className="flex space-x-6 items-center">
              {["search", "lists", "about"].map((path) => (
                <li key={path}>
                  <Link
                    to={`/${path}`}
                    className="text-white text-lg hover:text-gray-300 transition-colors duration-300"
                  >
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </Link>
                </li>
              ))}

              {user ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-white bg-red-400 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-white hover:text-red-400"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-600"
                  >
                    Login
                  </Link>
                </li>
              )}

              {!user && (
                <li>
                  <Link
                    to="/signup"
                    className="text-white text-lg hover:text-gray-300 transition-colors duration-300"
                  >
                    Signup
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 container mx-auto p-4">
          <Routes>
            {user ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/lists" element={<Lists />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/signup" element={<Signup setUser={setUser} />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Login setUser={setUser} />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/signup" element={<Signup setUser={setUser} />} />
                <Route path="*" element={<Login setUser={setUser} />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
