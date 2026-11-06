import './App.css';
import Title from "./Title.jsx";

// import

function Descriptin(){
  return <p>I am the description</p>
}

function App() {
  return (
    <div>
      <Title />
      <Descriptin />
      <Title />
      <Descriptin />
    </div>
  );
}

export default App
