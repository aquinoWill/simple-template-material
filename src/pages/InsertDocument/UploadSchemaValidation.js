import * as Yup from 'yup'

const UploadSchema = Yup.object().shape({
  uploadFile: Yup.mixed().required('Required')
})

export default UploadSchema
