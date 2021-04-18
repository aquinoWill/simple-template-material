import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Button,
  CircularProgress,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import TextFields from 'components/Forms/TextFields'
import FilterSchema from './FilterSchemaValidation'

export const AnalizyDocuments = () => {
  const [isFetching, setIsFetching] = useState(false)

  return (
    <Grid container spacing={2}>
      <Grid item lg={12} sm={12} xs={12}>
        <Typography variant='h4'>Analisar documentos</Typography>
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
        <Formik
          initialValues={{
            date: ''
          }}
          validationSchema={FilterSchema}
          onSubmit={async values => {
            setIsFetching(true)
            // const {
            //   headers: { authorization }
            // } = await userService(values)
            // console.log(authorization)
            console.log(values)
            setIsFetching(false)
          }}
        >
          {({ field, errors, touched }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item lg={12} sm={2} xs={2}>
                  <Field
                    {...field}
                    fullWidth
                    type='date'
                    name='date'
                    autoComplete='email'
                    component={TextFields}
                    defaultValue='2017-05-24'
                    helperText={errors?.email}
                    error={errors?.email && touched?.email}
                  />
                </Grid>

                <Grid item lg={12} sm={2} xs={2}>
                  <Button type='submit' fullWidth variant='contained' color='primary'>
                    Buscar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
      {isFetching ? (
        <Grid container justify='center'>
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant='body1'>ID: 123123123123</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant='body1'>Data inclusão: 12/12/2020</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant='body1'>Arquivo: imagem.png</Typography>
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Typography variant='body1'>Regra: Duplicidade de imagem </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <TableContainer component={Paper}>
                      <Table size='small' aria-label='a dense table'>
                        <TableHead>
                          <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Data inclusão</TableCell>
                            <TableCell>Arquivo</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>123123123</TableCell>
                            <TableCell>20/12/2020 10:20</TableCell>
                            <TableCell>imagem.png</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>123123123</TableCell>
                            <TableCell>20/12/2020 10:20</TableCell>
                            <TableCell>imagem.png</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>123123123</TableCell>
                            <TableCell>20/12/2020 10:20</TableCell>
                            <TableCell>imagem.png</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography variant='body1'>ID: 123123123123</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant='body1'>Data inclusão: 12/12/2020</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant='body1'>Arquivo: imagem.png</Typography>
                  </Grid>
                </Grid>
              </CardContent>

              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <Typography variant='body1'>Regra: Duplicidade de imagem </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <TableContainer component={Paper}>
                      <Table size='small' aria-label='a dense table'>
                        <TableHead>
                          <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Data inclusão</TableCell>
                            <TableCell>Arquivo</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>123123123</TableCell>
                            <TableCell>20/12/2020 10:20</TableCell>
                            <TableCell>imagem.png</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>123123123</TableCell>
                            <TableCell>20/12/2020 10:20</TableCell>
                            <TableCell>imagem.png</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>123123123</TableCell>
                            <TableCell>20/12/2020 10:20</TableCell>
                            <TableCell>imagem.png</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </>
      )}
    </Grid>
  )
}
