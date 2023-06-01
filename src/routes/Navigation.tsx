import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import logo from "../assets/react.svg";

interface NavLink {
  isActive: boolean;
  isPending: boolean;
}

const Navigation = () => {
  const isActive = ({ isActive }: NavLink) => (isActive ? "nav-active" : "");

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />

          <ul>
            <li>
              <NavLink className={isActive} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="/users">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="users" element={<h1>Users</h1>} />

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
