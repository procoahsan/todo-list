import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { createTask } from "./actions/taskaction";

export default function Addtask() {
  const [task, setTask] = useState({ description: "", completed: false });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, description: e.target.value });
  };

  const addTask = () => {
    if (task.description === "") {
      alert("Please enter a task");
      return;
    }
    else{
      dispatch(createTask(task));
      console.log(task);
      alert("Task Added");
      setTask({ description: "", completed: false });
    }
    
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "hsl(0, 100%, 1%,.5)",
        width: "500px",
        height: "15rem",
      }}
    >
      <h3 style={{ color: "white" }}>Add Task to todo list</h3>
      <br />
      <Input
        labelPlaceholder="Write your task here"
        css={{ width: "300px", marginBottom: "10px" }}
        value={task.description}
        onChange={handleChange}
      />
      <Button
        css={{ marginTop: "10px" }}
        color="secondary"
        auto
        ghost
        onPress={addTask}
      >
        Add Task
      </Button>
    </div>
  );
}
