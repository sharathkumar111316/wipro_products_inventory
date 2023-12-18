import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const SignInForm = ({ errors, touched, isSubmitting, signInMessage }) => {
    return (
        <Container className="align-items-center">
            <h1>Sign In</h1>
            <br />
            {signInMessage && <Alert variant={"warning"}>{signInMessage}</Alert>}
            <Form>
                <div>
                    <Field type="text" name="username" placeholder="User Name"></Field>
                    {touched.username && errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
                </div> <br />
                <div>
                    <Field type="password" name="password" placeholder="Password"></Field>
                    {touched.password && errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
                </div> <br />

                <div>
                    <Button variant="outline-dark" type="submit" disabled={isSubmitting}>Submit</Button>
                </div><br />
            </Form >
        </Container >
    )

}

const FormikSignInForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().min(3, "User Name must be atleast 3 characters.").required("User Name is Required."),
        password: Yup.string().min(3, "Password must be atleast 3 characters.").required("Password is Required."),
    }),
    handleSubmit(formData, { props, resetForm, setSubmitting }) {
        props.onSubmit(formData)
        setSubmitting(false);
        resetForm();
    }
})(SignInForm)


export default FormikSignInForm;