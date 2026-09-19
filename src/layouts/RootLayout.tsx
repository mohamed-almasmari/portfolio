import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToHash from "../components/ScrollToHash/ScrollToHash.tsx";
import ScrollToTop from "../components/ScrollToHash/ScrollToTop.tsx";

function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollToTop />
      <ScrollToHash />

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default RootLayout;
