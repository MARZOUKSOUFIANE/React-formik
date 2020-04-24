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



function YoutubeForm() {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            name: 'Octo',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log('Form data', values)
        }
    })

    // console.log(formik.values)

    return (
        <div className={classes.root}>
           <Paper  className={classes.form} elevation={3}>
           <form onSubmit={formik.handleSubmit} >
                <label htmlFor='name' >Name</label>
                <input  type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor='email' >E-Mail</label>
                <input  type='email' id='email' name='email'onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='channel' >Channel</label>
                <input  type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>

                <button type='submit'>Sumbit</button>
            </form>
           </Paper>
        </div>
    )
}

export default YoutubeForm
