import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import { pushMessage } from '../firebase';


const MessageField = ({inputEl, name, setText, text}) =>{
  const [isComposed, setIsComposed] = useState(false)
  return <TextField 
  autoFocus
  fullWidth={true} 
  inputRef={inputEl}
  onChange={(event)=>setText(event.target.value)} 
  onKeyDown={(event)=>{
    if(isComposed) return;
    //名前編集中ならアーリーリターンで下のsetNameが機能しないようにした

    const text = event.target.value;
    if (text === '') return;

    if(event.key === 'Enter'){
      pushMessage({name: 'よなづ' ,text});
      setText('');
      event.preventDefault();
    }
  }}
  onCompositionStart={()=>setIsComposed(true)}
  onCompositionEnd={()=>setIsComposed(false)}
  value = {text}
  />
};

export default MessageField;