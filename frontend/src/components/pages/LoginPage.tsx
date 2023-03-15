import { Form, Container, Button } from "react-bootstrap";
import LoginStyles from "../../styles/LoginSignUpPages.module.css";
import WorldIcon from "../icons/WorldIcon";
import FormInputField from "../form/FormInputField";
import { useForm } from "react-hook-form";

//TODO Change for the notes_api interface
interface LoginFields {
  username: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<LoginFields>();
  const onSubmit = (data: LoginFields) => console.log(data);
  return (
    <>
      <main className={LoginStyles.container}>
        <WorldIcon />
        <Container fluid className={LoginStyles.textContainer}>
          <h1>Welcome Back</h1>
          <h5>While we are away</h5>
        </Container>
        <Form
          className={`mt-4 ${LoginStyles.form}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInputField
            name="username"
            placeholder="Username"
            register={register}
            error={errors.username}
            registerOptions={{ required: true }}
            type="text"
          />
          <FormInputField
            name="password"
            placeholder="Password"
            register={register}
            error={errors.password}
            registerOptions={{ required: true }}
            type="password"
          />
          <Button
            variant="dark"
            className="p-3 mt-4"
            type="submit"
            disabled={isSubmitting}
          >
            Log In
          </Button>
        </Form>
      </main>
    </>
  );
}
