import { useNavigate } from "react-router-dom";
import { Base } from "../../shared/BasePage";
import { Navbar } from "../../shared/Navbar";
import { UserIcon } from "../../shared/UserIcon";
import { useState, useEffect } from "react";
import { BookingPersistent } from "../../shared/PersistentTypes";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../..";

const getDatesForCurrentAndNextWeek = () => {
  const dates = [];
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  for (let i = 0; i < 14; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const day = date.toLocaleString('default', { weekday: 'short' });
    const dayNumber = date.getDate();
    dates.push({ day, dayNumber, date: date.toISOString().split('T')[0] });
  }
  return dates;
};

export const Calendar = () => {
  const navigate = useNavigate();
  const [dates, setDates] = useState<{ day: string, dayNumber: number, date: string }[]>([]);
  const [events, setEvents] = useState<BookingPersistent[]>([]);

  useEffect(() => {
    //setDates(getDatesForCurrentAndNextWeek());
    getDocs(collection(db, "booking")).then(res => {
      const temp: BookingPersistent[] = [];
      res.forEach(doc => {
        temp.push({
          location: doc.data().location,
          user: doc.data().user,
          time:doc.data().time.toDate(),
        })
      })
      setEvents(temp)
    })
  }, []);

  const handleDateClick = (date: string) => {
    const selectedDate = new Date(date);
    selectedDate.setDate(selectedDate.getDate() - 1);
    const adjustedDate = selectedDate.toISOString().split('T')[0];
    navigate(`/reserve?date=${adjustedDate}`);
  };

  return (
    <div className="container mx-auto max-w-sm">
      <Base>
        <UserIcon />
        <div className="calendar-container">
          <div className="calendar">
            {dates.map((date, index) => (
              <div key={index} className="date" onClick={() => handleDateClick(date.date)}>
                <span className="day">{date.day}</span>
                <span className="day-number">{date.dayNumber}</span>
              </div>
            ))}
          </div>
          <div className="events">
            <h2 className="events-heading">Upcoming Events</h2>
            <ul className="gap-4 flex flex-col">
              {events.map(doc => (
                <div className="flex bg-neutral-100 py-2 px-2 rounded-md flex-col">
                  <div className="text-lg">{doc.location.name} @ {doc.location.college}</div>
                  <div className="text-sm">Organized by <span className="text-primary">{doc.user.name}</span></div>
                  <div className="text-md">{doc.time.toLocaleString()}</div>
                </div> 
              ))} 
            </ul>
          </div>
        </div>
        <Navbar />
      </Base>
    </div>
  );
};
