import { login } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const loginElement = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(loginElement));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <TextField
            id="login-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
        </label>
        <label>
          <TextField
            id="login-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </label>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
};
