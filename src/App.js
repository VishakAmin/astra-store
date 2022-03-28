import "./App.css";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/landing_page/LandingPage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
