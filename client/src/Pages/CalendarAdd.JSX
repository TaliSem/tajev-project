import Calendar from 'react_google_calendar'

const calendar_configuration = {
    api_key: YOUR_GOOGLE_API_KEY,
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
          