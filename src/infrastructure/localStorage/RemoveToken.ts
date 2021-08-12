import GetToken from './GetToken';

class RemoveToken {
  private token: string;

  constructor() {
    const getToken = new GetToken();

    this.token = getToken.get();
  }

  remove(): void {
    if (this.token) {
      localStorage.setItem('token', '');
    }
  }
}

export default RemoveToken;
