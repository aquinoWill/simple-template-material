import React from 'react'
import { Avatar, Button, Link, Grid, Box, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextFields from 'components/Forms/TextFields'
import { Formik, Form, Field } from 'formik'
// import { userService } from 'services'
import { CustomCheckbox } from 'components/Forms/CheckBox'
import SignInSchema from './SignInSchemaValidation'
import signInStyled from './styled'

const Copyright = () => (
  <Typography variant='body2' color='textSecondary' align='center'>
    {'Copyright © '}
    <Link color='inherit' href='https://material-ui.com/'>
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

export const SignIn = () => {
  const { paper, avatar } = signInStyled()

  return (
    <Container component='main' maxWidth='xs'>
      <div className={paper}>
        <Avatar className={avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
            remember: false
          }}
          validationSchema={SignInSchema}
          onSubmit={async values => {
            // const {
            //   headers: { authorization }
            // } = await userService(values)
            // console.log(authorization)
            console.log(values)
          }}
        >
          {({ field, errors, touched, setFieldValue }) => (
            <Form>
              <Field
                {...field}
                fullWidth
                label='E-mail'
                name='email'
                variant='outlined'
                autoComplete='email'
                component={TextFields}
                helperText={errors?.email}
                error={errors?.email && touched?.email}
              />
              <Field
                {...field}
                fullWidth
                label=''
                name='password'
                variant='outlined'
                autoComplete='senha'
                component={TextFields}
                helperText={errors?.password}
                error={errors?.password && touched?.password}
              />
              <CustomCheckbox name='remember' label='Lembrar-me' setFieldValue={setFieldValue} />

              <Button type='submit' fullWidth variant='contained' color='primary'>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
