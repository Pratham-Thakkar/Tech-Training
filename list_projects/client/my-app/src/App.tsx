import { Form } from "./components/Form";
import "./App.css";
import { Header } from "./components/Heading";
import { LoadProjects } from "./components/LoadProjects";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <LoadProjects />
    </div>
  );
}

export default App;
