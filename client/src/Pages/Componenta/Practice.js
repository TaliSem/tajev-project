import React from 'react'; 
import Card from 'react-bootstrap/Card';
// import AddEventCalendar from '../Calendar/AddToCalendar';


function Parctice(props){
    return ( 
    <div  className="card">

<h2>המטרה</h2>
{props.Purpose}

<h2>:זמן התרגול</h2>
  <Card>
  <Card.Body>
  {props.day}
{props.date}
{props.time}
<a href='../AddToCalendar'>ערוך</a>
</Card.Body>
</Card>
</div>
)}
 
export default Parctice;
