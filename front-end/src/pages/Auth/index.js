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
  - [x] ログイン処理
    - [x] ログイン画面からボタン押下
      - [x] ユーザ情報確認（API叩く）
      - [x] ユーザ情報あれば
        - [x] ユーザ情報保持（トークン・ユーザ名・権限）
        - [x] ダッシュボードへ画面遷移
      - [x] ユーザ情報ない
        - [x] ログインエラー時のリダイレクト処理
      - [x] トークンをreduxのstoreに登録する
      - [x] dispatchにトークンは仕込めたので、ユーザー名も入れられるようにする
      - [ ] その他バリデーション
        - [ ] 空白チェック
    - [x] ログイン画面以外からURL直打ちした場合にログイン画面に遷移させる
      - [x] トークンチェック
        - [x] トークンがある場合にリンク先に遷移
        - [x] トークンがない場合にログイン画面に遷移
    - [x] ログアウト機能
      - [x] トークンの破棄
      - [ ] ポップアップ(ログアウトの確認、ログアウトしましたのポップアップ(数秒で自動で消える))
    - [x] アイコン表示/非表示切り替え機能
      - [x] ダッシュボードのリンク先を作成
      - [x] ダッシュボード画面のページを作成
      - [x] ボタンを押したらアイコンの切り替えを行う
*/
// ログイン処理
export default function SignIn() {
  console.log("ログイン処理");
  const theme = createTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleLogin() {
    const url = `${API.USER.LOGIN}`
    // "katsunori.shimizu@salto.link123456"
    const data = { email: values.email, password: values.password };
 
    setError({...errors, emailText: "", email: false, passwordText: "", password: false});

    // if (data.email == "" && data.password == "") {
    //   setError({...errors, emailText: "メールの入力が行われていません", email: true, passwordText: "パスワードの入力が行われていません", password: true});
    //   return
    // }

    if(errors.email == "") {
      setError({...errors, emailText: "メールの入力が行われていません", email: true});
      console.log(errors)
      return
    }

    if(errors.password == "") {
      setError({...errors, passwordText: "パスワードの入力が行われていません", password: true});
      console.log(errors);
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
      dispatch({type:"signin/signinName", payload: 5});
      dispatch({type:"signin/signinId", payload: 3});
      console.log(e);
      setError({...errors, emailText: "メールまたはパスワードが異なります", email: true, passwordText: "メールまたはパスワードが異なります", password: true});
    }
  }
  
  // フォームの入力情報
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  // フォームの入力を監視
  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  }

  // バリデーションエラーの情報
  const [ errors, setError ] = useState({
    email: false,
    emailText: "",
    password: false,
    passwordText: ""
  });

  

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
              color="primary"
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