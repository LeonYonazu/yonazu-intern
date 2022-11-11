import React from 'react';
import {ListItem, ListItemAvatar, ListItemText ,Avatar, Typography, makeStyles} from '@material-ui/core';
import { gravatarPath } from '../gravatar';

const useStyles = makeStyles((theme)=>({
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({name, text}) =>{
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <ListItem divider={true}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="text.primary"
            >
              {text}
            </Typography>
        }
      />
    </ListItem>
  )
};

export default MessageItem;
