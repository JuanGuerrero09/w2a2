import { Form, Container, Button } from "react-bootstrap";
import LoginStyles from "../styles/LoginSignUpPages.module.css";
import WorldIcon from "../components/icons/WorldIcon";
import FormInputField from "../components/form/FormInputField";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import * as Api from "../network/api";
import { UserModel } from "../models/user";

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
  const [user, setUser] = useState<UserModel | null>(null);
  const [error, setError] = useState('')
  const onSubmit = (data: LoginFields) => {
    console.log(data)
    login(data)
  };

  async function login(data:LoginFields) {
    try {
      const user = await Api.login(data);
      setUser(user);
    } catch (error) {
      console.error(error);
      setUser(null)
      setError('Invalid log in')
    }
  }
  // useEffect(() => {
  //   login()
  // }, []);


  return (
    <>
      <main className={LoginStyles.container}>
      
      {user 
      ?<p>{`${user?.email} ${user?.username}`}</p>
      :<p style={{color:'red'}}>{error}</p>}
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
