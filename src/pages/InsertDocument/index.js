import React from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
// import { uploadService } from 'services'
import { Formik, Form } from 'formik'
import UploadSchema from './UploadSchemaValidation'

export const InsertDocument = () => (
  <Grid container spacing={2}>
    <Grid item lg={12} sm={12} xs={12}>
      <Typography variant='h4'>Incluir documento</Typography>
    </Grid>
    <Grid item lg={12} sm={12} xs={12}>
      <Formik
        initialValues={{
          uploadFile: ''
        }}
        validationSchema={UploadSchema}
        onSubmit={values => {
          // const {
          //   key: { data }
          // } = await uploadService(values)
          console.log(values)
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  type='file'
                  label='Upload de arquivo'
                  name='uploadFile'
                  error={errors?.uploadFile && touched?.uploadFile}
                  helperText={errors?.uploadFile}
                  onChange={event => {
                    setFieldValue('uploadFile', event.currentTarget.files[0])
                  }}
                />
              </Grid>
            </Grid>

            <Button color='primary' type='submit'>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  </Grid>
)
