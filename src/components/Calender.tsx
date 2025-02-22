import { useState, useEffect } from "react";
import { detectOverLaps, events } from "../data";
import { Event } from "../interfaces/Event";

export const Calender = () => {
  const [processedEvents, setProcessedEvents] = useState<Event[]>([]);
  const [maxColumns, setMaxColumns] = useState(1);

  useEffect(() => {
    const { processedEvents, maxColumns } = detectOverLaps([...events]);
    setProcessedEvents(processedEvents);
    setMaxColumns(maxColumns);
  }, [events]);

  return (
    <div className="calender">
      {processedEvents.map((event: Event) => {
        return (
          <div
            key={event.id}
            className="event"
            style={{
              top: `${event.start}px`,
              height: `${event.end - event.start}px`,
              left: `${(event.column! / maxColumns) * 100}%`,
              width: `${100 / maxColumns}%`,
            }}
          >
            {event.id}
          </div>
        );
      })}
    </div>
  );
};
