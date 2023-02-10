import React from "react";
import { useSelector } from "react-redux";
import Taskcard from "./taskcard";

export default function Viewtask() {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "500px",
        overflow: "auto",
        height: "20rem",
        gap: "4px",
      }}
    >
      <br />
      {tasks.map((task) => (
        <Taskcard key={task._id} Title={task} />
      ))}
    </div>
  );
}
