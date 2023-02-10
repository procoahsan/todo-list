import { Collapse, Text, Button } from "@nextui-org/react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { Checkbox } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { updateTask } from "./actions/taskaction";
import { useState } from "react";
import { deleteTask } from "./actions/taskaction";
export default function Taskcard({ Title }) {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(Title.completed);
  const handleCheckboxChange = () => {
    const updatedTask = { ...Title, completed: !completed };
    setCompleted(!completed);
    dispatch(updateTask(updatedTask._id, updatedTask));
  };
  const deleteButton = () => {
    dispatch(deleteTask(Title._id));
  };

  return (
    <Collapse.Group shadow>
      <Collapse
        title={<Text h6>{Title.description}</Text>}
        arrowIcon={<RxDragHandleDots2 />}
        contentLeft={
          <Checkbox
            isRounded
            color="warning"
            onChange={handleCheckboxChange}
          ></Checkbox>
        }
      >
        <Text>Are You sure you want to delete this task?</Text>
        <Button color="error" auto ghost onPress={deleteButton}>
          Delete task
        </Button>
      </Collapse>
    </Collapse.Group>
  );
}
