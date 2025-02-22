import "./styles.css";
import { events } from "../src/data";
import { useEffect } from "react";
import { Calender } from "./components/Calender";

export default function App() {
  return (
    <div className="App">
      <Calender />
    </div>
  );
}
