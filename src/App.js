import './App.css';
import NameContainer from "./containers/NameContainer";
import ButtonContainer from "./containers/ButtonContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Name Generator
      </header>
      <NameContainer/>
      <ButtonContainer/>
    </div>
  );
}

export default App;
