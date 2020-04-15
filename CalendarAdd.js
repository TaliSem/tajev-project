// const {google} = require('googleapis');
const express = require("express");
const { google } = require('googleapis');

const app = express();

app.use(express.static('static'));

const server = app.listen(3000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

const { OAuth2 } = google.auth

const OAuth2Client = new OAuth2(
'1009819459812-t9tdmn0ft74q6mvdp57kukdhs3kgi0cc.apps.googleusercontent.com',
'7Sl9rR4ZAPmcY2imVHnRIAn6',
'http://localhost:3000/Practice',
)

OAuth2Client.setCredentials({
    
    refresh_token: "1//0fD6gTJLo0Y7FCgYIARAAGA8SNwF-L9IrkTLJq4frzUNpIW0VCz4oPS8b7_uqdMJOy9wra5hWd99cNDpeuJSfmuWKyVtYwMK6bpU"
});

// const calendar = google.calendar({varsion: 'v3', auth: OAuth2Client});
const calendar = google.calendar({ version: 'v3', auth: OAuth2Client })

const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay()+2);


const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay()+2);
eventEndTime.setMinutes(eventEndTime.getMinutes()+ 20);

const event = {
    summary: `Meeting with David`,
  location: `3595 California St, San Francisco, CA 94118`,
  description: `Meet with David to talk about the new client project and how to integrate the calendar for booking.`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'America/Denver',
},
end: {
    dateTime: eventEndTime,
    timeZone: 'America/Denver',
  },

};

// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
    {
      resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        timeZone: 'America/Denver',
        items: [{ id: 'primary' }],
      },
    },

    (err, res) => {
        // Check for errors in our query and log them if they exist.
        if (err) return console.error('Free Busy Query Error: ', err)
    
        
        const eventArr = res.data.calendars.primary.busy
 
 if (eventArr.length === 0)
 
 return calendar.events.insert(
   { calendarId: 'primary', resource: event },
   err => {
     // Check for errors and log them if they exist.
     if (err) return console.error('Error Creating Calender Event:', err)
     // Else log that the event was created.
     return console.log('Calendar event successfully created.')
   }
 )

// If event array is not empty log that we are busy.
return console.log(`Sorry I'm busy...`)
}
)

