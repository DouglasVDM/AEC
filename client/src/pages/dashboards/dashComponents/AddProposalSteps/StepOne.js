import { Form, Formik, useFormik } from "formik";
import * as Yup from 'yup'
import { Button, TextField } from "@mui/material";

// FORM VALIDATION FRONTEND
const stepOneValidationSchema = Yup.object({
  proposal_name: Yup.string().required().label('proposal name'),
  problem_statement: Yup.string().required().label('Problem statement'),
  proposed_action: Yup.string().required().label('Proposed action')
});

// COMPONENT
const StepOne = ({ data, next }) => {

  const formik = useFormik({
    initialValues: {
      proposal_name: data.proposal_name,
      problem_statement: data.problem_statement,
      proposed_action: data.proposed_action,
    },
    validationSchema: stepOneValidationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      next(values)
    },
  });

  return (
    <div>
      <p>{`Page 1 of 9`}</p>
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={data}
      >
        {() => (
          <Form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="proposed_action"
              name="proposed_action"
              label="Proposed Action"
              placeholder='How are you going to solve the problem?'
              multiline
              value={formik.values.proposed_action}
              onChange={formik.handleChange}
              error={formik.touched.proposed_action && Boolean(formik.errors.proposed_action)}
              helperText={formik.touched.proposed_action && formik.errors.proposed_action}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="problem_statement"
              name="problem_statement"
              label="Problem Statement"
              placeholder='How are you going to solve the problem?'
              multiline
              value={formik.values.problem_statement}
              onChange={formik.handleChange}
              error={formik.touched.problem_statement && Boolean(formik.errors.problem_statement)}
              helperText={formik.touched.problem_statement && formik.errors.problem_statement}
            />
            <br />
            <br />
            <TextField
              fullWidth
              id="proposal_name"
              name="proposal_name"
              label="Proposal Name"              
              placeholder='How are you going to solve the problem?'
              multiline
              value={formik.values.proposal_name}
              onChange={formik.handleChange}
              error={formik.touched.proposal_name && Boolean(formik.errors.proposal_name)}
              helperText={formik.touched.proposal_name && formik.errors.proposal_name}
            />
            <br />
            <br />
              <Button
                id='next'
                variant="contained"
                size='large'
                type='submit'
                color='primary'
              >
                Next
              </Button>
          </Form>
        )}
      </Formik>
    </div>

  )
}

export default StepOne;
