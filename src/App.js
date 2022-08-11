import "./App.css";
import { chromeExtension } from "./chromeExtension";
function App() {
  const randomNum = Math.floor(
    Math.random() * Math.floor(chromeExtension.length)
  );
  return (
    <div className='App'>
      <h1>{chromeExtension[randomNum].FIELD1}</h1>
      <h3>{chromeExtension[randomNum].FIELD2}</h3>
    </div>
  );
}

export default App;
