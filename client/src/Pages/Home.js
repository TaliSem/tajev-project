import React, {Component } from 'react';
import axios from 'axios';
import Parctice from './Componenta/Practice';
import './Home.css'
import AddEventCalendar from '../Calendar/AddToCalendar';

class Home extends Component {


    state = {
        Purpose:"",
        email:"",
        Description:'',
        Date:'',
        Purpose:'',
        PurposeList:'',
        listTrip_categories:[] };
   
    getTrips = () => {
        axios
          .get("/api/purpose")
          .then(res => {
            this.setState({listTrip_categories:res.data}) ;
            console.log(this.state.listTrip_categories);
            console.log('get trip_categories from the server');

          })
          .catch(() => {
              alert('Error retrieving data!');
            });
      };

      componentDidMount()
      {
       this.getTrips();
      };


    displayBlackPost  = (listTrip_categories) => {
        // if(!listTrip_categories.length) null;
        const lastIndex = listTrip_categories.length - 1 ; 
        console.log(lastIndex);
        // return listTrip_categories.map((trip,index)=>{
        return listTrip_categories.map((trip,index)=>{
            return(
                <div key={index}>
                      
                <Parctice
                Purpose={trip.description}
                day={trip.day}
                date={trip.startTime}
                time={trip.time}
            
                />
                </div>
           
               
        
    )

        })
    };

      
    
    render() { 

    
        return ( 

            <div  >


<div className='titel'>
    <h1 >תזכורת: פידבק מתרגול קודם</h1> 
</div>

<div>
    <h4 >התרגול הבא</h4> 
</div>

<div className='Parctice'>

{this.displayBlackPost(this.state.listTrip_categories)}  

</div>
          
<div className='buttonP'>
    <a  style={{paddingTop:'40%'}} href='../Purpose'>המטרות הטיפוליות</a>
 </div>

 <div className='amountPrac'> 
            <p>כמות התרגולים שלנו לשבוע </p>
    <button> 1</button>
    <button> 2</button>
    <button> 3</button>
    <button> 4</button>
 </div>
                    
                </div>
         );
    }
}
 
export default Home;

