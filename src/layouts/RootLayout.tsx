import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToHash from "../components/ScrollToHash/ScrollToHash";

function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollToHash />

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default RootLayout;