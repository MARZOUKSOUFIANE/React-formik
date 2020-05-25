import React from 'react'
import {useFormik,Formik,Form,Field,ErrorMessage} from 'formik'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup'
import TextError from '../component/TextError'


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
    channel: '',
    comments: '',
    address: '',
    social:  {
        facebook: '',
        twitter: ''
    }
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object(
    {
        name: Yup.string().required('Required !!!'),
        email: Yup.string().email('Invalid email format !!!').required('Required !!!'),
        channel: Yup.string().required('Required !!!'),
        comments: Yup.string().required('Required !!!'),
        address: Yup.string().required('Required !!!'),
        social: Yup.string().required('Required !!!')
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
                <ErrorMessage name="name" component={TextError} />
                </div>

                <div className='form-control'>
                <label htmlFor='email' >E-Mail</label>
                <Field  type='email' id='email' name='email'/>
                <ErrorMessage name="email" component={TextError}/>
                </div>

                <div className='form-control'>
                <label htmlFor='channel' >Channel</label>
                <Field  type='text' id='channel' name='channel'/>
                <ErrorMessage name="channel" component={TextError}/>
                </div>

                <div className='form-control'>
                <label htmlFor='channel' >Comments</label>
                <Field  as='textarea' type='text' id='comments' name='comments' />
                <ErrorMessage name="comments" component={TextError}/>
                </div>

                <div className='form-control'>
                <label htmlFor='address' >Address</label> 
                <Field name='address'>
                    {
                        (props) => {
                            const {field,form,meta} = props
                            return (
                                <div>
                                    <input type='text' id='address' {...field}/>
                                    { meta.touched && meta.error ? <div>{meta.error}</div> : null }
                                </div>
                            )
                        }
                    }
                </Field>
                </div>

                <div className='form-control'>
                <label htmlFor='facebook' >Facebook profile</label>
                <Field  type='text' id='facebook' name='social.facebook' />
                <ErrorMessage name="facebook" component={TextError}/>
                </div>

                <div className='form-control'>
                <label htmlFor='twitter' >Twitter profile</label>
                <Field  type='text' id='twitter' name='social.twitter' />
                <ErrorMessage name="twitter" component={TextError}/>
                </div>


                <button type='submit'>Sumbit</button>
            </Form>
           </Paper>
        </div>
     </Formik>
    )
}

export default YoutubeForm
