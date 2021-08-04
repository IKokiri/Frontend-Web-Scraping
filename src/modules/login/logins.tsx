import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Login(): JSX.Element {
  return (
    <Container>
      <form action="">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              <TextField
                required
                type="text"
                id="email"
                label="E-Mail"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <TextField
                required
                type="password"
                id="password"
                label="Password"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <Button variant="contained" color="primary" fullWidth>
                Entrar
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
