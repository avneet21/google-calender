export const events = [
  { id: 1, start: 60, end: 180 }, // 1:00 AM - 3:00 AM
  { id: 2, start: 120, end: 240 }, // 2:00 AM - 4:00 AM
  { id: 3, start: 180, end: 300 }, // 3:00 AM - 5:00 AM
  { id: 4, start: 480, end: 540 }, // 8:00 AM - 9:00 AM
];

export const detectOverLaps = (events: Event[]) => {
  events.sort((a, b) => a.start - b.start);

  let columns = new Map<number, number>();
  let maxColumns = 1;

  events.forEach((event) => {
    let column = 0;
    while (columns.has(column) && columns.get(column) > event.start) {
      column++;
    }
    columns.set(column, event.end);
    event.column = column;
    maxColumns = Math.max(maxColumns, column + 1);
  });

  return { processedEvents: events, maxColumns };
};
