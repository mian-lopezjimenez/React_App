import { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import logo from "../assets/react.svg";

interface NavLink {
  isActive: boolean;
  isPending: boolean;
}

const Navigation = () => {
  const isActive = ({ isActive }: NavLink) => (isActive ? "nav-active" : "");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />

            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink className={isActive} to={to}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
