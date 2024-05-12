import { useFormState } from 'react-dom';

interface validateResponse {
    success: boolean;
    text: string;
}

const FormState = () => {
  
  const validateUser = (prevState: string, formData: FormData): validateResponse => {
    const username = formData.get('username');
    const password = formData.get('password');

    const isInvalidPassword = typeof password !== 'string' || password == '' || password.length < 6 || !password;
    const isInvalidUsername = typeof username !== 'string' || username == '' || !username;

    if (isInvalidPassword && isInvalidUsername) {
      return {
        success: false,
        text: 'Username and Password is invalid'
      };
    }

    if (isInvalidPassword) {
      return {
        success: false,
        text: 'Password is invalid'
      };
    }

    if (isInvalidUsername) {
      return {
        success: false,
        text: 'Username is invalid'
      };
    }

      return {
        success: true,
        text: 'Registered successfully'
      };

  };

  const [message, formAction] = useFormState(validateUser, null);

  return (
    <form action={formAction}>
      <input type="text" name="username" placeholder="Type your username" />
      <input type="password" name="password" placeholder="Type your password" />
      <button type="submit">
        Send
      </button>
      {message && <h4>{message.text}</h4>}
    </form>
  )
}

export default FormState;

// More control between front and backend