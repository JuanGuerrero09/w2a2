import { Form } from "react-bootstrap";
import { UseFormRegister, RegisterOptions, FieldError } from "react-hook-form";

interface FormInputFieldProps {
  name: string;
  label?: string;
  extraText?: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}

export default function FormInputField({
  name,
  label,
  extraText,
  register,
  error,
  registerOptions,
  ...props
}: FormInputFieldProps) {
  return (
    <Form.Group controlId={`${name}-input`}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control className="p-2" {...props} {...register(name, registerOptions)} isInvalid={!!error}/>
      {extraText && <Form.Text className="text-muted">{extraText}</Form.Text>}
      <Form.Control.Feedback type="invalid">
        {error?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
