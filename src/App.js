import "./App.css";
import Header from "./BUYER/HEADER/Header";
import Navbar from "./BUYER/NAVBAR/Navbar";
import Footer from "./BUYER/FOOTER/Footer";
import { useState } from "react";
// import App1 from "./VENDOR/App1";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Header />

      <Navbar />

      <Footer />

      {/* <App1/>    */}
    </div>
  );
}

export default App;
