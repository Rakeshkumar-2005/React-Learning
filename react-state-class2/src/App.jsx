import './App.css'
// import TodoList from './TodoList'
 import Lottery from './Lottery'
import { sum } from './Helper';

function App() {

  let winConditon = (ticket) =>{
     return sum(ticket) ===15;
  }
  return (
    <>
      <Lottery n={3}  winConditon={winConditon}/>
    </>
  )
}

export default App
