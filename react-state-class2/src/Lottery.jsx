import { useState } from "react"
import { genTicket ,sum} from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winningSum=15}){

  let [ticket ,setTickets]=useState(genTicket(n));
  let isWinning = sum(ticket)===winningSum;

  let butTicket = () => {
    setTickets(genTicket(n));
  }

  return(
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket}/>
      <button onClick={butTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulation,you won !"}</h3>
    </div>
  )
}