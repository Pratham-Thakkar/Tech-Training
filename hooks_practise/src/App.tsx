import "./App.css";
import { UseEffectExample } from "./Component/useEffetExample";
import { UseRefExample } from "./Component/useRefExample";
import { UseStateExample } from "./Component/useStateExample";

function App() {
  return (
    <>
      {/* <UseStateExample /> */}
      {/*<UseEffectExample /> /*Doesnot do rerendering, its not its task*/}
      <UseRefExample />
    </>
  );
}

export default App;

//1.useRef
//2.useContext
