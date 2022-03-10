import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="w-11/12 m-auto text-center mb-4">
        <Link to="/shuffler-1D" className="p-2 inline-flex bg-black text-white m-2">
          Shuffler 1D
        </Link>
        <Link to="/shuffler-2D" className="p-2 inline-flex bg-black text-white m-2">
          Shuffler 2D
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
