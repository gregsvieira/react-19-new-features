import SubmitButton from "./SubmitButton";

const FormStatus = () => {

  const formAction = async (formData: FormData) => {
    const email = formData.get('email');
    await new Promise((resolve) => setTimeout(resolve, 3000))

    alert(`Email sended to ${email}`)
  }

  return (
    <form action={formAction}>
      <input type="email" name="email" placeholder="Type your email" />
      <SubmitButton />
    </form>
  )
}

export default FormStatus;