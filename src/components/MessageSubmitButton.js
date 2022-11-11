import React from 'react';
import {IconButton} from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';

import { pushMessage } from '../firebase';


const MessageSubmitButton = ({inputEl, name, setText, text}) =>{
  return(
    <IconButton disabled={text === ''} onClick={()=>{
      pushMessage({name: 'よなづ', text});
      setText('');
      inputEl.current.focus();
    }}>
      <SendIcon />
    </IconButton>
    
  );

};

export default MessageSubmitButton;