import React, { useState } from "react";
import { Https } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { 
  Avatar,
  Box, 
  Container, 
  createTheme, 
  CssBaseline, 
  TextField, 
  ThemeProvider, 
  Typography 
} from "@mui/material"
import { useNavigate } from "react-router-dom";
import { API } from "../../configs/constant";

/**
 * - [ ] ログインしている場合
 *    - [ ] localhost:3000/login に遷移できないこと(ログアウトするまでは遷移できないこと)
 * - [ ] ログインしていない場合 
 *    - [ ] localhost:3000/* に直接アクセスできないこと
*/

export default function SignIn() {
  console.log("ログイン処理");
  const theme = createTheme();
  const navigate = useNavigate();

  // フォームの入力情報
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  // メールのバリデーションエラー
  const [ mail, setMail ] = useState({
    error: false,
    errorText: ""
  })

  // パスワードのバリデーションエラー
  const [ password, setPassword ] = useState({
    error: false,
    errorText: ""
  })

  // ログイン処理
  async function handleLogin() {
    const url = `${API.USER.LOGIN}`
    // "katsunori.shimizu@salto.link123456"
    const data = { email: values.email, password: values.password };

    if(values.email == "" && values.password == "") {
      setMail({...mail, error: true, errorText: "メールの入力が行われていません"});
      setPassword({...password, error: true, errorText: "パスワードの入力が行われていません"});
    }

    if(values.email == "") {
      setMail({...mail, error: true, errorText: "メールの入力が行われていません"});
      setPassword({...password, error: false, errorText: ""});
      return
    }

    if(values.password == "") {
      setMail({...mail, error: false, errorText: ""});
      setPassword({...password, error: true, errorText: "パスワードの入力が行われていません"});
      return
    }
    
    // 会員情報取得API
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      if(res.ok != true ) {
        console.log("responseの結果がfalseになりました");
        return
      }
      const user = await res.json();
      // APIで取得した会員情報をlocalstrageに保存
      localStorage.setItem('signinId', user.user.id);
      localStorage.setItem('signinName', user.user.name);
      localStorage.setItem('signinToken', user.token);
      return navigate(("/users"), { replace: true });
    } catch(e) {
      console.log("エラーが吐かれました");
      console.log(e);
      setMail({...mail, error: true, errorText: "メールまたはパスワードが異なります"});
      setPassword({...password, error: true, errorText: "メールまたはパスワードが異なります"});
    }
  }

  // フォームの入力を監視
  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  }

  return(
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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <Https />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(event) => handleInputChange(event)}
              value={values.email}
              helperText={mail.errorText}
              error={mail.error}
            />
            <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              fullWidth
              autoComplete="current-password"
              type="password"
              onChange={(event) => handleInputChange(event)}
              value={values.password}
              helperText={password.errorText}
              error={password.error}
            />
            <LoadingButton
              sx={{ mt: 2, mb: 2 }}
              fullWidth
              size="small"
              color="primary"
              onClick={handleLogin}
              loadingPosition="end"
              variant="contained"
            >
              Sign In
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}