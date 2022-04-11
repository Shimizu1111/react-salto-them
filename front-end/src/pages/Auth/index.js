import React, { useState } from "react";
import { Https } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { 
  Avatar,
  Box, 
  Button, 
  Container, 
  createTheme, 
  CssBaseline, 
  Grid, 
  TextField, 
  ThemeProvider, 
  Typography 
} from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../configs/constant";
import { useSelector, useDispatch } from 'react-redux'
import { login } from "../../services/api";
import { RootState } from '../../redux/store/store'
import { counterSlice, increment, decrement } from "../../redux/action/signin";

/**
  - [ ] ログイン処理
    - [ ] ログイン画面からボタン押下
      - [x] ユーザ情報確認（API叩く）
      - [x] ユーザ情報あれば
        - [x] ユーザ情報保持（トークン・ユーザ名・権限）
        - [x] ダッシュボードへ画面遷移
      - [x] ユーザ情報ない
        - [x] ログインエラー時のリダイレクト処理
      - [x] トークンをreduxのstoreに登録する
      - [ ] dispatchにトークンは仕込めたので、ユーザー名も入れられるようにする
*/
export default function SignIn() {
  console.log("ログイン処理");
  const theme = createTheme();
  const navigate = useNavigate();

  async function handleLogin() {
    console.log("ログイン処理前");
    const url = `${API.USER.LOGIN}`
    // "katsunori.shimizu@salto.link123456"
    const data = { email: values.email, password: values.password };
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
      dispatch({type:"counter/signin", payload: user.token});
      return navigate(("/users"));
    } catch(e) {
      console.log("エラーが吐かれました");
      dispatch({type:"counter/decrement", payload: "aaa"});
      console.log(e);
      setError({...errors, emailText: "想定外のエラーです", email: true, passwordText: "想定外のエラーです", password: true});
    }
  }
  
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [ errors, setError ] = useState({
    email: false,
    emailText: "",
    password: false,
    passwordText: ""
  });

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  }
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch();

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
          {/* TODO: dispachにreducersのuserLoginのアクションを渡せるようにしたい */}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
              helperText={errors.emailText}
              error={errors.email}
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
              helperText={errors.passwordText}
              error={errors.password}
              // onChange={(event) => setValue(event.target.value)}
              // value={value}
              // helperText={errors.password ?? ''}
              // error={errors.password ? true : false}
              // value={values.password}
              // onChange={(e) => handleChange(e)}
            />
            <LoadingButton
              sx={{ mt: 2, mb: 2 }}
              fullWidth
              size="small"
              color="secondary"
              onClick={handleLogin}
              // endIcon={<SendIcon />}
              // loading={isLoading}
              loadingPosition="end"
              variant="contained"
            >
              Sign In
            </LoadingButton>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  )

}