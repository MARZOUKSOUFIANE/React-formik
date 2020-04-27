import React from 'react'
import {useFormik} from 'formik'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


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

const validate = values => {
    const error = {}

    if(!values.name){
        error.name = "Required Field*"
    }

    if(!values.email){
        error.email = "Required Field*"
    }else if(! /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(values.email)){
        error.email = "Invalid Email Format*"
    }

    if(!values.channel){
        error.channel = "Required Field*"
    }

    return error
}

function YoutubeForm() {
    const classes = useStyles();

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

     console.log(formik.errors)

    return (
        <div className={classes.root}>
           <Paper  className={classes.form} elevation={3}>
           <form onSubmit={formik.handleSubmit} >
               <div className='form-control'>
                <label htmlFor='name' >Name</label>
                <input  type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name?  <div className='error'> {formik.errors.name} </div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='email' >E-Mail</label>
                <input  type='email' id='email' name='email'onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email?  <div className='error'> {formik.errors.email} </div> : null}
                </div>

                <div className='form-control'>
                <label htmlFor='channel' >Channel</label>
                <input  type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>
                {formik.errors.channel?  <div className='error'> {formik.errors.channel} </div> : null}
                </div>

                <button type='submit'>Sumbit</button>
            </form>
           </Paper>
        </div>
    )
}

export default YoutubeForm
