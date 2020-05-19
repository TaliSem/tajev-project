import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal' ;
import { GiPuzzle,GiChefToque,GiBabyfootPlayers } from "react-icons/gi";
import { FaCar,FaShower } from "react-icons/fa";
import { AiOutlineRead } from "react-icons/ai";
// import '../Pages/Practice.css';
import "./styles/react-add-to-calendar.css";
import axios from 'axios';
import MakeUrls from './makeUrls';
import ShowerActivity from '../Images/ShowerActivity.png';
import KitchenActivity from '../Images/KitchenActivity.png';
import Playground from '../Images/Playground.png';
import PlayingTime from '../Images/PlayingTime.png';
import StoryTime from '../Images/StoryTime.png';
import TravelTime from '../Images/TravelTime.png';
import { Icon, InlineIcon } from '@iconify/react';
import calendarPlusO from '@iconify/icons-fa/calendar-plus-o';
import ReactAddToCalendar from './ReactAddToCalendar';
import Form from 'react-bootstrap/Form';



const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

class AddEventCalendar extends React.Component {
  contactUsUrl = "/users/:id/calender";
  static displayName = 'AddEventCalendar';
  state = {
    startTime: "",
    title: '',      
    description: '',
    time: '',
    dayW:'',
     showMassge: false ,
     isError: false,
     Succeeded: false, 
    eventCalendar: {
      title: 'Sample Event',      
      description: 'This is the sample event provided as an example only',
      location: 'Portland, OR',
      Time: "",
      endTime: '2016-09-16T21:45:00-04:00' ,
    }
  };

 

Succeeded = () => {
  this.setState({ redirectToThanks: true });
};

 
loadToServer = e =>{
  // const endTime =eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);
  e.preventDefault();
  console.log("loadToServer");
  console.log(this.state.eventCalendar);
  this.setState({ isError: false });
  axios
    .post(this.contactUsUrl, {
      title: this.state.title,    
      description: this.state.description,
      location: 'Home',
      day:this.state.dayW,
      startTime: this.state.startTime,
      time:this.state.time,
      endTime: '2016-09-16T21:45:00-04:00' ,})
    .then(res => {
      console.log(res.status);
      if (res.status === 201) {
        console.log('Succeeded' + this.state.Succeeded);
        this.setState({ Succeeded: true });
        
      } else {
        this.setState({ isError: true });
      }
    })
    .catch(err => {
      this.setState({ isError: true });
    });
    console.log('Succeeded' + this.state.Succeeded);
};

handleChange = name => e => {
  this.setState({ eventCalendar: {...this.state.eventCalendar, [name]: e.target.value},
});
console.log(`AddEventCalendar : ${this.state.eventCalendar}`);
};



handleClickTime= (e) => {
  // const {value} = e.target;
 
this.setState({
  time:  e.target.value ,
});
console.log(this.state.time);

  }


