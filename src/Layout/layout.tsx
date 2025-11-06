import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

function Layout() {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
      </div>
      <main className="min-h-[calc(100vh-516px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
