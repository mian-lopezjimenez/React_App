import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { Link } from "../../routes/interfaces";
import { routes } from "../../routes/routes";

const LazyLayout = () => {
  const isActive = ({ isActive }: Link) => (isActive ? "nav-active" : "");

  return (
    <div>
      <h1>LazyLayout Page</h1>

      <ul>
        {routes[0].subRoutes &&
          routes[0].subRoutes.map(({ to, name }) => (
            <li key={to}>
              <NavLink className={isActive} to={to}>
                {name}
              </NavLink>
            </li>
          ))}
      </ul>

      <Routes>
        {routes[0].subRoutes &&
          routes[0].subRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

        <Route
          path="/*"
          element={
            <Navigate
              to={routes[0].subRoutes ? routes[0].subRoutes[0].to : "/"}
              replace
            />
          }
        />
      </Routes>
    </div>
  );
};

export default LazyLayout;