  render()
   {
  const isValRange = true ;
  const {showMassge} = this.state;
  console.log(`AddEventCalendar : ${this.state.startTime}`);
  console.log(`titel : ${this.state.title}`);
  console.log(`description : ${this.state.description}`);
  console.log(`time : ${this.state.time}`);

//   const d = this.state.time;
//   d.setMinutes(d.getMinutes() + 45);

//   const eventEndTime = new Date()
// eventEndTime.setMinutes(45);
// console.log(eventEndTime +'j'+d )


   let eventCalendar= {
    title: this.state.title,    
    description: this.state.description,
    location: 'Home',
    // startTime: '2016-09-16T20:15:00-04:00',
    // endTime: '2016-09-16T21:45:00-04:00'
    startTime: this.state.startTime,
     endTime: this.state.startTime,
  }
  
  let icon = { 'calendarPlusO': 'left' };
  
  let items = [
    { google: 'Google' },
    { outlook: 'Outlook' },
    // { outlookcom: 'Outlook.com' },
    { apple: 'Apple' },
    { yahoo: 'Yahoo!' },
 ];
 
 const disabled = !this.state.startTime ||  !this.state.description

    return(
      // this.state.Succeeded
      // ?
      // <div className="pageTemplate backTemp">
      //   <p>נפגש בהקדם :)</p>
      // </div>
      // : 

      <div>

<div className="title">
                <img  className="profilePicture" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png" alt="profilePicture"/>
                    <span >הפעילות היומית</span>
                {/* <h2 >הפעילות היומית</h2> */}
               
                </div>
                <p className="subtitle">?מתי תרצו לבצע את התרגול הבא</p>
           <div className="week">
                  <Button variant="outline-success" value={7} disabled={!isValRange}
                   onClick={ this.handleClickDate } 
                   onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold" ,marginLeft:"5px"}}>ש</Button>
                  {/* <Button onClick={this.handleChangeDate} variant="outline-success" value={6} disabled={!isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold", marginLeft:"5px" }}>ו</Button> */}
                  <Button variant="outline-success" value={6} disabled={!isValRange}
                   onClick={isValRange ? this.handleClick : null} 
                   handleClickDate
                   onClick={ this.handleClickDate } 
                   style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold", marginLeft:"5px" }}>ו</Button>
                  <Button variant="outline-success" value={5} disabled={!isValRange} onClick={isValRange ? this.handleClick : null}  style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold", marginLeft:"5px" }}>ה</Button>
                  <Button variant="outline-success" value={4} disabled={!isValRange} onClick={isValRange ? this.handleClick : null}  style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold" ,marginLeft:"5px"}}>ד</Button>
                  <Button variant="outline-success" value={3} disabled={!isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold", marginLeft:"5px" }}>ג</Button>
                  <Button variant="outline-success" value={2} disabled={!isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold",marginLeft:"5px" }}>ב</Button>
                  {/* <Button onChange={ this.handleChange('startTime')} variant="outline-success" value={2} disabled={!isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold",marginLeft:"5px" }}>ב</Button> */}
                  <Button variant="outline-success" value={1} disabled={!isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold", marginLeft:"5px" }}>א</Button>
                 { showMassge ? 
                 <Modal.Dialog>
                 <Modal.Header closeButton>
                   <Modal.Title>  יש לבחור יום תקין</Modal.Title>
                 </Modal.Header>
               
                 <Modal.Body>
                   <p>יש לבחור, היום או  עד עוד יומיים</p>
                 </Modal.Body>
               
                 <Modal.Footer>
                   <Button variant="secondary" onClick={this.handleClick}> Close</Button>
                 </Modal.Footer>
               </Modal.Dialog>
                :  null  }
           </div>



        <div>
          <input type="time"   step="900"  value="09:00" onMouseOut={this.handleClickTime}/>
        </div>
           {/* <Form>  
  <Form.Group className="FormMeeting" controlId="Form.meeting">
    <Form.Control as="select" size="sm"  onClick={this.handleClickTime}  >
      <option>08:00</option>
      <option>09:00</option>
      <option>10:00</option>
      <option>11:00</option>
      <option>12:00</option>
      <option>13:00</option>
      <option>14:00</option>
      <option>15:00</option>
      <option>16:00</option>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
    </Form.Control>
  </Form.Group>
  </Form> */}
           <p className="text">:פעילות מועדפת להיום</p>

    <div className="col-md-4 col-lg-12" >
      <img src={ShowerActivity} alt="ShowerActivity" className="icon"  
      data-toggle="tooltip" title ="פעילות במקלחת"
       onClick={()=>{
        this.setState({title:"TalkOn - פעילות במקלחת"})
        this.setState({description:"פעילות במקלחת"})
        }}/>

      <img src={KitchenActivity} alt="KitchenActivity" className="icon"  data-toggle="tooltip" title ="פעילות במטבח"
       onClick={()=>{
        this.setState({title:"TalkOn - פעילות במטבח"})
        this.setState({description:"פעילות במטבח"})
        }}/>

      <img title="פעילות בגן שעשועים" src={Playground} alt="Playground" className="icon"  data-toggle="tooltip" title ="פעילות בגן שעשועים" 
       onClick={()=>{
        this.setState({title:"TalkOn - פעילות בגן שעשועים"})
        this.setState({description:"פעילות בגן שעשועים"})
        }}/>

    </div>

    {/* <div className="col-md-4 col-lg-6" > */}
    <div className="col-md-4 col-lg-12" >
      <img src={PlayingTime} alt="PlayingTime" className="icon" data-toggle="toltip" title ="זמן משחק"
       onClick={()=>{
        this.setState({title:"TalkOn - זמן משחק"})
        this.setState({description:"זמן משחק"})
        }}/>

      <img src={StoryTime} alt="StoryTime" className="icon" data-toggle="toltip" title ="זמן סיפור"
       onClick={()=>{
        this.setState({title:"TalkOn - זמן סיפור"})
        this.setState({description:"זמן סיפור"})
        }}/>

      <img src={TravelTime} alt="TravelTime" className="icon" data-toggle="toltip" title ="פעילות בנסיעה"
       onClick={()=>{
        this.setState({title:"TalkOn - פעילות בנסיעה"})
        this.setState({description:"פעילות בנסיעה"})
        }}/>

    </div>
    <button className="btn btn-outline-primary" style={{marginTop:"15px"}} disabled={disabled} onClick={this.loadToServer}>
    <Icon icon={calendarPlusO}  style={{color:"blue",margin:"5px"}}/>       
<AddToCalendar event={eventCalendar}
 buttonLabel="קבע פעילות ביומן" 
 buttonTemplate={icon}
 listItems={items} 
displayItemIcons={false}

 icon={calendarPlusO}
 disabled={disabled}
/>
</button>


        {/* <AddToCalendar event={this.state.event}
        onClick={this.loadToServer}/> */}
        
{/* <MakeUrls/> */}


<p>
  _____________________________________________________
</p>

{!this.state.Succeeded ? <span>אנא קבעו תרגול</span> : <span>...איזה כיף נפגש בקרוב</span>}

      </div>
    )
  };

 






  handleClick= (e) => {
    const {value} = e.target;
    const {showMassge,startTime,dayW} = this.state;
    const today = new Date();
    let day = today.getDay(); 
    var numDay = today.getDate();
    let dd = Number(numDay)  ;
    let d = Number(numDay);

    today.setSeconds(35);
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+dd;
    console.log(today)
   console.log(numDay)
   console.log(value)
   console.log(dd)
console.log(date)


    
console.log(today)


    const weekday = new Array(7);
weekday[0] = "יום ראשון";
weekday[1] = "יום שני";
weekday[2] = "יום שלישי";
weekday[3] = "יום רביעי";
weekday[4] = "יום חמישי";
weekday[5] = "יום שישי";
weekday[6] = " יום שבת";

const dayWeek= weekday[value-1];

console.log(dayWeek);
console.log(value);
console.log(day);
console.log(dd);
 

    if ((value >= day+1) && (value < day+4))  {
            this.isValRange=  true  ;

            // console.log(this.isValRange );
            console.log(today);
            console.log(value);
            console.log(day);
            console.log(today+value);

            //console.log(maxday);
            this.setState({
              showMassge: false ,
            });
            this.setState({ 
              startTime : date
            });
            this.setState({ 
              dayW : dayWeek
            });
            
            this.setState({
              massage: `היום שנבחר הוא ${dayWeek}`
            });
    }  else { this.isValRange = false ;
      console.log(dd);
      console.log(Number(today.getDate()) + Number(value))

            console.log(this.isValRange );
            console.log(value);
            console.log(day);
            this.setState({
              showMassge: true
            });
            this.setState({ 
              startTime : date
            });
            this.setState({ 
              dayW : dayWeek
            });


    }
    console.log(startTime)


     const handleChangeDate =  e => {
      this.setState({ 
        startTime : e.target.weekday[value-1]
      });
      this.setState({
        massage:'היום שנבחר בור'
      })
    console.log(`startTime : ${this.state.startTime}`);
    };


  }
}


export default AddEventCalendar;