import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import React from "react";

export default function Tasks({ tasks, onClick }) {
  console.log(tasks);
  return (
    <List sx={{ width: "90%", bgcolor: "background.paper" }}>
      {tasks.map((task, index) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Gopal Bhaire" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={task.task}
              secondary={<React.Fragment>{task.desc}</React.Fragment>}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
