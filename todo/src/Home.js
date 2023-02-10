import React from "react";
import Ahsan from "./ahsan.jpg";
import Addtask from "./Addtask";
import Viewtask from "./viewtask";
import { getTasks } from "./actions/taskaction";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Navbar, Button } from "@nextui-org/react";
import { Layout } from "./Layout.js";

export default function Home() {
  const [add, setAdd] = useState(true);
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("Add Task");
  const addButtonHandler = () => {
    setAdd(true);
    setView(false);
    setName("Add Task");
  };
  const viewButtonHandler = () => {
    setAdd(false);
    setView(true);
    setName("View Today Task");
  };

  const buttons = [
    { name: "Add Task", action: () => addButtonHandler() },
    { name: "View Today Task", action: () => viewButtonHandler() },
  ];
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  return (
    <div className="background">
      <img src={Ahsan} alt="background" className="main-picture" />
      <br />
      <Layout>
        <Navbar isBordered variant="sticky">
          <Navbar.Brand>
            <Navbar.Toggle
              aria-label="toggle navigation"
              css={{ margin: 10 }}
            />
            {name}
          </Navbar.Brand>

          <Navbar.Collapse>
            {buttons.map((button, index) => (
              <Navbar.CollapseItem key={button.name}>
                <Button
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  onPress={button.action}
                >
                  {button.name}
                </Button>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
      <br />
      <br />
      {add && <Addtask />}
      {view && <Viewtask />}
    </div>
  );
}
