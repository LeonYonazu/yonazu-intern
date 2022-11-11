import React, {useState} from 'react';
import SignIn from './SignIn';
import Main from './Main';
import config from '../config.json';

export default () => {
  const [name, setName] = useState('');

//SignInを表示させるか、Mainを表示させるか。開発に際しいちいちSignInが表示されると面倒なのでconfig.jsonを作成した。
  if (config.signInEnabled && name === ''){
    return <SignIn setName={setName}/>
  } else{
    return <Main name = {name}/>
  }

};

