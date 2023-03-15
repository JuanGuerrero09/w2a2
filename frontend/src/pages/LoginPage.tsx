import { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import FormInputField from "../components/form/FormInputField";
import WorldIcon from "../components/icons/WorldIcon";
import { useUser } from "../hooks/useUser";
import LoginStyles from "../styles/LoginSignUpPages.module.css";

//TODO Change for the notes_api interface
export interface LoginFields {
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
  const { user, login, logout, getLoggedUser, error } = useUser();
  const onSubmit = (data: LoginFields) => {
    login(data);
  };

  useEffect(() => {
    getLoggedUser();
  }, []);

  return (
    <>
      <main className={LoginStyles.container}>
        {user ? (
          <p>{`${user?.email} ${user?.username}`}</p>
        ) : (
          <>
            <p style={{ color: "red" }}>{error}</p>
            <p style={{ color: "red" }}>{"please log in"}</p>
          </>
        )}
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
        <Button onClick={logout}>Log out</Button>
      </main>
    </>
  );
}
