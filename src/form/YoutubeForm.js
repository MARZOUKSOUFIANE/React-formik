import React from 'react'
import {useFormik,Formik,Form,Field,ErrorMessage} from 'formik'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  form: {
      padding: 20
  }
}));


const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object(
    {
        name: Yup.string().required('Required !!!'),
        email: Yup.string().email('Invalid email format !!!').required('Required !!!'),
        channel: Yup.string().required('Required !!!'),
    }
)



function YoutubeForm() {
    const classes = useStyles();

    return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}>
        <div className={classes.root}>
           <Paper  className={classes.form} elevation={3}>
           <Form>
               <div className='form-control'>
                <label htmlFor='name' >Name</label>
                <Field  type='text' id='name' name='name' />
                <ErrorMessage name="name" />
                </div>

                <div className='form-control'>
                <label htmlFor='email' >E-Mail</label>
                <Field  type='email' id='email' name='email'/>
                <ErrorMessage name="email" />
                </div>

                <div className='form-control'>
                <label htmlFor='channel' >Channel</label>
                <Field  type='text' id='channel' name='channel' />
                <ErrorMessage name="channel" />
                </div>

                <button type='submit'>Sumbit</button>
            </Form>
           </Paper>
        </div>
     </Formik>
    )
}

export default YoutubeForm
