import './App.css';
import ProductTab from './ProductTab';
import MsgBox from './msgBox';


// import

function App() {
  return (
    <>
    < MsgBox username="Rakesh" textColor="red" />
    < MsgBox username="Rajan" textColor="yellow" />
      <ProductTab/>
    </>
  );
}

export default App
