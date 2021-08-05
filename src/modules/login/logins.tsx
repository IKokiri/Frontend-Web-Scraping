/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Authenticate from '../../domain/usecases/authenticate/Authenticate';
import AxiosRequest from '../../infrastructure/api/AxiosRequest';
import { AuthParams } from '../../types/AuthParams';

function Login(): JSX.Element {
  const axiosApi = new AxiosRequest();
  const authenticate = new Authenticate(axiosApi);
  const history = useHistory();

  const auth = async (event: any) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const senha = event.target.elements.password.value;

    const params: AuthParams = {
      email,
      senha,
    };

    await authenticate.auth(params);

    history.push('/admin');
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <form onSubmit={auth}>
          <Grid container spacing={4}>
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
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Entrar
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default Login;
