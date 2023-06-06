import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
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
              <NavLink className={isActive} to="/lazy1">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="/lazy2">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={isActive} to="/lazy3">
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="lazy1" element={<LazyPage1 />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />

          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
