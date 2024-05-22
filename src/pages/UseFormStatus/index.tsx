import Card from "../../components/Card";
import FormStatus from "./components/FormStatus";

export default function UseFormStatus() {

  return (
    <>
      <div>
        <title>UseFormStatus</title>
        <meta name='description' content='Status when send a form' />
      </div>
      <div>
        <h1>UseFormStatus</h1>
        <FormStatus />

        <div>
          <Card now={makeCode} before={makeCode} />
        </div>
      </div>
    </>
  )
}

const makeCode: string[] = [
`import Card from "../../components/Card";
import FormStatus from "./components/FormStatus";`]