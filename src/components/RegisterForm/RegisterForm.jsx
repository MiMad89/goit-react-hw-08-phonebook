import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const registerData = {
      name: form.elements.username.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    if (registerData.name.lenght < 2) {
      return ToastContainer.error('Name must be at least 2 characters long', {
        position: 'top-right',
        autoClose: 3000,
        hideprogressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    dispatch(register(registerData));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <lable>
          <TextField
            id="register-name-input"
            label="Name"
            type="text"
            name="username"
            autoComplete="off"
            autoFocus
          />
        </lable>
        <lable>
          <TextField
            id="register-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="off"
            autoFocus
          />
        </lable>
        <lable>
          <TextField
            id="register-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="off"
            autoFocus
          />
        </lable>
        <Button type="submit" variant="contained">
          Register
        </Button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideprogressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        rtl={false}
      />
    </div>
  );
};
