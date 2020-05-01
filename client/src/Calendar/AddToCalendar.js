import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal' ;
import { GiPuzzle,GiChefToque,GiBabyfootPlayers } from "react-icons/gi";
import { FaCar,FaShower } from "react-icons/fa";
import { AiOutlineRead } from "react-icons/ai";
import '../Pages/Practice.css';
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
     showMassge: false ,
     isError: false,
     Succeeded: false, 
    // eventCalendar: {
    //   title: 'Sample Event',      
    //   description: 'This is the sample event provided as an example only',
    //   location: 'Portland, OR',
    //   startTime: "",
    //   endTime: '2016-09-16T21:45:00-04:00' ,
    // }
  };

  handleChange = name => e => {
    this.setState({ eventCalendar: {...this.state.eventCalendar, [name]: e.target.value}
  });
  console.log(`AddEventCalendar : ${this.state.eventCalendar}`);
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
      startTime: this.state.startTime,
      endTime: '2016-09-16T21:45:00-04:00' ,})
    .then(res => {
      if (res.status === 200) {
        this.setState({ Succeeded: true });
      } else {
        this.setState({ isError: true });
      }
    })
    .catch(err => {
      this.setState({ isError: true });
    });
};
  render()
   {
  const isValRange = true ;
  const {showMassge} = this.state;
  console.log(`AddEventCalendar : ${this.state.startTime}`);
  console.log(`titel : ${this.state.title}`);
  console.log(`description : ${this.state.description}`);

   let eventCalendar= {
    title: this.state.title,    
    description: this.state.description,
    location: 'Home',
    startTime: this.state.startTime,
    endTime: '2020-04-30' 
  }
  
  let icon = { 'calendarPlusO': 'left' };

  let items = [
    { google: 'Google' },
    { outlook: 'Outlook' },
    { outlookcom: 'Outlook.com' },
    { apple: 'iCal' },
    { yahoo: 'Yahoo!' },
 ];
 

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
                  <Button
                   variant="outline-success" value={7} disabled={isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold" ,marginLeft:"5px"}}>ש</Button>
                  <Button 
                  
                  onClick={this.handleChangeDate} 
                  variant="outline-success" value={6} disabled={!isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold", marginLeft:"5px" }}>ו</Button>
                  <Button
                   variant="outline-success" value={5} disabled={!isValRange} onClick={isValRange ? this.handleClick : null}  style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold", marginLeft:"5px" }}>ה</Button>
                  <Button variant="outline-success" value={4} disabled={!isValRange} onClick={isValRange ? this.handleClick : null}  style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold" ,marginLeft:"5px"}}>ד</Button>
                  <Button variant="outline-success" value={3} disabled={!isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold", marginLeft:"5px" }}>ג</Button>
                  <Button
                   onChange={ this.handleChange('startTime')} 
                    variant="outline-success" value={2} disabled={!isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold",marginLeft:"5px" }}>ב</Button>
                  <Button variant="outline-success" value={1} disabled={!isValRange} onClick={isValRange ? this.handleClick : null} style={{backgroundColor:"whit", boxShadow: "1px 1px #888888 ",fontWeight: "bold", marginLeft:"5px" }}>א</Button>
                 { showMassge ? 
                 <Modal.Dialog>
                 <Modal.Header closeButton>
                   <Modal.Title>                     יש לבחור יום תקין</Modal.Title>
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
           <Form>  
  <Form.Group className="FormMeeting" controlId="Form.meeting">
    <Form.Control as="select" size="sm"  >
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
  </Form>
           <p className="text">:פעילות מועדפת להיום</p>

    <div className="col-md-4" >
      <img src={ShowerActivity} alt="ShowerActivity" className="icon"
       onClick={()=>{
        this.setState({title:"TalkOn - פעילות במקלחת"})
        this.setState({description:"פעילות במקלחת"})
        }}/>

      <img src={KitchenActivity} alt="KitchenActivity" className="icon"
       onClick={()=>{
        this.setState({title:"TalkOn - פעילות במטבח"})
        this.setState({description:"פעילות במטבח"})
        }}/>

      <img title="פעילות בגן שעשועים" src={Playground} alt="Playground" className="icon"  
       onClick={()=>{
        this.setState({title:"TalkOn - פעילות בגן שעשועים"})
        this.setState({description:"פעילות בגן שעשועים"})
        }}/>

    </div>

    <div className="col-md-4" >
      <img src={PlayingTime} alt="PlayingTime" className="icon"
       onClick={()=>{
        this.setState({title:"TalkOn - זמן משחק"})
        this.setState({description:"זמן משחק"})
        }}/>

      <img src={StoryTime} alt="StoryTime" className="icon"
       onClick={()=>{
        this.setState({title:"TalkOn - זמן סיפור"})
        this.setState({description:"זמן סיפור"})
        }}/>

      <img src={TravelTime} alt="TravelTime" className="icon"
       onClick={()=>{
        this.setState({title:"TalkOn - פעילות בגן שעשועים"})
        this.setState({description:"פעילות בגן שעשועים"})
        }}/>

    </div>



<AddToCalendar event={eventCalendar}
 buttonLabel="קבע פעילות ביומן" 
 buttonTemplate={icon}
 listItems={items} 
displayItemIcons={false}
 onClick={this.loadToServer}
 
/>
<ReactAddToCalendar

/>

        {/* <AddToCalendar event={this.state.event}
        onClick={this.loadToServer}/> */}
        
{/* <MakeUrls/> */}


<p>
  ____________________________
</p>
<p>...איזה כיף נפגש בקרוב</p>
      </div>
    )
  };
  handleClick= (e) => {
    const {value} = e.target;
    const {showMassge,startTime} = this.state;
    const today = new Date();
    const day = today.getDay(); 

    const weekday = new Array(7);
weekday[0] = "ראשון";
weekday[1] = "שני";
weekday[2] = "שלישי";
weekday[3] = "רביעי";
weekday[4] = "חמישי";
weekday[5] = "שישי";
weekday[6] = "שבת";

const dayWeek= weekday[value-1];
console.log(dayWeek);

    if ((value >= day+1) && (value < day+4) )  {
            this.isValRange=  true  ;

            // console.log(this.isValRange );
            console.log(today);
            console.log(value);
            console.log(day);
            //console.log(maxday);
            this.setState({
              showMassge: false ,
              
            });
            this.setState({ 
              // startTime : e.target.value
              // startTime : e.target.value
              startTime : dayWeek
            });
            this.setState({
              massage: `היום שנבחר הוא ${dayWeek}`
            });
    }  else { this.isValRange = false ;

            console.log(this.isValRange );
            console.log(value);
            console.log(day);
            this.setState({
              showMassge: true
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