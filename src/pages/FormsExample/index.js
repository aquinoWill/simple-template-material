import React from 'react'
import TextFields from 'components/Forms/TextFields'
import Select from 'components/Forms/Select'
import { RadioGroups, RadioField } from 'components/Forms/RadioGroups'
import { CustomCheckbox } from 'components/Forms/CheckBox'
import { Grid, Button, TextField, Typography } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { PhoneMask } from 'components/Masks/'
import FormSchema from './FormsSchemaValidation'

const states = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' }
]

export const FormsExample = () => (
  <Grid container spacing={2}>
    <Grid item lg={12} sm={12} xs={12}>
      <Typography variant='h4'>Forms example</Typography>
      <Formik
        initialValues={{
          email: '',
          lastName: '',
          firstName: '',
          cellPhone: '',
          sexo: false,
          state: '',
          message: '',
          remember: false
        }}
        validationSchema={FormSchema}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({ field, errors, touched, values, setFieldValue }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Field
                  {...field}
                  label='Nome'
                  name='firstName'
                  error={errors?.firstName && touched?.firstName}
                  helperText={errors?.firstName}
                  component={TextFields}
                />
                <Field
                  {...field}
                  name='lastName'
                  label='Sobrenome'
                  error={errors?.lastName && touched?.lastName}
                  helperText={errors?.lastName}
                  component={TextFields}
                />
                <Field
                  {...field}
                  name='cellPhone'
                  label='Telefone'
                  error={errors?.cellPhone && touched?.cellPhone}
                  helperText={errors?.cellPhone}
                  component={TextFields}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    inputComponent: PhoneMask
                  }}
                />
                <Field
                  {...field}
                  name='email'
                  label='E-mail'
                  error={errors?.email && touched?.email}
                  helperText={errors?.email}
                  component={TextFields}
                />
                <RadioGroups name='sexo' arial='sexo' label='sexo' value={values.sexo} setFieldValue={setFieldValue}>
                  <Field component={RadioField} value='masculino' label='Masculino' />
                  <Field component={RadioField} value='feminino' label='Feminino' />
                </RadioGroups>

                <Field
                  id='state'
                  name='state'
                  data={states}
                  label='Selecione'
                  setFieldValue={setFieldValue}
                  error={errors?.state && touched?.state}
                  helperText='Selecione o estado que você mora'
                  component={Select}
                />

                <Field
                  {...field}
                  multiline
                  rowsMax={4}
                  name='message'
                  label='Mensagem'
                  variant='outlined'
                  error={errors?.message && touched?.message}
                  helperText={errors?.message}
                  component={TextFields}
                />

                <CustomCheckbox name='remember' label='Lembrar-me' setFieldValue={setFieldValue} />

                <TextField type='file' />
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
