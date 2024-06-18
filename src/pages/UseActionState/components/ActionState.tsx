import { useActionState } from 'react';

interface IValidateResponse {
    success: boolean;
    text: string;
}

interface IPrevState {
  text: string;
}

const ActionState = () => {
  
  const validateUser = (prevState: IPrevState, formData: FormData): IValidateResponse => {
    console.log('prevState on form', prevState)
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

  const [message, formAction] = useActionState(validateUser, { success: true, text: 'Send to register' } );

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

export default ActionState;

// More control between front and backend