import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' disabled={pending}>
      {pending ? 'Sending...' : 'Send'}
    </button>
  )
}

export default SubmitButton;