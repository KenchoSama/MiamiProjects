import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
//import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills"; // Import Skills
import { Intro } from "./components/Intro"; // Import intro




function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
