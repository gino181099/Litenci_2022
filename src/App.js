import "./styles.css";
import Heading from "./Components/Heading";
import Header from "./Components/Header";
import What from "./Components/What";
import How from "./Components/How";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Heading />
      <What />
      <How />
      <Contact />
    </div>
  );
}
