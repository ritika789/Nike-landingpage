import "./App.css";
import Hero from "./components/Hero";
const App = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact Us</li>
        </ul>

        <button>login</button>
      </nav>
      <Hero />
    </div>
  );
};
export default App;
