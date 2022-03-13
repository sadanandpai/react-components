import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const routes = ["/shuffler-1D", "/shuffler-2D", "/stagger", "/timer", '/list', '/scroll'];

function App() {
  const location = useLocation();

  return (
    <>
      <nav className="m-auto mb-4 flex justify-left sm:justify-center overflow-auto w-11/12 border-0 px-4">
        {routes.map((route) =>
          location.pathname === route ? (
            <Link key={route} to={route} className="p-1 inline-flex text-blue-700 m-1 relative shrink-0 bg-orange-100">
              {route.slice(1)}
              <motion.div className="absolute border-b-2 border-green-700 w-10/12 mt-6" layoutId="highlight"></motion.div>
            </Link>
          ) : (
            <Link key={route} to={route} className="p-1 inline-flex text-blue-700 m-1 shrink-0 bg-orange-100">
              {route.slice(1)}
            </Link>
          )
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default App;
