import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container } from "react-bootstrap";

const SignUpForm = ({ errors, touched, isSubmitting }) => {
    return (
        <Container className="align-items-center">
            <h1>Sign Up</h1>
            <br />
            <Form>
                <div>
                    <Field type="text" name="producttitle" placeholder=" Product Title"></Field>
                    {touched.producttitle && errors.producttitle && <span style={{ color: "red" }}>{errors.producttitle}</span>}
                </div> <br />
                <div>
                    <Field type="text" name="description" placeholder=" Product Description"></Field>
                    {touched.description && errors.description && <span style={{ color: "red" }}>{errors.description}</span>}
                </div> <br />
                <div>
                    <Field type="text" as="select" name="severity" placeholder=" Product Title">
                        <option value="Select Severity">Select Severity</option>
                        <option value="p1">High p1</option>
                        <option value="p2">Medium p2</option>
                        <option value="p3">Low p3</option>
                        <option value="p4">Very Low p4</option>

                    </Field>
                    {touched.severity && errors.severity && <span style={{ color: "red" }}>{errors.severity}</span>}
                </div> <br />
                <div>
                    <Field type="text" as="select" name="status" placeholder=" Product status">
                        <option value="0">Select Status</option>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                        <option value="Rejected">Rejected</option>
                    </Field>
                    {touched.status && errors.status && <span style={{ color: "red" }}>{errors.status}</span>}
                </div> <br />
                <div>
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </div><br />
            </Form >
        </Container >
    )

}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ producttitle, description, severity, status }) {
        return {
            producttitle: producttitle || "",
            description: description || "",
            severity: severity || "",
            status: status || ""
        }
    },
    validationSchema: Yup.object().shape({
        producttitle: Yup.string().min(3, "Prouct Title must be atleast 3 characters.").required("Product Title is Required."),
        description: Yup.string().min(3, "Prouct description must be atleast 3 characters.").required("Product Description is Required."),
        severity: Yup.string().max(2, "Prouct severity must be p1,p2,p3,p4.").required("Product severity is Required."),
        status: Yup.string().min(3, "Prouct select product status.").required("Product status is Required.")
    }),
    handleSubmit(values, { props, resetForm, setSubmitting }) {
        props.onSubmit(values)
        setSubmitting(false);
        resetForm();
    }
})(SignUpForm)


export default FormikSignUpForm;