import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';


// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

import events from "./Events";

export function MealCalendar() {

    const [newEvent, setNewEvent] = useState({title: "", TimePicker: "10:00", start: "", end:""});
    const [allEvents, setAllEvents] = useState(events);
    const [value, onChange] = useState('10:00');


    function handleAddEvent() {
     setAllEvents([...allEvents, newEvent])
    }


  return (
    <div >
        
        <h1 className="Addd">Meal Planner</h1>
   
        <div className="ad">
         <TextField
        onChange={(event) => setNewEvent({...newEvent, title: event.target.value})}
        id="outlined-basic"
        value={newEvent.title}
        label="Meal"
        variant="outlined"
      />
      
        <TimePicker onChange={onChange} value={value} />
      <DatePicker placeholderText="Start Date" style={{marginRight: "20px"}}
      selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />

      <DatePicker placeholderText="End Date" style={{marginRight: "20px"}}
      selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />


<Button
        onClick={handleAddEvent}
        variant="contained"  >
        ADD MEAL
      </Button>
{/* 
<Button
       
        onClick={handleAddEvent}
        variant="contained"
        // startIcon={<DeleteForeverIcon />}
      /> */}
 </div>
      <div className="cal">
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next",
          center: "title",
          end: "calories",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin]}
        events={allEvents}
      />
      {/* <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
        displayEventEnd="true"
        eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
      /> */}
      </div>
      </div>
  
  );
}
