import "./App.css";
import GridSection from "./components/Grid/GridSection";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (<>
    <header>
      <Navbar/>
    </header>
    <main className="mt-12">
      <HeroBanner/>
      <GridSection/>
    </main>
  </>
  );
}

export default App;
