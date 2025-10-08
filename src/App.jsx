import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);
  return (
   <>
      <Header/>
      <Home/>
      <Footer/>
   </>
  );
}

export default App;
