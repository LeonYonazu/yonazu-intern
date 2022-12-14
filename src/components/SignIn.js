import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link 
        color="inherit" 
        href=""
        target="_blank"
        rel="noopener">
        よなづ
      </Link>
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({setName}) {
  // ボタンの初期値としてdisabledをtrueとすることで初期状態で押せないようにしたい
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState('');
  const [isComposed, setIsComposed] = useState(false);
  console.log(string);

  useEffect(()=>{
    const disabled = string === '';
    setDisabled(disabled)
  }, [string]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              onChange={(event)=>setString(event.target.value)}
              onKeyDown={(event)=>{
                if(isComposed) return;
                //名前編集中ならアーリーリターンで下のsetNameが機能しないようにした
                if(event.key === 'Enter'){
                  setName(event.target.value);
                  event.preventDefault();
                }
              }}
              onCompositionStart={()=>setIsComposed(true)}
              onCompositionEnd={()=>setIsComposed(false)}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
              onClick={()=>{
                setName(string)
              }}
              //ボタンが押されたタイミングでnameにstringの内容を格納した。(メモと同じことをしている)
              //Buttonコンポーネントがどのような引数を取れるのか、はMaterial-UIを検索する
            >
              はじめる
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}