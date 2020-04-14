import React, { Component } from 'react';
import Calendar from 'react_google_calendar';

const calendar_configuration = {
    api_key:' 708960407089-sipovlsla9fokref56g18putt5p0fj02.apps.googleusercontent.com',
    calendars: [
      {
        name: 'demo',
        url: 'exampleURL@group.calendar.google.com'
      }
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}

export default class CalendarAdd extends Component {
    constructor(props) {
      super(props)
        this.state = {
          events: []
        }
    }

    render = () =>
      <div>
        <Calendar
          events={this.state.events}
          config={calendar_configuration} />
      </div>
}
          