import * as Yup from 'yup'

const FormSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  cellPhone: Yup.string().min(14, 'Digit corretly cell phone').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().min(15, 'Invalid message').required('Required'),
  state: Yup.string().required('Required')
})

export default FormSchema
