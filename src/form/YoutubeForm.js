import React from 'react'
import {useFormik,Formik,Form,Field,ErrorMessage,FieldArray, FastField} from 'formik'
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
    },
    phoneNumbers: ['',''],
    phNumbers: ['']
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object(
    {
        name: Yup.string().required('Required !!!'),
        email: Yup.string().email('Invalid email format !!!').required('Required !!!'),
        channel: Yup.string().required('Required !!!'),
        address: Yup.string().required('Required !!!'),
        social: Yup.object().shape({
            facebook: Yup.string().required('Required !!!'),
            twitter: Yup.string().required('Required !!!')
        })
    }
)

const validateComments = value => {
    let error
    if(!value){
        error = "Required field !!!"
    }
    return error
}



function YoutubeForm() {
    const classes = useStyles();

    return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
       {
           formik => {
               console.log(formik)
               return (
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
                     <Field  as='textarea' type='text' id='comments' name='comments' validate={validateComments} />
                     <ErrorMessage name="comments" component={TextError}/>
                     </div>
     
                     <div className='form-control'>
                     <label htmlFor='address' >Address</label> 
                     <Field name='address'>
                         {
                             (props) => {
                                 const {field,form,meta} = props
                                 return (
                                     <div  className='error'>
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
                     <ErrorMessage name="social.facebook" component={TextError}/>
                     </div>
     
                     <div className='form-control'>
                     <label htmlFor='twitter' >Twitter profile</label>
                     <Field  type='text' id='twitter' name='social.twitter' />
                     <ErrorMessage name="social.twitter" component={TextError}/>
                     </div>
     
                     <div className='form-control'>
                     <label htmlFor='phone1' >Primary phoneNumber</label>
                     <Field  type='text' id='phone1' name='phoneNumbers[0]'/>
                     <ErrorMessage name="phoneNumbers[0]" component={TextError}/>
                     </div>
     
                     <div className='form-control'>
                     <label htmlFor='phone2' >Secondary phoneNumber</label>
                     <Field  type='text' id='phone2' name='phoneNumbers[1]' />
                     <ErrorMessage name="phoneNumbers[1]" component={TextError}/>
                     </div>
     
                     <div className='form-control'>
                     <label >phNumbers</label>
                     <FieldArray name='phNumbers'>
                         {
                             (fieldArrayProps) => {
                                 const {remove,push,form} = fieldArrayProps
                                 const {values} = form
                                 const {phNumbers} = values
                                 return (
                                     <div>
                                         {
                                             phNumbers.map((phNumber,index) => (
                                                 <div key={index}>
                                                     <Field name={`phNumbers[${index}]`} />
                                                     <button type='button' onClick={() => push('')}> + </button>
                                                     {
                                                         index>0 && <button type='button' onClick={() => remove(index)}> - </button>
                                                     } 
                                                 </div>
                                             ))
                                         }
                                     </div>
                                 )
                             }
                         }
                     </FieldArray>
                     </div>
     
     
                     <button type='button' onClick={() => formik.validateField('comments')} >validate comments</button>
                     <button type='button' onClick={() => formik.validateForm()}>validate all</button>
                     <button type='button' onClick={() => formik.setFieldTouched('comments')}>visit comments</button>
                     <button type='button' onClick={() => formik.setTouched({
                         name: true,
                         email: true,
                         channel: true,
                         address: true,
                         comments: true,
                         social: {
                             facebook: true,
                             twitter: true
                         }
                     })}>visit all</button>
                     <button>Sumbit</button>
                 </Form>
                </Paper>
             </div>
               )
           }
       }
     </Formik>
    )
}

export default YoutubeForm
