import { Form, Container, Button } from "react-bootstrap";
import SignUpStyles from "../styles/LoginSignUpPages.module.css";
import WorldIcon from "../components/icons/WorldIcon";
import FormInputField from "../components/form/FormInputField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

//TODO Change for the notes_api interface
export interface SignUpFields {
  username: string;
  email: string;
  partnername: string
  password: string;
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SignUpFields>();
  const { signUp } = useContext(AppContext);
  const onSubmit = async (data: SignUpFields) => {
    try {
      await signUp(data)
      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <>
      <main className={SignUpStyles.container}>
        <WorldIcon />
        <Container fluid className={SignUpStyles.textContainer}>
          <h1>Create Account</h1>
          <h5>While we are away</h5>
        </Container>
        <Form
          className={`mt-4 ${SignUpStyles.form}`}
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
            name="partnername"
            placeholder="How does your partner call you?"
            className={`mt-2 p-2`}
            register={register}
            error={errors.partnername}
            registerOptions={{ required: true }}
            type="text"
          />
          <FormInputField
            name="email"
            className={`mt-2 p-2`}
            placeholder="Email"
            register={register}
            error={errors.email}
            registerOptions={{ required: true }}
            type="email"
          />
          <FormInputField
            name="password"
            placeholder="Password"
            className={`mt-2 p-2`}
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
            Submit
          </Button>
        </Form>
      </main>
    </>
  );
}
