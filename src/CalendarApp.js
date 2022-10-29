import React from 'react'
import Calendar from 'rc-year-calendar';

class MyCalendar extends React.Component {
    constructor() {
      super();
      this.state = {
        logs: [],
      };
    }
  
    addLog(message) {
      this.setState({ logs: this.state.logs.concat([message]) });
    }

    getDayLegalCase(message) {
        // add things here
    }
  
    render() {
      return (
        <div>            
            <div id="events-log">
                <h3>Events</h3>
                {this.state.logs.map(log => <div key={log}>{log}</div>)}
            </div>

            <Calendar
                enableRangeSelection={false}
                onDayClick={e => {
                    this.addLog(`Click on day: ${e.date.toLocaleDateString()} (${e.events.length} events)`)
                    // add an event that will return a list of legal events on that day
                }}
                onYearChanged={e => this.addLog(`Year changed: ${e.currentYear}`)}
                onRenderEnd={e => this.addLog(`Render end: ${e.currentYear}`)}
            />
        </div>
      );
    }
}
/*
function Calender() {
    return (
        <div className="Calender">
            <header className="App-header">   
                         
            <Calendar 
                enableRangeSelection={true}
                onDayClick={e => this.addLog(`Click on day: ${e.date.toLocaleDateString()} (${e.events.length} events)`)}
                onDayContextMenu={e => this.addLog(`Right-click on day: ${e.date.toLocaleDateString()} (${e.events.length} events)`)} 
                onRangeSelected={e => this.addLog(`Select a range: ${e.startDate.toLocaleDateString()}  - ${e.endDate.toLocaleDateString()}`)} 
                onYearChanged={e => this.addLog(`Year changed: ${e.currentYear}`)}
                onRenderEnd={e => this.addLog(`Render end: ${e.currentYear}`)}            
            />
            </header>
        </div>
    );
}
*/
export default MyCalendar;