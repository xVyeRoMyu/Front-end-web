import './App.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contents from "./components/Content.jsx";
import Navbar from "./components/Navbar.jsx";
import ClockComponent from "./components/Clock.jsx";


function App() {
  return (
    <div className="row">
      <Header />
	  <Navbar />
	  <Contents />
	  <Footer />
	  <ClockComponent />
    </div>
  );
}

export default App;