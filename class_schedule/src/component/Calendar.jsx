import React, {useState, useRef } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import AddEventModal from './AddEventModal';
import axios from "axios";
import moment from "moment";

export default function() {

    const [modalOpen, setModalOpen] = useState(false);
    const [event, setEvents] = useState([]);
    const calendarRef  = useRef(null);

    const OnEventAdded = event => {
        let calendarApi = calendarRef.current.getApi();
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        });
    };

    async function handleEventAdd(data) {
        await axios.post('/api/calendar/create-event', data.event);
    }

    async function handleDateSet(data) {
        const response = await axios.get("/api/calendar/get-event?start="+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString());
        setEvents(response.data);
    }

    return (
        <section>
            
            <button onClick={() => setModalOpen(true)}>Add Event</button>

            <div style={{position: 'relative', zIndex: 0}}>
                <FullCalendar
                    ref = {calendarRef}
                    event={event}
                    plugins={[dayGridPlugin,timeGridPlugin]}
                    initialView="timeGridWeek"
                    eventAdd={(event) => handleEventAdd(event)}
                    dateSet={(date) => handleDateSet(date)}


                    headerToolbar={{
                        left: "prev,next",
                        center: "title",
                        right: "today,timeGridDay,timeGridWeek,dayGridMonth",
                    }}


                />
            </div>


            <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} OnEventAdded={event => OnEventAdded(event)} />
        </section>
    )
}