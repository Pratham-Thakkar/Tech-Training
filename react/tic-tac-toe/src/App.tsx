import { Header } from "./component/Header";
import { Matrix } from "./component/Matrix";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Matrix />
    </div>
  );
}

export default App;
