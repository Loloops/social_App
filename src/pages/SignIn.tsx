import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh'
  },
  blueSide: {
    backgroundColor: '#1DA1F2'
  },
  loginSide: {

  }
}))



function SignIn() {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <ul>
          <li>
            <Typography>Читайте...</Typography>
          </li>
          <li>
            <Typography>Узнавайте...</Typography>
          </li>
          <li>
            <Typography>Присоединяйтесь!</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <TwitterIcon />
        <Typography>Узнайте что происходит в мире прямо сейчас </Typography>
        <Typography>Присоединяйтесь прямо сейчас!</Typography>
        <Button variant='contained' color='primary' fullWidth>Зарегистрироваться</Button>
        <Button variant='outlined' color='primary' fullWidth>Зарегистрироваться</Button>
      </section>
    </div>
  )
}

export default SignIn
