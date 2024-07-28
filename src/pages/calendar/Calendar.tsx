import { useNavigate } from "react-router-dom";
import { Base } from "../../shared/BasePage";
import { Navbar } from "../../shared/Navbar";
import { UserIcon } from "../../shared/UserIcon";
import { useState, useEffect } from "react";

const getDatesForCurrentAndNextWeek = () => {
  const dates = [];
  const today = new Date();
  const startOfWeek = today.getDate() - today.getDay();
  for (let i = 0; i < 14; i++) {
    const date = new Date(today.setDate(startOfWeek + i));
    const day = date.toLocaleString('default', { weekday: 'short' });
    const dayNumber = date.getDate();
    dates.push({ day, dayNumber, date: date.toISOString().split('T')[0] });
  }
  return dates;
};

export const Calendar = () => {
  const navigate = useNavigate();
  const [dates, setDates] = useState<{ day: string, dayNumber: number, date: string }[]>([]);
  const [events, setEvents] = useState<string[]>([]);

  useEffect(() => {
    setDates(getDatesForCurrentAndNextWeek());
    // Fetch upcoming events for the user
    setEvents(["Event 1", "Event 2", "Event 3"]);
  }, []);

  const handleDateClick = (date: string) => {
    navigate(`/pages/reserve?date=${date}`);
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
            <ul>
              {events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        </div>
        <Navbar />
      </Base>
    </div>
  );
};