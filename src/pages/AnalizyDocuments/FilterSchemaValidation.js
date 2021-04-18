import * as Yup from 'yup'

const FilterSchema = Yup.object().shape({
  date: Yup.string().required('Required')
})

export default FilterSchema
