import { Key, useOptimistic } from 'react';

export interface IMessages {
  text: string;
  sending: boolean;
  key: number;
}

const FormMessage = ({ messages, sendMessage }: {messages: IMessages[], sendMessage: Function}) => {

  const [ 
    optimisticMessages,
    addOptimisticMessages 
    ] = useOptimistic(
      messages,
      (state, newMessage: string) => [...state, { text: newMessage, sending: true }]
      );

  async function formAction(formData: FormData): Promise<void> {
    addOptimisticMessages(formData.get('message'));

    await sendMessage(formData)
  }

  return (
    <>
    <div>
      { optimisticMessages.map((message: {text: string, sending: boolean}, index: Key | number) => (
        <div key={index}>
          <br />
        - {message.text}
          {message.sending && <small> (Sending...) </small>}
        </div>
      ))}
    </div>
    <div style={{display: 'inline-flex', flexDirection: 'column', }}>
      <form action={formAction}>
        <input type='text' name='message' placeholder='Type something' />
        <button type='submit'>Send</button>
      </form>
    </div>
    </>
  );
}

export default FormMessage;