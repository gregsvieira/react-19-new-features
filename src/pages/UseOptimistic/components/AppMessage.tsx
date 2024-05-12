import { useState } from "react";
import FormMessage, { IMessages } from "./FormMessage";



const AppMessage = () => {
  const [ messages, setMessages ] = useState<IMessages[]>([
    {text: 'Hello, welcome to the React19', sending: false, key: 1}
  ]);

  async function deliverMessage(message: string) {
    // Beeing optimistic here when data it's not ready!
    await new Promise((resolve) => setTimeout( resolve, 1500));

    // Final data here!
    return message;
  }

  async function sendMessage(formData: FormData) {
    const message = formData.get('message');
    if (!message) {
      return;
    }
    const sentMessage = await deliverMessage(String(message));
    
    setMessages((messages) => [
      ...messages, 
      {text: sentMessage, sending: false, key: Math.random() }
    ])
  }

  return (
    <FormMessage messages={messages} sendMessage={sendMessage} />
  )
}

export default AppMessage;