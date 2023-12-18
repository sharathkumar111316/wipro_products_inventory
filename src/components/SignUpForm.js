import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

const SignUpForm = ({ errors, touched, isSubmitting }) => {
    return (
        <Container className="align-items-center">
            <h1>Sign Up</h1>
            <br />
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
                    <Field type="password" name="confirmpassword" placeholder="Confirm Password"></Field>
                    {touched.confirmpassword && errors.confirmpassword && <span style={{ color: "red" }}>{errors.confirmpassword}</span>}
                </div> <br />

                <div>
                    <Button variant="outline-dark" type="submit" disabled={isSubmitting}>Submit</Button>
                </div><br />
            </Form >
        </Container >
    )

}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ username, password, confirmpassword }) {
        return {
            username: username || "",
            password: password || "",
            confirmpassword: confirmpassword || ""
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().min(3, "User Name must be atleast 3 characters.").required("User Name is Required."),
        password: Yup.string().min(3, "Password must be atleast 3 characters.").required("Password is Required."),
        confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm Password")
    }),
    handleSubmit(formData, { props, resetForm, setSubmitting }) {
        props.onSubmit(formData)
        setSubmitting(false);
        resetForm();
    }
})(SignUpForm)


export default FormikSignUpForm;